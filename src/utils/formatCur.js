export function formatCur(price, code, chart) {
  const options = {
    style: "currency",
    currency: code,
    currencyDisplay: "narrowSymbol",
    maximumSignificantDigits: 5,
  };

  if (chart) {
    return new Intl.NumberFormat(options).format(price);
  }
  return new Intl.NumberFormat(navigator.language, options).format(price);
}
