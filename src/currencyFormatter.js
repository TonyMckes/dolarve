export function currencyFormatter(currencyCode, value, inputValue = 1, check) {
  const currencyList = {
    USD: {
      location: "en-US",
      options: { style: "currency", currency: "USD" },
      operation: (a, b) => b / a,
    },
    VES: {
      location: "es-VE",
      options: { style: "currency", currency: "VES" },
      operation: (a, b) => a * b,
    },
  };

  const location = currencyList[currencyCode].location;
  const options = currencyList[currencyCode].options;
  const operation = currencyList[currencyCode].operation(value, inputValue);

  if (check === undefined) {
    return new Intl.NumberFormat(location, options).format(operation);
  }
  return new Intl.NumberFormat(options).format(operation);
}
