import { format } from 'date-fns';

export function formatTimestamp(date: Date): string {
  return format(date, 'MMM dd, yyyy HH:MM:SS a');
}
