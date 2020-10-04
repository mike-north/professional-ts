import { useEffect } from 'react';

export function useAsyncDataEffect<T>(
  getData: () => Promise<T>,
  options: {
    stateName: string;
    otherStatesToMonitor?: unknown[];
    setter: (arg: T) => void;
  },
): void {
  let cancelled = false;
  let promise: Promise<T>;
  const { setter, stateName } = options;
  useEffect(() => {
    promise = new Promise<T>((resolve, reject) => {
      void getData().then((jsonData) => {
        if (cancelled) return;
        else resolve(jsonData);
      });
    });
    void promise.then((data) => {
      if (!cancelled) {
        console.info(
          '%c Updating state: ' + stateName,
          'background: green; color: white; display: block;',
        );
        setter(data);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [...(options.otherStatesToMonitor || []), stateName]);
}
