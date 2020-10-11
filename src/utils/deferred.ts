class Deferred<T> {
  #_promise: Promise<T>;
  #_resolve!: (value?: T | PromiseLike<T> | undefined) => void;
  #_reject!: (reason?: any) => void;
  constructor() {
    this.#_promise = new Promise<T>((resolve, reject) => {
      this.#_resolve = resolve;
      this.#_reject = reject;
    });
  }
  get promise() {
    return this.#_promise;
  }
  get resolve() {
    return this.#_resolve;
  }
  get reject() {
    return this.#_reject;
  }
}
export default Deferred;
