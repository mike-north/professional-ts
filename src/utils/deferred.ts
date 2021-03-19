
class Deferred<T> {
  #_promise: Promise<T>;
  #_resolve!:  (value: T | PromiseLike<T>) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  #_reject!: (reason?: any) => void;
  constructor() {
    this.#_promise = new Promise<T>((resolve, reject) => {
      this.#_resolve = resolve;
      this.#_reject = reject;
    });
    // we know this.#_resolve is assigned here
  }
  get promise(): Promise<T> {
    return this.#_promise;
  }
  get resolve(): (value: T | PromiseLike<T>) => void {
    return this.#_resolve;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get reject(): (reason?: any) => void {
    return this.#_reject;
  }
}
export default Deferred;
