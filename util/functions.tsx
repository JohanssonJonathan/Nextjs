const debounce = (func: () => void, timeout: number = 300): any => {
  let timer: number;
  return (args: []) => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

export { debounce };
