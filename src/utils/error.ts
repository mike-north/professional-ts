function stringifyUnknownValue(err: unknown): string {
  return err
    ? // eslint-disable-next-line @typescript-eslint/restrict-plus-operands, @typescript-eslint/no-explicit-any
      '' + (err as any)
    : '(missing error information)';
}

function stringifyErrorValue(err: Error): string {
  return `${err.name.toUpperCase()}: ${err.message}
  ${err.stack || '(no stack trace information)'}`;
}

export function stringifyError(errorDescription: string, err: unknown): string {
  return `${errorDescription}\n${
    err instanceof Error ? stringifyErrorValue(err) : stringifyUnknownValue(err)
  }`;
}
