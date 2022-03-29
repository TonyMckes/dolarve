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
