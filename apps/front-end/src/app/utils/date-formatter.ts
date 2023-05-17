import { format } from 'date-fns';

export const formatDate = (date: string): string => {
  return format(new Date(date), 'yyyy-mm-dd hh:mm:ss');
};
