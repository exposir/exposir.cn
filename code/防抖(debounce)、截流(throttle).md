## 防抖 debounce

连续点击，最后一次点击一秒后执行一次。

```js
function debounce(fn, delay) {
  let timer = null;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
}

const get = () => {
  console.log("debounce");
};
a = debounce(get, 1000);
a();
```

## 节流 throttle

连续点击，每隔一秒执行一次。

```js
function throttle(fn, time) {
  let begin = new Date();
  return function () {
    if (new Date() - begin < time) {
      return false;
    }
    fn();
    begin = new Date();
  };
}

const get = () => {
  console.log(666);
};
a = throttle(get, 1000);
```
