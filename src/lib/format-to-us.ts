export function formatToUs(n: number) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}