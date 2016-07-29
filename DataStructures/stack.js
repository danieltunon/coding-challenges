const Stack = {
  init() {
    let size = 0;
    Object.defineProperty(this, 'size', { get: () => size });
    return this;
  }
};

export default Stack;
