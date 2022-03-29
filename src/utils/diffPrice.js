export function diffPrice(a, b) {
  return `${a < b ? "+" : a === b ? "" : "-"}${(
    100 * Math.abs((a - b) / ((a + b) / 2))
  ).toFixed(2)}`;
}
