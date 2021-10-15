// const url = "https://s3.amazonaws.com/dolartoday/data.json";
const vcoudUrl = "https://exchange.vcoud.com/coins/";
// const vcoudDir = "ajam.json";

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
  // const raw = jsonData;
  const filterIn = [0, 1, 2, 4, 6, 7, 9, 13, 19];
  // const filterOut = [3, 5, 8, 10, 11, 12]; //
  const arr = jsonData.filter((arg, index) => filterIn.includes(index));
  // const arrProcessed = arr.filter((arg, index) => filterKeys.includes(index));
  // arr.length = 9
  drawElements(arr);
}

function drawElements(arr) {
  const table = document.querySelector(".container");
  const filterKeys = ["name", "price", "priceOld"];
  console.log(arr);
  arr.forEach((element) => {
    /*  const tableRow = document.createElement("tr");
    tableRow.className = `item-card ${element.slug}`;
    table.append(tableRow);

     const filtered = Object.keys(element)
      .filter((key) => filterKeys.includes(key))
      .reduce((obj, key) => {
        obj[key] = element[key];
        // console.log(obj[key]);
        // console.log(element[key]);

        const tableData = document.createElement("td");
        tableData.innerText = obj[key];
        tableRow.append(tableData);

        return obj;
      }, {}); */
  });

  arr.forEach((element) => {
    // ? Esto se puede mejorar;
    //TODO:
    let name = element.name;
    let price = element.price;
    let priceOld = element.priceOld;
    let updatedAt = element.updatedAt;
    let slug = element.slug;
    let icon = element.icon;

    const tableRow = document.createElement("tr");
    const tableImg = document.createElement("img");
    const tableName = document.createElement("td");
    const tablePrice = document.createElement("td");
    const tablePriceOld = document.createElement("td");
    try {
      tableRow.className = `item-card ${slug}`;
      table.append(tableRow);
      tableImg.src = icon;
      tableName.innerText = name;
      tablePrice.innerText = price;
      tablePriceOld.innerText = priceOld;
      tableRow.append(tableImg, tableName, tablePrice, tablePriceOld);
      if (icon == undefined) {
        const icon = document.querySelector(".dolar-hola-reserve img");
        icon.src = "https://reserve.org/assets/img/favicon/android-icon-192x192.png?v=2.1";
      }
    } catch (error) {
      console.log("not again");
    }
  });

  // const itemDiv = document.querySelectorAll(".item-card");
  // const elementArr = ["h6", "img", "span", "span", "p"];
  // itemDiv.forEach((elem) => {
  //   elementArr.forEach((element) => {
  //     const elementCont = document.createElement(element);
  //     elem.append(elementCont);
  //   });
  // });
}
