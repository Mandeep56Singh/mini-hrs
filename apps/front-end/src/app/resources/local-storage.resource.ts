export const setItem = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key: string) => {
  const item = localStorage.getItem(key);
  if (item) return JSON.parse(item);
  return '';
};
