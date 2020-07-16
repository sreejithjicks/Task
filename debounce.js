const debounce = (fun, delay) => {
  let Tid;
  return function (...args) {
    if (Tid) {
      clearTimeout(Tid);
    }
    Tid = setTimeout(() => {
      fun(...args);
    }, delay);
  };
};
const search = () => {
  // some code
};
let debounced_func = debounce(search, 2000);
debounced_func();
