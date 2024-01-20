export const formatDollars = (amount: string) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(parseFloat(amount));
};
