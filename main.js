// const url = "https://s3.amazonaws.com/dolartoday/data.json";
const vcoudUrl = "https://exchange.vcoud.com/coins/";
const offline = "offline.json";

const formatter = new Intl.NumberFormat("es-VE", {
  style: "currency",
  currency: "VES",
});

const loadingWindow = document.querySelector("#loading-window");
const loading = document.querySelector("#loading");

document.querySelector("button").addEventListener("click", refresh);

function refresh() {
  // Show loading animation
  showLoading();

  fetchData(vcoudUrl);
}

fetchData(vcoudUrl);

async function fetchData(url) {
  //  Show loading animation
  showLoading();

  try {
    const response = await fetch(url);
    const data = await response.json();
    processData(data);

    // Hide loading animation
    loadingWindow.classList.remove("display");
    loading.classList.remove("display");
  } catch (error) {
    // TODO: Add an alert or option to reload
    console.warn(error);
  }
}
// Show loading animation
function showLoading() {
  loadingWindow.classList.add("display");
  loading.classList.add("display");
}

function processData(data) {
  // Filter: selected ones only
  const filterElem = [0, 1, 2, 4, 6, 7, 9]; //13, 19

  // Filter process
  const dataInfo = data.filter((arg, index) => filterElem.includes(index));

  // Select input and add event
  const input = document.querySelector("#input-box");
  input.addEventListener("input", calc);

  // Select container in html
  const table = document.querySelector(".container");

  // Check if ".container" doesn't have any child elements
  table.firstChild ? calc() : drawElements();

  // Set "#input-box" to display
  input.style.display = "inline-block";

  //
  function calc() {
    // Select all classes
    const prices = document.querySelectorAll(".calcValue");
    const dates = document.querySelectorAll(".dateTime");

    // For every class, update only the innerText
    for (let i = 0; i < dataInfo.length; i++) {
      prices[i].innerText = formatter.format(dataInfo[i].price * input.value);
      dates[i].innerText = new Date(dataInfo[i].updatedAt).toLocaleString(
        "es-VE"
      );
    }
  }

  // This function only runs once
  function drawElements() {
    // Loop over dataInfo(array) and call the function each time
    dataInfo.forEach((obj) => {
      // Create HTML elements
      const tableRow = document.createElement("section");
      const tableImg = document.createElement("img");
      const tableName = document.createElement("h3");
      const tablePrice = document.createElement("p");
      const tableDate = document.createElement("p");

      tableRow.className = `item-card ${obj.slug}`;

      // Process image
      tableImg.src = obj.icon;
      tableImg.alt = obj.name;

      // Process name
      tableName.innerText = obj.name;

      // Process currency value
      tablePrice.innerText = formatter.format(obj.price); //* Update this text for each element.
      tablePrice.className = "calcValue";

      // Process dates
      tableDate.innerText = new Date(obj.updatedAt).toLocaleString("es-VE");
      tableDate.className = "dateTime";

      // Append to DOM
      table.appendChild(tableRow);
      tableRow.append(tableImg, tableName, tablePrice, tableDate);
    });
  }
}
