export function formatCur(
  // type,
  price,
  // { inputValue = 1, inputCode },
  code,
  // check,
) {
  // console.log(type, price, inputValue, inputCode, code, check);
  // console.log("code", code);

  // const list = {
  //   USD: {
  //     location: "en-US",
  //     options: {
  //       style: "currency",
  //       currency: "USD",
  //       maximumFractionDigits: 10,
  //     },

  //     operation: (a, b) => b / a,
  //   },
  //   VES: {
  //     location: "es-VE",
  //     options: { style: "currency", currency: "VES" },

  //     operation: (a, b) => a * b,
  //   },
  //   ARS: {
  //     location: "es-AR",
  //     options: { style: "currency", currency: "ARS" },
  //     operation: (a, b) => a * b,
  //   },
  // };

  // if (type === "bancove" || type === "bolivar") {
  //   const location = list[inputCode].location;
  //   const options = list[inputCode].options;
  //   const operation = list[inputCode].operation(price, inputValue);

  //   return new Intl.NumberFormat(location, options).format(operation);
  // }

  // if (code === "USD" || code === "VES") {
  //   const location = list[code].location;
  //   const options = list[code].options;
  //   const operation = list[code].operation(price, inputValue);

  //   if (check) {
  //     return new Intl.NumberFormat(options).format(operation);
  //   }
  //   return new Intl.NumberFormat(location, options).format(price);
  // }
  // return new Intl.NumberFormat(code).format(price);

  return new Intl.NumberFormat(navigator.language, {
    style: "currency",
    currency: code,
    currencyDisplay: "narrowSymbol",
  }).format(price);
}
