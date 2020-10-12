import { stringifyError } from './error';
import HTTPError from './http-error';

/**
 * Make a GET request, and decode the response body as JSON
 *
 * @param input - request info
 * @param init - request options
 * @internal
 */
async function getJSON(input: RequestInfo, init?: RequestInit) {
  try {
    const response = await fetch(input, init);
    const responseJSON = await response.json();
    return { response, json: responseJSON };
  } catch (err) {
    throw new Error(
      stringifyError(
        `Networking/getJSON: An error was encountered while fetching ${JSON.stringify(
          input,
        )}`,
        err,
      ),
    );
  }
}

/**
 * Make a same-origin GET request to the API
 *
 * @param path - API path
 * @param init - fetch options
 * @public
 */
export async function apiCall(
  path: string,
  init?: RequestInit,
): Promise<unknown> {
  let response;
  let json;
  try {
    const jsonRespInfo = await getJSON(`/api/${path}`, init);
    response = jsonRespInfo.response;
    json = jsonRespInfo.json;
  } catch (err) {
    if (err instanceof HTTPError) throw err;
    throw new Error(
      stringifyError(
        `Networking/apiCall: An error was encountered while making api call to ${path}`,
        err,
      ),
    );
  }
  if (!response.ok)
    throw new HTTPError(response, 'Problem while making API call');
  return json;
}
