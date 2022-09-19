> # Eternity is the most romantic

- [《Javascript悟道》读书笔记](#《Javascript悟道》读书笔记)
  - [0. 序](#0-序)
  - [1. 英文能力](#1-英文能力)
  - [2. 购买VPS](#2-购买vps)
    - [2.1 常规VPS](#21-常规vps)
    - [2.2 CN2 线路](#22-cn2-线路)
    - [2.3 NCP 线路](#23-ncp-线路)
- [《他改变了中国：江泽民传》书摘](#《他改变了中国：江泽民传》书摘)

# 《Javascript悟道》读书笔记

# **基本原则**

ppt 中会包含大量的只有少数人知道的奇闻趣事
因为 js 很多地方的确有点奇怪，但是可能自己对 js 不是很精通，可能觉得 js 这么设计是很有道理的，在老道的吐槽下，可以达到对 js 祛魅的效果
本位很多的观点都是十分主观，我也不进行评论，还原作者的观点，以作者为准。
最后本次分享主要是达到一个抛砖引玉的效果，这本书和一般的技术书还是很不一样的，大家对这本书感兴趣可以去阅读一下。

# **命名**

因为 JavaScript 对于变量名的长度没有限制，所以不要吝惜你的起名才华。我希望你在命名的时候尽可能描述清楚被赋名者的含义，而不要使用各种隐晦的缩写。

JavaScript 的命名能以下划线（_）或者美元符号（$）开头和结尾，还能以数字结尾，但我认为你不该这么做。JavaScript 允许我们做很多本不该做的事情。这些命名习惯应该留给代码生成器或者宏处理器，而人类应该去做人类该做的事情。

因为 JavaScript 没有私有属性，所以通常只能将对应的公有属性名或者全局变量名加上下划线前缀或下划线后缀来从语义上表示其为私有。

大多数语言命名时使用空格

FORTRAN 首先打破了桎梏，允许在命名时使用空格。然而，后来包括 JavaScript 在内的大多数编程语言没有继承这个优良传统，反而学习了它的一些糟粕。例如，使用等号（=）表示赋值，用圆括号（()）而不是花括号（{}）包裹 if 语句的条件表达式。

不过在出现这么一门语言之前，我还是推荐你使用下划线分隔变量名中的多个单词。这是因为，万一哪天真有更好的编程语言出现，这种命名法可以让你最便捷地将代码迁移至下一门语言。

JavaScript 中的所有名字都应该以小写字母开头，这一切都拜 JavaScript 中的 new 运算符所赐。

所有的构造函数都应该以大写字母开头，而其他任何名字都应该以小写字母开头。

# **保留字**

存空间有限的另一个遗留产物，因为保留字的设计可以给编译器节约少许字节。
我们现在不必再受这些事情的困扰了。可惜这几十年来，人们的思维已经固化。对于现代程序员来说，保留字的设计真的是糟粕。扪心自问，你能否记住所有的保留字？
还有一种糟心的情况是，你在起变量名的时候，尽管有个单词可以完美地阐释该变量的意义，但很不巧，它是一个你从来不用的保留字，甚至是一个还没有被实现的预保留字。
此外，保留字对于现代编程语言的设计者来说也不是好东西。脆弱的保留字策略会使我们不能干净利落地为一门流行语言添加新特性，给我们添堵。真希望能有一门强硬的新语言出现，让我们不用再为“五斗保留字”折腰。

# **数值**

JavaScript 只有一种数值类型这件事经常被人们诟病，但我反而认为这是 JavaScript 最成功的设计之一：这个设计让程序员不必浪费时间在几种相似的数据类型之间做选择，毕竟有时候花了时间还会选错；能避免那些由于数据类型之间的转换而造成的错误；甚至还可以避免整数类型的溢出错误。

JavaScript 的“整数”可比 Java 的整数可靠多了，因为它们不会溢出。

作为一门编程语言，Java 的数值运算系统在算错的时候甚至连 Warning 都不会报。int 类型总出错，还怎么指望通过它来避免错误呢？

# **零**

零是独一无二的。理论上来说，在一个数值系统中只应存在一个零。然而事不遂人愿

在 IEEE754 标准中有两个零：0 和-0。你知道 JavaScript 为帮你抹平 0 与-0 的不同做了多大努力吗？它让我们几乎可以忽略-0 的存在。不过仍然需要注意以下几种情况：

# **NaN**

NaN 是 Not a Number 的缩写。你说怪不怪？虽然它的含义是“不是一个数”，但是 typeof 对它的结果又告诉大家 NaN 是一个数（"number"）。

最让人困惑的是，NaN 居然不等于它自己！这是 IEEE 754 的糟粕，JavaScript 却将其照搬了过来，没有做任何处理。

因此，当我们要判断一个值是不是 NaN 时，应当使用 Number.isNaN(value)。Number.isFinite(value)函数会在值为 NaN、Infinity 或者-Infinity 的时候返回 false。

对于 NaN 而言，唯一有意义的运算就是 Number.isNaN(NaN)。除此之外，不要在任何场景用 NaN。

# **布尔**

布尔（boolean）类型是以英国数学家乔治·布尔（George Boole）命名的，他发明了代数逻辑系统。克劳德·香农将布尔乔治·布尔的系统应用在了数字电路的设计上，所以我们称计算机电路为逻辑电路。

<、<=、>和>=的结果都是准确的。不过在其他情况下，这些比较大多是无意义的。JavaScript 并不会阻止你比较不同的类型，这些情况需要你自行规避。所以要尽可能避免在不同类型之间进行比较。

答应我，永远不要用这两个运算符；答应我，务必使用===和!==。

剩下的值就全都是幻真的了，比如空对象、空数组，甚至"false"和"0"这样看起来像幻假的字符串。

这些幻假的值虽然表面上看起来像 false，但实际上大多是装出来的。幻真的值也一样。这些犯蠢的类型是设计上的缺陷，但这并不能全怪 JavaScript。JavaScript 沿用的是 C 语言的习惯。

C 语言程序员有一个流派，就是利用隐式类型转换“特性”让条件判断尽可能简洁。

理论上，一个条件判断的结果只应为 true 或 false，其余的值都应该在编译时就抛错。然而 JavaScript 并非如此，它的条件表达式可以写得如 C 语言般简洁。当条件判断语句意外地传入了错误类型的值时，JavaScript 不会报错。这就很可能让程序进入另一个本不该进入的条件分支。Java 就不一样，它要求条件判断位中的值必须是布尔类型，这样可以避免很多潜在的错误。唉，真希望 JavaScript 也是这样的。

虽然 JavaScript 并没有学习这些好榜样，但我还是希望你能假装它已经做到了，然后在条件判断位中始终使用布尔类型。如果我们在编码的时候严于律己，就能写出更好的程序。

# **数组**

数组真是最伟大的数据结构。

JavaScript 的第一个版本并没有将数组设计进去，但由于 JavaScript 的对象实在太强大了，以至于几乎没人发现这个纰漏。如果不考虑性能，数组能做的事，对象基本上都能做。

其实，JavaScript 的数组几乎就是对象，它们仅有四处不同。

- 数组有一个神奇的 length 属性。该属性并不是指数组中元素的数量，而是指数组元素的最高序数加 1。
- 数组对象都继承自 Array.prototype，该原型比 Object.prototype 多了一些更实用的函数。
- 数组与对象的写法不同
- 虽然 JavaScript 眼中的数组和对象几乎一样，但 JSON 眼中的它们很不一样。

JavaScript 自身也对数组感到迷惑。如果对数组进行 typeof 操作，返回将是"object"，这显然是有问题的。

自古以来，人们都习惯用 1 来代表计数的开始。从 20 世纪 60 年代中期开始，一小股有影响力的程序员认为，计数应当从 0 开始。到了今天，几乎所有程序员都习惯了这种以 0 开始的计数法。不过，其他人（包括大多数数学家）还是习惯以 1 开始。数学家通常将原点标记为 0，但还是将有序集合的第一个元素标为 1。至于他们为什么这么做，至今仍是个谜。

有一个论点是从 0 开始可以提高效率，但并没有什么有利的证据；还有一个主张其正确性的论点是从 0 开始可以减少“差一错误”（off-by-wun）1，但人们对此也表示怀疑。也许有一天我们能找到有力的证据来证明，对于程序员来说从 0 开始更好。

**差一错误**是在计数时由于边界条件判断失误导致结果多了一或少了一的错误，通常指 [计算机编程](https://zh.wikipedia.org/wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BC%96%E7%A8%8B) 中 [循环](https://zh.wikipedia.org/wiki/%E7%A8%8B%E5%BA%8F%E5%BE%AA%E7%8E%AF) 多了一次或者少了一次的程序错误，属于 [逻辑错误]的一种。

indexOf

如果遍历了整个数组还没有匹配的值，则返回-1。我个人认为这个设计有错误，因为-1 也是一个数，与其他返回的序号都是数值类型。

JavaScript 还有很多类似的设计错误，这些底型在一开始设计的时候就有问题。

forEach 和 find 方法都有提前退出的能力（every 和 some 就是 forEach 的可提前退出形态）。map、reduce 和 filter 则没有这个能力。

reduce 方法有逆序版本 reduceRight，而可怜的 forEach、map、filter 和 find 都没有这种令人羡慕的逆序版本。

我甚至怀疑正是这些缺憾才导致 for 语句一直没有被废除。

# **对象**

JavaScript 为“对象”一词赋予了新的含义。在 JavaScript 中，除了两种底型之外（null 和 undefined），万物皆对象。

在其他语言中，这类数据结构通常被称为哈希表（hashtable）、映射表（map）、记录（record）、结构体（struct）、关联数组（associative array）或字典（dictionary）

我建议不要在对象中存储 undefined。尽管 JavaScript 允许我们在对象中存储这个值，并且会正确返回 undefined 值，但是当对象中不存在某个属性的时候，JavaScript 返回的也是 undefined。这会产生二义性。我个人认为，为某个属性赋值 undefined 意在删除该属性，然而 JavaScript 并没有这样做。要删除某个属性，正确的做法是使用 delete 运算符。

JavaScript 的一个设计错误是对象上的属性名必须为字符串。有时候，我们的确需要用一个对象或者数组作为键名。很可惜的是，JavaScript 中的对象会在这种情况下做一件蠢事——直接把要作为键名的值通过 toString 方法进行转换。我们之前也看到了，对象的 toString 方法返回的完全是糟粕。

对于这种情况，JavaScript 也算有自知之明，为我们准备了备用方案——WeakMap。这类对象的键名是对象，不能是字符串，并且它的接口也与普通的对象完全不同

WeakMap 并不允许我们检视对象中的内容。除非拥有对应的键名，否则无法访问其中的内容。WeakMap 与 JavaScript 的垃圾回收机制可以融洽相处。如果 WeakMap 中的一个键名在外没有了任何副本，那么这个键名所对应的属性会被自动删除。这可以防止一些潜在的内存泄漏情况。

一种只允许字符串作为键名，而另一种居然只允许对象作为键名。就不能好好地设计出一种既支持字符串又支持对象作为键名的类型吗？

WeakMap 这个名字起得就够差劲了，Map 更不知所云。它与数组的 map 方法没有半点关系，更与绘制地图毫不沾边。所以我一直不推崇 Map，但是 WeakMap 和数组的 map 方法则是吾之所爱。

JavaScript 还有一种叫 Symbol 的类型，具有 WeakMap 的一些能力。但我不推荐使用 Symbol，因为它真的很多余。我个人的习惯就是不使用各种多余的功能，以此来简化操作。

// 字符串的全等运算非常有用。这也是我认为不需要 Symbol 的原因之一，毕竟内容相同的字符串会被认为是同一个对象。不过在 Java 之类的语言中，字符串是不能全等的。

# **底型**

底型是用于指示递归数据结构结尾的特殊值，也可用于表示值不存在。在一般的编程语言中，常以 nil、none、nothing 或者 null 表示。

JavaScript 有两种底型：null 和 undefined。其实 NaN 也可以算作一种底型，主要用于表示不存在的数值。不过我认为过多底型属于语言设计上的失误。

在 JavaScript 中，可以说只有 null 和 undefined 不是对象。如果基于它们去访问一些属性，就会触发异常。

从一方面看，null 和 undefined 是非常类似的；但从另外一些方面来看，它们的行为又不一样——互有交集，却又无法完全相互替代。
有时候，它们的表象一致，但是实际表现不同，这就很容易造成混乱。我们经常不得不花时间决定当下到底该使用哪个底型，这些虚无缥缈的理论又会导致更多混乱，而混乱就是各种 bug 之源。如果只保留两者之一，程序将更美好。我们虽然不可能改变 JavaScript 这门编程语言来只留一种底值，但是可以从自身做起，只用一种 2。我个人建议淘汰 null，只用 undefined。

因为 JavaScript 自身也在用 undefined。如果你用 let 或者 var 声明一个变量却没有初始化它，这个值就是 undefined。这其实很神奇，你定义了一个未定义（undefined）的变量。如果你调用一个函数，却没往其中传入足量的参数，那么那些没有传参数的值就是 undefined；如果你访问一个对象中不存在的属性，得到的也是 undefined；数组也一样，如果你访问其中不存在的元素，得到的还是 undefined。

只有在创建空对象的时候，我才会使用 null——Object.create(null)。不过我也是不得已而为之，因为 Object.create()或者 Object.create(undefined)会触发异常，这是语言规范的设计错误造成的。

type of null === ‘’object 这就有可能导致一些程序逻辑上的错误。这也是我认为应该避免使用 null 的原因之一。

# **this**

Self 语言是 Smalltalk 语言的一种方言，用原型替代了类。一个对象可以直接继承自另一个对象。原来的模型由于高耦合性而使扩展性变得脆弱和膨胀，而 Self 语言的原型特性是一种出色的简化。原型模型相比之下更轻巧、更具表现力。
JavaScript 实现了原型模型的一个怪异变体。

2007 年，多个研究性项目尝试开发出 JavaScript 的安全子集，而其中最大的问题就是 this 的管理。在方法调用中，this 会被绑定到对应的对象上。这种行为有时候是好的，但在其作为函数被调用时，this 就会被绑定到全局对象上，这就是一件糟糕的事了。我建议的方案是完全取消 this，因为我认为它既没用又会造成问题。如果将 this 从 JavaScript 中移除，JavaScript 仍是一门图灵完备的语言。所以，我自身已经开始了去 this 化的编程方式，这样就可以免受其害了。自从这么做之后，我发现用 JavaScript 编程并没有变难，反而变简单了，写出来的程序也更轻巧、优雅。因此我建议大家遵循去 this 化的原则。你会发现这是一个明智的决定，生活也会因此变得更加阳光明媚。我并不是要夺走你的 this，只是想让你成为一个无忧无虑的程序员。用“类”写代码的程序员终将走向一片凄迷的“代码坟场”。

this 真是个坏家伙。

# **写在最后**

这些改进的最大受益者就是现在可以用更少精力来完成更多、更好工作的程序员。这些改进的最大对手同样是这些程序员，他们通常以怀疑和敌对的态度去迎接这些新范式。他们利用自己的知识和经验来提出令人信服的论点，然而事后再看，这些论点全是错的。他们待在旧范式的舒适区，不愿意接受新范式。大家都很难说出新范式和糟糕思想之间的区别。

以上每个转变都花了 20 多年才完成。函数式编程花的时间甚至翻了一番。所花时间如此之长，仅仅是因为我们的惯性思维作怪。新范式必须在老一代程序员退休或者去世后才有出头之日。

普朗克在物理学中观测到了类似的现象：葬礼越多，科学越进步。

# 《他改变了中国：江泽民传》书摘

# **简介**

> 《他改变了中国：江泽民传》（英语：The Man Who Changed China: The Life and Legacy of Jiang Zemin）是一部有关中国第三代最高领导人、前中共中央总书记江泽民的传记，作者为罗伯特·劳伦斯·库恩，于 2005 年以英语和中文两种语言出版，出版后产生了广泛的影响和争议。这本书由兰登书屋集团在全球除中国以外的地区出版发行。在中国，它被上海世纪出版集团以《他改变了中国：江泽民传》的标题出版。
>

# **书摘**

> 1946 年 4 月，江加人了共产觉，此时距他 20 岁生日还有 4 个月。
>
- 辉煌的起点

> 在以后的岁月里，厉恩虞成为南京中学的校长;“文化大革命”期间他受尽折磨直到 1975 年才获得平反。1978 年，他死于癌症。非常令人遗憾的是，他没能亲眼看到他曾经向之传授共产主义理论的年轻人最终成为世界上最大的共产党的总书记，1998 年 7 月，厉逝世 20 周年之际，江主席专门撰写了一篇文章《忆厉恩虞同志》。
>
- 优秀耀眼却命运如此不同

> 在整个 1947 年春季，江参加了一个接一个的抗议活动。从 4 月到 6 月，反内战的集会接连不断。5 月，全国部分地区又爆发了多次反饥饿的示威这场持续了一个月的名为“反饥饿运动”的系列政治行动揭开了纪念五四运动 28 周年的序幕，并把江泽民这代抗议学生和他们著名的前辈联系在了一起。
>

```
1919 -> 1947 -> 1966 -> 1996 ->2026 -> 2060
1919 五四运动
1947 抗日胜利
1966 文革开始
1996 香港回归
2026 复兴之路
2060 ...
```

> 一天，一个工人要江泽民修理一台坏了的马达。“我大吃一惊，”江在 50 年后回忆道，他的感受仍然十分新鲜，“我根本不知道该如何着手。不管怎么说，我是个大学生。但我学过的微积分、物理和工程学课程却没有一门教过我如何处理这样的问题。“从此以后，江泽民必须成为“修理东西”的行家
>
- 真实的社会与大学之间有很大的差距

> 国民觉后来轰炸了上海的发电厂。江亲手启动了工厂的备用发电机，以防止厂里的冰激凌融化变质。对解放事业的这一贡献使他终生感到自豪。
>
- 为解放工作做过真正的贡献

> 在被接管之后，工厂成为益民公司的一部分，并改名为“上海益民食品一厂”。整个公司都隶属于华东工业部。1949 年 9 月的一天,汪道涵(华东工业部部长一位崭露头角的党的领导人）来工厂视察，在视察中，他看到了一家陈旧但士分整洁的乳品厂，到处散发着新鲜冰激凌的香味。此外，更重要的是，他发现了一个很有潜力的年轻人。
“江泽民充满了活力，”回忆起他们初次见面的情景，汪说道，“他是党员,而且给人一种值得信赖的感觉。我觉得他前途无量。”
>
- 命运转折

> 江始终对自己在葛被免职一事中所起的作用感到于心不安。“几十年来,甚至直到今天,江都非常后悔自己对葛冬青的做法。”沈永言回忆说。“江向他道歉了好儿次。1962 年给‘右派’摘帽的时候，江特别关照了他，葛是第一批被摘帽的。
>
- 一个好人，更是一个真实的人

> 每天，江穿着蓝色工作服在厂里巡视。他和工人们聊天，询问机器的运转情况。他不懂就问，从不不懂装懂的态度是出了名的。他还很关心下属，无论是在工作还是在生活中。1960 年，跟江同事的一个年轻工程师想结婚 但因为厂里没有能分给新婚夫妇房子而无法完婚。当时江和 6 名其他家庭成员仍住在那套三居室的小单元房里，但他却马上为这位朋友腾出了一间房。此后两年,这对小夫妻一直和拥挤的江家合住。
>
- 不懂就问

> 而在当时，人们试图采用务实的方法解决中国的问题。最具革新精神的领域之一是由刘少奇的门生薄一波所领导的第一机械工业部。他营造了以工作成绩为奖惩依据的环境，像江泽民汶样的人可以在这种环境中崭露头角。
>
- 薄一波，第一机械工业部

> 武汉热工机械研究所——包括一个原子能研究中心在内的一项重要工程刚刚成立。汪道涵建议由不到 39 岁却有着动力工程领域过硬履历的江担任所兼党委副书记。身兼两职给了江很大的权力，这一任命把江提拔进了高级领导干部的行列。
江对于这一任命心情复杂。虽然他将成为有 300 多人的新机构的领导,但他更喜欢在北京工作的前景。新职务的一个不利因素是,他的家庭没法与他同行，家人不得不留在上海——这是一段 20 年分居生活的开始。尽管江每年有一个月的假期可以与家人团聚,两地分居还是使这个家庭，龙其是他的妻子在情感上付出了代价。另一个不利用素是，武汉作为湖北省的省会处于政治主流之外。不过,事实很快证明，这一点反而是天大的喜事。在此后的几件中，政治的主流是任何人都最不愿卷人的。
>
- 暴风雨来临，远离漩涡中心

> 是什么原因使江泽民遭受的迫害相对较轻呢？首先，他离北京和上海比较远——那两个地方被看成是滋生反对毛以及破坏共产主义的“走资派"的温床。另外,江的个人行为无懈可击：他没什么财产，从不追求浮华的生活方式。为了把迫害他的人搞糊涂，江强调他的父亲是共产党的烈士,而对他成长的文化背景和所接受的精英教育则经描淡写。那时江还不知道，他的母校扬州中学是红卫兵攻击的早期目标，他们用鲜亮的大红色把这栋“封建”大楼涂抹得面目全非。
>

> 江的语言能力对他的领导地位极为重要。他抓住一切机会练习罗马尼亚语，当他不能用这门新学会的语言表达自己的想法时，他还可以同东欧人说俄语，同西欧人说英语。他发现罗马尼亚人民活泼热情、思想开放，他很喜欢与他们在一起。这是他在对外关系中的第一次官方经历。国内那些迫切希望能够取得任何形式外交胜利的上级认为，这是外交上的 一个漂亮仗。江后来回忆说，此次经历让他“张开双眼看世界”。此行标志着他一生中留给后人的主要成就之一的发端：促进中国与世界其他地区的友好往来。
>
- 语言才能

> 在这动荡的年代，两个家庭始终保持着联系。在汪道涵被清洗与罢黜之后，江泽民在武汉，江的妻子在上海给了汪的女儿以庇护。这不是没有危险的，因为任何与已被罢黜的汪的接触，都会给那些想打倒江的人以方便的借口。
>
- 重感情

> 邓小平在政治局会议上发表讲话说：“现在，我们的主要任务是要不拘一格地发现和提拔有前途的中青年干部。”他提信“四个转变”，以产生新代的共产觉领导人员，要寻求“革命化、年轻化、知识化、专业化”的人才。
听了邓的指示之后,已完全恢复权力的汪道涵找到谷牧，推荐江泽民在新成立的委员会中担任高级职务。(汪本人刚被委以中国最重要的职位之一:上海市市长。)谷牧在 20 世纪 50 年代当过上海市委副书记，他记起了过去的江，并任命他为两个委员会的副主任兼秘书长、觉组成员。
经过 4 年鳌伏之后,54 岁的江终于成了副部长。在几周之内,江以尤投票权代表的身份列席了人大常委会的一次会议，并在会上作了有关建立经济特区的简要报告。江还首次被选举为中国人民政治协商会议委员。政协代表着中国的各界别、各团体、各少数民族和各民主觉派，它们组成一个在共产党领导下的“爱国统一战线”
>
- 改革开放 + 高人指路

> 1982 年 5 月，江泽民被任命为电子工业部第一副部长兼党组副书记。这足个重妥的提升。
1982 年 9 月，邓小平在第十二次觉代表大会致开幕词，题为〝中国特色的社会主义"，从此以后这就成为定义中国改華计划的词组。邓认为，马列理论必领适应中国的文化，这也是江后来进一步发展的主题。对西方人来说,邓的改革似乎是试探性的蹒跚学步，但在中国,这些改革却被视为大胆而影响深远。
>
- 1982 电子工业部第一副部长兼党组副书记

> 就在这次党代会上，江泽民成为中央委员会——制订政策并选举产生政治局——第 210 名委员。通过进入中国政治权力的核心，江已经越过了成为高级职务候选人的最后一-个障碍。他几乎完全符合当时的四项标准：出身革命家庭，做过 30 年有知识的管理人员，又是几个领域的专家，而且只有 56 岁，相对来说仍属年轻。
当江第一次出席觉的中央委员会会议，坐到座位上的时候，他环顾四周，感到非常地亲切自然。他认识许多中央委员，包括几名在上海地下党时期的同事，一些老一辈的领导曾同他的养父江上青共同战斗过，其中很多人后来成了江的支持者、尤其是张爱萍将军。江最近的领导是副总理谷牧,谷牧还是中央书记处成员，这是个管理党务的机构。
>

> 江泽民给他妹妹的对联写的是有关诸葛亮的内容。诸葛亮生活在 3 世纪，被认为是中国最伟大的军事战略家。
一边写着“攻心”。——意即“努力赢得人心”。
另一边写着“审势“——意即“判断时机”，换句话说就是估计形势。
>
- 攻心
- 审势

> 汪道涵的上海市长任期将于 1985 年届满，北京方面在物色他的接班人。不管是什么原因——有人说是汪年纪偏大，领导缺三活力，另一些人将此归咎于缺少中央政府的支持，上海这一中国最重要的商业中心没有繁荣起来。
“我当然参加了让谁来接替我任上海市长的讨论，”汪道涵回忆说，〝副总理万里来征求我的意见。他提出好儿个极有竞争力的人选。我推荐了江。
>
- 上海市长

> 现在也到了江泽民重新考虑自己的事业的时候了。1989 年他将满 63 岁。传统上为退休的高级领导人准备的职务——全国人大常委会副委员长或全国政协副主席——并没有吸引力。江想彻底改变一下。他想成为母校上海交通大学的教授。
尽管江可以利用上海市委书记的职务来确保在大学里谋得一个席位，但他更希望通过自己的学术成就来取得。他回忆起翻译过有关电力问题的俄文著作，就和老朋友沈永言联系，希望恢复这项工作。在内心里，江仍然是一位知识分子，出版著作令他感到自豪。他还准备在大学里进行—次题为《当前电力节约与能源开发趋势》的讲座，他将就这一课题撰写一篇技术论文。
>
- 真正的知识分子

> 江泽民一直密切关注着首都的局势发展，他打破自己的禁令与上海学生进行了对话，他走出来，彻夜不眠地劝说学生们停止抗议活动。凌晨，江作出了最勇敢的举动，他手拿扩音器走到在外滩的人群中间。
>
- 站在学生中

> 到了凌晨 2 时 45 分，已经绝食 5 天的学生们停止了行动。当天晚些时候,江泽民看望了住院学生并希望他们能够迅速恢复健康。江以非暴力手段出;色地结束了上海的示威游行。而与此同时，他又向中共中央发去电报，表示完仝支持实施戒严。
>
- 手段巧妙，站位清晰

> 这期间，邓小平与中国的 8 位高级领导人见面，确定了赵紫阳的继任者。作出这一历史性的决定花了 5 个小时。
“经过漫长与仔细的考虑之后，〞邓告诉以他为核心的领导集体，上海市委书江泽民同志看来确实是个合适的人选。我认为他挑得起这副担子。陈云、先念同志和我都倾向让江泽民同志任;总书记。其他人有什么看法？〞
杨尚昆表示同意。他強调，〝新的领与集体(必须)保持改革开放的形象，赢得人民的信任”，并补充说奶果它“墨守成规，死板僵化，不思进取”，那么人民不会信任亡，党员不会尊敬它，那就会不断出乱子，“经济增长也就无从谈起〞。他说,中国如果再次闭关锁国，那将是“很可怕”的，
元老薄一波也支持新一代的领导人。“只要我们不碍手碍脚，放手让
他们去干，”他说，我想他们会做得很好。”
邓小平随后要水就任命以江泽民为总书记的新一届政治局常委进行正式表决。结果是全票通过。
>
- 中央已经决定了

> 江泽民接到书记处的紧急通知，要他立即赶到北京。当他匆忙赶到机场时，发现等着他的是一架专机，但是在北京南苑机场接他的汽车却是一辆普通的大众桑塔纳。直到此时，江才被告知邓小平将在西山别墅见他。这套伪装是为了防止江被愤怒的示威者认出而采取的预防措施。
当邓提出由他担任,总书记时，江大为惊讶。他表示了他对邓的感谢和对党的忠诚，保证他会做觉要他做的一切。“我担心，“江说，“我担当不起党赋子的伟大使命。”
江泽民对这一任命感觉很复杂。他是有抱负的，但并非野心勃动。他在上海很愉快。当时，他向邓解释说，他没有在中央工作的经验是一个缺陷，在与那些已在中央工作数十年的同事打交道时更是如此。邓回答道：“我们都支持你。我们将帮助你克服任何困难，你不必担心。”当晚，江乘同一架飞机回到了上海。
>
- 有所犹豫，高处不胜寒

> 江也怀疑自己是否能在北京的精英中站住脚。就像他以前经常做的，他拜访了汪道涵，征求他的意见。
“我知道他是总书记的合适人选，但是我能看出他的矛盾心情。所以我写了领导 1840 年抗英鸦片战争的中国民族英雄林则徐的一副对联来勉励他：’苟利国家生死以，岂因祸福避趋之。’大意是如果对国家有利，就要不惧生死。”
>
- 苟利国家生死以，岂因祸福避趋之

> 江泽民处理上海的示威者时，表现出良好的直觉。他对示威者进行安抚并态度温和，同时又在涉及觉的权力的问题上寸步不让。最后，他果断处理《导报》问题这件事表明在必要的时候，他愿意采取行动。
>
- 直觉

> “如果三哥，就像他自己说的那样，毫无准备，”江泽慧说，“我们就更没有淮备了！真的让我们大吃一惊。我的第一反应是历史的重担已落在他的肩上。
“我们并末感到极度快乐，“她吐露说，“我们当然也没有庆祝。他的任命不值得庆祝。这是在‘六•四’后不久，国家将向什么方向前进尚不清楚。这是段非常闲难的时期。
>
- ”国家将向什么方向前进尚不清楚。这是段非常闲难的时期。“

> 8 月初，江泽民前往上海视察，由同事朱镕基、吴邦国、陈至立陪同，所有这些人最后都去了北京，在中央担任显要职务。值得注意的是，这时江作了第一次职务任命，将时任上海市委副书记的曾庆红任命为党的中央委员会办公厅副主任（副部级）。这是个起协调作用的关键职位，具有很大影响。江任命他忠诚的秘书贾廷安为“江办”主任，这也是个副部级的职位。(贾随江从上海来到了北京。）
这一选择非常明智，曾庆红具有机智的政治敏镜感、完美的政治背景以及个人关系：他的父亲曾是军队指挥官、党的高级领导和政府高级官员,在华东很有影响，尤其在上海。汪道涵也是其父的门生之一。他的母亲曾是一位早期的党的工作者，是参加过长征而幸存下来的少数女性之一并曾任一家幼儿园的园长，许多高千子女都曾在这家幼儿园就读。事实证明，不论是在行政工作还是在政治策略上面,曾庆红对江的帮助都是无可估量的。
>
- 曾入阁

> 江泽民在党校发表讲话 3 天后，他来到邓小平家，寻求这位最高领导人对使用“社会主义市场经济”这 面改革新旗帜的同意。讲话前江没有和邓磋商。在邓南方谈话后，一切问题便由江自己来解决。在此意义上，南方谈话确实是对江的一次考验，而他的党校讲话正是最后一次考试。
>
- 一切问题便由江自己来解决
- 最后一次考试。

> 江对记者说：“我坚持这样一种思想，那就是干一行，爱一行，钻一行。因此，我现在读一些有关历史、科技和世界事务的书籍。”江说他喜欢古典音乐，但也不排斥快节奏的音乐，比如迪斯科，“年轻人喜欢这个”。
>
- 干一行，爱一行，钻一行

> 到 1992 年 12 月，《解放军报》至少发表了 12 篇社论，拥戴江为“觉的领导核心"和唯一的“军队统帅”。他的领导被称为反映了“老红军的传统〞江赢得了对中国武装部队的领导。
>
- 军队

> 虽然当时正下着雨，但中国国家主席来到校园的消息还是迅速传开了。很快就有数百名学生赶来,围拢在这位著名的访客身边。“学生应该具有广博的知识，”江提出;忠告，“文学艺术，例如托尔斯泰、莎士比亚、巴尔扎克、但丁、莱昂纳多•达•芬奇的作品，可以提高你们的审美情趣，丰富你们的思想和生活。不要局限在你们的专业里面。”江说，理科学生需要了解更多的文科知识，文科学生则需要了解更多的理科知识。“如果你们想学习其他国家的先进知识，”他补充说，“你们就必须掌握外语。在我的学生时代，我们每天早晨 5 点钟就起床，背通 60 个英语单词。”海南大学的校长担心中国的元首会耽误行程，试图劝说江离开。不过，这个曾两度想做一名教授的人正在自得其乐。“中国的末来在你们身上，〞江对周围的人说道，“当今世界的竞争主要是知识的竞争一位古代圣贤说过‘天下兴亡，匹夫有责。“江最后用毛泽东那句含义深远的话作为自己的结束语：“世界是你们的，也是我们的，但归根结底是你们的。”
>
- 知识分子

> 对改革速度缓慢依旧感到恼火的邓小平，将富有进取心的上海市委书记朱镕基提升为副总理。朱在国务院具体分管工业、农业和财政。尽管他们的个性不同，江和朱在上海时却合作得很好。作为一名热忱的改革者,朱镕基使国务院在政策问题上形成一种新的平衡。
>
- 朱入阁

> 邓小平委托出席晚宴的薄一波(中国的“长寿元老”之一）代为宣读他的致词。“有个我一直在考虑怎么才能解决的难题，”邓告诉薄，“在觉内以及在国内外，我个人的作用和影响被认为是特别巨大的，甚至是不可或缺的。这不是一件好事。有一天如果我真的死了，这可能会给觉和国家造成动荡。我希望在很短的一段时间里，中央和省一级领导班子能统一思想，下定决心,紧密团结在以江泽民同志为核心的觉中央周围。
薄一波在《人民日报》撰文称，从邓到江的过渡与 1949 年新中国成立时确立毛泽东为第一代领导人，以及 1978 年改革开始时确认邓小平为第二代领导人有着同样重要的历史意义。“我们必须拥护江泽民作为唯一的核心，"薄写道。
>
- 薄一波与江的缘分

> 接下来的数天内,政治局势迅速明朗起来。中国人民解放军和人民武装警察部队发表了支持江的声明。3 位高级将领也紧随其后。江对军队工作多年的投人获得丰厚的回报，证明了邓对其继承人所提建议的英明：“在每 5 个工作日中，要有 4 天与军队高层待在一起。“
>
- 小平逝世，平稳过渡
