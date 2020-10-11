/* eslint-disable promise/always-return */
import { useEffect } from 'react';
import Deferred from './deferred';

/**
 *
 */
export function useAsyncDataEffect<T>(
  getData: () => Promise<T>,
  options: {
    stateName: string;
    otherStatesToMonitor?: unknown[];
    setter: (arg: T) => void;
  },
): void {
  let cancelled = false;
  const { setter, stateName } = options;
  useEffect(() => {
    const d = new Deferred<T>();

    getData()
      .then((jsonData) => {
        if (cancelled) return;
        else d.resolve(jsonData as any);
      })
      .catch(d.reject);

    d.promise
      .then((data) => {
        if (!cancelled) {
          console.info(
            '%c Updating state: ' + stateName,
            'background: green; color: white; display: block;',
          );
          setter(data);
        }
      })
      .catch(console.error);
    return () => {
      cancelled = true;
    };
  }, [...(options.otherStatesToMonitor || []), stateName]);
}
