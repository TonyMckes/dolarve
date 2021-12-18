export const fetchData = async (curName) => {
  let url;
  if (curName === "") {
    url = `https://exchange.vcoud.com/coins/latest?type=${"bolivar"}&base=usd`;
  } else {
    url = `https://exchange.vcoud.com/coins/${curName}?gap=1w&base=usd`;
  }

  const res = await fetch(url);

  // console.log(url);
  if (res.status >= 400 && res.status < 600) {
    throw new Error(`Hello ${res.status} ${res.statusText}`);
  }
  const json = await res.json();

  // if (json instanceof Array) {
  //   // const selection = [0, 1, 2, 4, 6, 7, 9]; //13, 19
  //   // const currencies = json.filter((_, i) => selection.includes(i));
  //   return currencies;
  // }

  return json;
};
