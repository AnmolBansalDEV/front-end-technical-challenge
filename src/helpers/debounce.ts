export const debounce = (fn: (...args: unknown[]) => void, ms: number) => {
  let timer: NodeJS.Timeout | number | undefined;
  return (...args: unknown[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        fn.apply(this, args);
    }, ms);
  };
};
