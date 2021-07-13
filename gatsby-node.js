const crypto = require(`crypto`);
const { createFilePath } = require(`gatsby-source-filesystem`);

// These are customizable theme options we only need to check once
let contentPath = `posts`;

// These templates are simply data-fetching wrappers that import components
const PostTemplate = require.resolve(`./src/templates/post`);

const mdxResolverPassthrough =
  (fieldName) => async (source, args, context, info) => {
    const type = info.schema.getType(`Mdx`);
    const mdxNode = context.nodeModel.getNodeById({
      id: source.parent,
    });
    const resolver = type.getFields()[fieldName].resolve;
    const result = await resolver(mdxNode, args, context, {
      fieldName,
    });
    return result;
  };
exports.sourceNodes = ({ actions, schema }) => {
  const { createTypes } = actions;
  createTypes(
    schema.buildObjectType({
      name: `BlogPost`,
      fields: {
        id: { type: `ID!` },
        title: {
          type: `String!`,
        },
        slug: {
          type: `String!`,
        },
        date: { type: `Date`, extensions: { dateformat: {} } },
        tags: { type: `[String]!` },
        keywords: { type: `[String]!` },
        excerpt: {
          type: `String!`,
          args: {
            pruneLength: {
              type: `Int`,
              defaultValue: 140,
            },
          },
          resolve: mdxResolverPassthrough(`excerpt`),
        },
        body: {
          type: `String!`,
          resolve: mdxResolverPassthrough(`body`),
        },
      },
      interfaces: [`Node`],
    })
  );
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      mdxPages: allBlogPost(
        sort: { fields: [date, title], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            id
            excerpt
            slug
            title
            date(formatString: "MMMM DD, YYYY")
            parent {
              parent {
                ... on File {
                  relativeDirectory
                }
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic(result.errors);
  }

  // Create Post pages.
  const { mdxPages } = result.data;
  const posts = mdxPages.edges;

  // Create a page for each Post
  posts.forEach(({ node: post }) => {
    const { slug } = post;
    createPage({
      path: slug,
      component: PostTemplate,
      context: {
        ...post,
        relativeDirectory: post.parent.parent.relativeDirectory,
      },
    });
  });
};

// Create fields for post slugs and source
// This will change with schema customization with work
exports.onCreateNode = ({ node, actions, getNode, createNodeId }) => {
  const { createNode, createParentChildLink } = actions;

  // Make sure it's an MDX node
  if (node.internal.type !== `Mdx`) {
    return;
  }

  // Create source field (according to contentPath)
  const fileNode = getNode(node.parent);
  const source = fileNode.sourceInstanceName;

  if (node.internal.type === `Mdx` && source === contentPath) {
    const slug = createFilePath({
      node: fileNode,
      getNode,
      basePath: contentPath,
    });

    const fieldData = {
      title: node.frontmatter.title,
      responsive: node.frontmatter.responsive,
      description: node.frontmatter.description,
      fullScreen: node.frontmatter.fullScreen,
      tags: node.frontmatter.tags || [],
      slug,
      date: node.frontmatter.date,
      keywords: node.frontmatter.keywords || [],
    };
    createNode({
      ...fieldData,
      // Required fields.
      id: createNodeId(`${node.id} >>> BlogPost`),
      parent: node.id,
      children: [],
      internal: {
        type: `BlogPost`,
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(fieldData))
          .digest(`hex`),
        content: JSON.stringify(fieldData),
        description: `Blog Posts`,
      },
    });
    createParentChildLink({ parent: fileNode, child: node });
  }
};
