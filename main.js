// const url = "https://s3.amazonaws.com/dolartoday/data.json";
const vcoud = "https://exchange.vcoud.com/coins/";
const offline = "offline.json";

// Currency formatter
const formatter = new Intl.NumberFormat("es-VE", {
  style: "currency",
  currency: "VES",
});

const fadeBackground = document.querySelector("#loading-window");
const loadingSpinner = document.querySelector("#loading");

document.querySelector("button").addEventListener("click", refresh);

function refresh() {
  // Show loading animation
  showLoading();

  fetchData(vcoud);
}

fetchData(vcoud);

// Get info from server
async function fetchData(url) {
  try {
    //  Show loading animation while waiting for a response
    showLoading();

    // Wait for response
    const response = await fetch(url);

    // If response is OK, take json and return an array with objects
    const dataArray = await response.json();

    // Then call
    processData(dataArray);

    // After the page gets rendered, hide loading indicators
    fadeBackground.classList.remove("display");
    loadingSpinner.classList.remove("display");

    //Then
  } catch (error) {
    // If something goes wrong then;
    // TODO: Add an alert or option to reload
    console.warn(error);
  }
}

function showLoading() {
  fadeBackground.classList.add("display");
  loadingSpinner.classList.add("display");
}

//
function processData(dataArray) {
  // Filter selected ones only
  const selection = [0, 1, 2, 4, 6, 7, 9]; //13, 19
  const currencies = dataArray.filter((_, i) => selection.includes(i));

  // Select container in html
  const container = document.querySelector(".container");

  // Select input and add event
  const input = document.querySelector("#input-box");

  // input.addEventListener("input", calc);
  input.addEventListener("input", renderElements);

  // Start displaying elements
  renderElements();

  // Set "#input-box" to display
  input.style.display = "inline-block";

  // Calculate time since last data was fetched
  function timeAgo(input) {
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
  }

  // Start displaying elements
  function renderElements() {
    // If the container doesn't have any element child's, then
    if (!container.firstChild) {
      // Start creating elements
      currencies.forEach((currency) => {
        // Create HTML elements
        const section = document.createElement("section");
        const coinImg = document.createElement("img");
        const coinName = document.createElement("h3");
        const coinValue = document.createElement("p");
        const coinDate = document.createElement("p");

        section.className = `item-card ${currency.slug}`;

        // Process image
        coinImg.src = currency.icon;
        coinImg.alt = currency.name;

        // Process name
        coinName.innerText = currency.name;

        // Process currency value
        coinValue.className = "coinValue";
        coinValue.innerText = formatter.format(currency.price);

        // Process dates
        // coinDate.innerText = new Date(obj.updatedAt).toLocaleString("es-VE");
        coinDate.className = "coinDate";
        coinDate.innerText = timeAgo(currency.updatedAt);

        // Append to DOM
        container.appendChild(section);
        section.append(coinImg, coinName, coinValue, coinDate);
      });

      // Update existing elements
    } else {
      // Select classes
      const values = document.querySelectorAll(".coinValue");
      const dates = document.querySelectorAll(".coinDate");

      currencies.forEach((currency, i) => {
        // Update existing classes with up to date information
        values[i].innerText = formatter.format(currency.price * input.value);
        dates[i].innerText = timeAgo(currency.updatedAt);
      });
    }
  }
}
