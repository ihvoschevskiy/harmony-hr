export const formatNumber = (num: number | string): string =>
  num.toLocaleString("en-En", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
