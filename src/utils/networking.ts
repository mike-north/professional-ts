import { stringifyError } from './error';
import HTTPError from './http-error';

async function getJSON(
  input: RequestInfo,
  init?: RequestInit,
): Promise<{ response: Response; json: unknown }> {
  try {
    const response = await fetch(input, init);
    const responseJSON = (await response.json()) as unknown;
    return { response, json: responseJSON };
  } catch (err: unknown) {
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

export async function apiCall(
  path: string,
  init?: RequestInit,
): Promise<unknown> {
  let response: Response;
  let json: unknown;
  try {
    const jsonRespInfo = await getJSON(`/api/${path}`, init);
    response = jsonRespInfo.response;
    json = jsonRespInfo.json;
  } catch (err: unknown) {
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
