function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(null, args);
    }
    return function notDoneCurrying(...moreArgs) {
      return curried(...args, ...moreArgs);
    };
  };
}
