/**
 * @public
 */
export type ResolveHandler<T> = (value: T | PromiseLike<T>) => void;
/**
 * @public
 */
export type RejectHandler = (reason: unknown) => void;

/**
 * An "inverted" promise, that can be resolved
 * from the outside
 *
 * @public
 */
class Deferred<T> {
  #_promise: Promise<T>;
  #_resolve!: ResolveHandler<T>;
  #_reject!: RejectHandler;
  constructor() {
    this.#_promise = new Promise((resolve, reject) => {
      this.#_resolve = resolve;
      this.#_reject = reject;
    });
  }
  get promise(): Promise<T> {
    return this.#_promise;
  }
  get resolve(): ResolveHandler<T> {
    return this.#_resolve;
  }
  get reject(): RejectHandler {
    return this.#_reject;
  }
}
export default Deferred;
