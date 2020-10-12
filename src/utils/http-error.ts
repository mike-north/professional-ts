/**
 * High-level outcome of an HTTP status code
 * @public
 */
export enum HTTPErrorKind {
  Information = 100,
  Success = 200,
  Redirect = 300,
  Client = 400,
  Server = 500,
}

/**
 * Determine the high-level outcome of a HTTP status code
 *
 * @param status - http status code
 * @see HTTPErrorKind
 * @public
 */
function determineKind(status: number): HTTPErrorKind {
  if (status >= 100 && status < 200) return HTTPErrorKind.Information;
  else if (status < 300) return HTTPErrorKind.Success;
  else if (status < 400) return HTTPErrorKind.Redirect;
  else if (status < 500) return HTTPErrorKind.Client;
  else if (status < 600) return HTTPErrorKind.Server;
  else throw new Error(`Unknown HTTP status code ${status}`);
}

/**
 * An error that's associated with a HTTP response status code
 * @public
 */
export default class HTTPError extends Error {
  kind: HTTPErrorKind;

  constructor(info: Response, message: string) {
    super(
      `HTTPError [status: ${info.statusText} (${info.status})]\n${message}`,
    );
    this.kind = determineKind(info.status);
  }
}
