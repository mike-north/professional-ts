import { format } from 'date-fns';

/**
 * Format a timestamp as a string
 * @param date - the date value to format
 * @public
 */
export function formatTimestamp(date: Date): string {
  return format(date, 'MMM dd, yyyy HH:MM:SS a');
}
