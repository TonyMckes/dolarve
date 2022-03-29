export function diffPrice(a, b) {
  return `${a < b ? "+" : a === b ? "" : "-"}${(
    100 * Math.abs((a - b) / ((a + b) / 2))
  ).toFixed(2)}`;
}

export function formatTime(input, dates) {
  const date = input instanceof Date ? input : new Date(input);

  const formatter = new Intl.RelativeTimeFormat("es");

  const ranges = {
    years: 3600 * 24 * 365,
    months: 3600 * 24 * 30,
    weeks: 3600 * 24 * 7,
    days: 3600 * 24,
    hours: 3600,
    minutes: 60,
    seconds: 1,
  };
  const secondsElapsed = (date.getTime() - Date.now()) / 1000;

  for (let key in ranges) {
    if (ranges[key] < Math.abs(secondsElapsed)) {
      const delta = secondsElapsed / ranges[key];

      return formatter.format(Math.round(delta), key);
    }
  }

  return new Date(dates).toLocaleDateString("es", {
    day: "2-digit",
    month: "short",
  });
}

export function getRandomCur(array) {
  const arr = [];

  for (let i = 0; i < 6; ) {
    const random = Math.floor(Math.random() * array.length);

    if (arr.includes(array[random])) continue;

    arr.push(array[random]);

    i++;
  }

  return arr;
}

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
