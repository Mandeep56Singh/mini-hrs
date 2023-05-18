import { format } from 'date-fns';

export const formatDate = (date: string): string => {
  return format(new Date(date), 'yyyy-MM-dd hh:mm:ss');
};
