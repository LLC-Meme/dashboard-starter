export const formatNumber = (num: number): string => {
  const numStr = num.toString();
  const parts = numStr.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};

export const formatCurrency = (num: number): string => {
  return `¥${formatNumber(num)}`;
};
