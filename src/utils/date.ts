import { format } from 'date-fns';

/**
 * Format a timestamp as a string
 * @param date
 *
 */
export function formatTimestamp(date: Date): string {
  return format(date, 'MMM dd, yyyy HH:MM:SS a');
}
