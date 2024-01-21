export const formatDollars = (amount: string | number | undefined) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(
    typeof amount === 'number' ? amount : parseFloat(amount as string),
  );
};
