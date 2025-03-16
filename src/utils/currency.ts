// Currency formatting utilities
export const formatDZD = (amount: number): string => {
  return new Intl.NumberFormat('ar-DZ', {
    style: 'currency',
    currency: 'DZD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

export const parseDZD = (value: string): number => {
  return Number(value.replace(/[^\d.-]/g, ''));
};