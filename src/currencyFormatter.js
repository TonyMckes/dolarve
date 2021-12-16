export function currencyFormatter(currency, value, inputValue = 1) {
  //
  const currencyType = {
    USD: {
      location: "en-US",
      options: { style: "currency", currency: "USD" },
      operator: (a, b) => {
        return b / a;
      },
    },
    VES: {
      location: "es-VE",
      options: { style: "currency", currency: "VES" },
      operator: (a, b) => {
        return a * b;
      },
    },
  };

  const selectedCurrency = currency;
  const location = currencyType[selectedCurrency].location;
  const options = currencyType[selectedCurrency].options;
  const operation = currencyType[selectedCurrency].operator(value, inputValue);

  return new Intl.NumberFormat(location, options).format(operation);
}
