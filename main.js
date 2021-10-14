// const url = "https://s3.amazonaws.com/dolartoday/data.json";
const vcoudUrl = "https://exchange.vcoud.com/coins/";

fetchData(vcoudUrl);

async function fetchData(url) {
  //* call loading animation
  try {
    const response = await fetch(url);
    const data = await response.json();
    processData(data);
    //* remove loading animation
  } catch (error) {
    console.warn(error);
  }
}

function processData(jsonData) {
  const raw = jsonData;
  const filterIn = [0, 1, 2, 4, 6, 7, 9, 13, 19];
  // const filterOut = [3, 5, 8, 10, 11, 12]; //
  const arr = raw.filter((arg, index) => filterIn.includes(index));
  // arr.length = 9
  drawElements(arr);
}

function drawElements(arr) {
  const container = document.querySelector(".container");

  arr.forEach((element) => {
    const itemList = document.createElement("div");

    // ? Esto se puede mejorar;
    //TODO:
    let name = element.name;
    let price = element.price;
    let priceOld = element.priceOld;
    let updatedAt = element.updatedAt;
    let slug = element.slug;
    let icon = element.icon;

    itemList.className = `item-card ${slug}`;
    itemList.innerText = name;
    container.append(itemList);
  });

  const elementArr = ["h6", "img", "span", "span", "p"];
  const itemDiv = document.querySelectorAll(".item-card");
  itemDiv.append(...elementArr);
}
