// const url = "https://s3.amazonaws.com/dolartoday/data.json";
const vcoudUrl = "https://exchange.vcoud.com/coins/";
const offline = "offline.json";

const formatter = new Intl.NumberFormat("es-VE", {
  style: "currency",
  currency: "VES",
});

document.querySelector("button").addEventListener("click", refresh);

function refresh() {
  //TODO: Show notification or animation
  fetchData(vcoudUrl);
}

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

function processData(data) {
  // Filter: selected ones only
  const filterElem = [0, 1, 2, 4, 6, 7, 9]; //13, 19

  // Filter process
  const dataInfo = data.filter((arg, index) => filterElem.includes(index));

  // Select container in html
  const table = document.querySelector(".container");

  refreshElements();

  function refreshElements() {
    // remove the previous contents of the table element
    while (table.firstChild) {
      table.removeChild(table.firstChild);
    }
  }

  // Loop over dataInfo(array) and call the function each time
  dataInfo.forEach((obj) => {
    drawElements(obj);
  });

  function drawElements(obj) {
    // Create HTML elements
    const tableRow = document.createElement("section");
    const tableImg = document.createElement("img");
    const tableName = document.createElement("h3");
    const tablePrice = document.createElement("p");

    tableRow.className = `item-card ${obj.slug}`;

    // Process image
    tableImg.src = obj.icon;
    tableImg.alt = obj.name;

    // Process name
    tableName.innerText = obj.name;

    // Process currency value
    tablePrice.innerText = formatter.format(obj.price);

    // Append to DOM
    table.appendChild(tableRow);
    tableRow.append(tableImg, tableName, tablePrice);
  }
}
