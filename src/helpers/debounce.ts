export const debounce = (fn: (...args: any[]) => void, ms: number) => {
  let timer: number | undefined;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        fn.apply(this, args);
    }, ms);
  };
};
