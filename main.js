// const url = "https://s3.amazonaws.com/dolartoday/data.json";
const vcoud = "https://exchange.vcoud.com/coins/";
const offline = "offline.json"; // https://exchange.vcoud.com/coins/
const offlineCoins = "offline-coin.json"; // https://exchange.vcoud.com/coins/dolartoday?gap=1w&base=usd

// Select container in html
const container = document.querySelector(".container");

// Select input
const input = document.querySelector("#input-box");

const selectCurrency = document.querySelector("#select-currency");

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

    if (response.status >= 400 && response.status < 600) {
      throw new Error(`Hello ${response.status} ${response.statusText}`);
    }

    // If response is OK, take json and return an array with objects
    const data = await response.json();

    // Then call
    processData(data);

    // After the page gets rendered, hide loading indicators
    hideLoading();

    //Then
  } catch (error) {
    // If something goes wrong then;
    // TODO: Add an alert or option to reload
    console.error(`${error}`);

    // On errors, hide loading indicators
    hideLoading();
  }
}

function showLoading() {
  fadeBackground.classList.add("display");
  loadingSpinner.classList.add("display");
}
function hideLoading() {
  fadeBackground.classList.remove("display");
  loadingSpinner.classList.remove("display");
}

//
function processData(data) {
  // Filter selected ones only
  const selection = [0, 1, 2, 4, 6, 7, 9]; //13, 19

  if (data instanceof Array) {
    //FIXME:
    const currencies = data.filter((_, i) => selection.includes(i));

    // Start displaying elements
    renderElements();
  } else {
    renderWindow();
  }

  input.addEventListener("input", renderElements);
  selectCurrency.addEventListener("click", renderElements);

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
        section.dataset.name = currency.slug;
        section.addEventListener("click", function () {
          fetchData(
            `https://exchange.vcoud.com/coins/${this.dataset.name}?gap=1w&base=usd`
          );
        });

        // Process image
        coinImg.src = currency.icon;
        coinImg.alt = currency.name;

        // Process name
        coinName.innerText = currency.name;

        // Process currency value
        coinValue.className = "coinValue";
        coinValue.innerText = currencyFormatter(currency.price, input.value);

        // Process dates
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
        values[i].innerText = currencyFormatter(currency.price, input.value);
        dates[i].innerText = timeAgo(currency.updatedAt);
      });
    }
  }

  //
  function renderWindow() {
    //
    const frame = `
    <div class="window-container">
      <h3>${data.name}</h3>
      <p>${data?.subtitle ? data.subtitle : ""}</p>
      <table>
        <thead>
          <th>Fecha</th>
          <th>Valor</th>
        </thead>
        <tbody>

        </tbody>
      </table>

    <button class="close-btn"><i class="far fa-times-circle"></i></button>
    </div>
    `;

    const divWindow = document.createElement("div");
    divWindow.className = "history-window";
    document.body.appendChild(divWindow);
    divWindow.innerHTML = frame;

    const container = document.querySelector(".window-container");

    const tbody = document.querySelector(".window-container > table > tbody");

    data.prices
      .slice()
      .reverse()
      .forEach((element) => {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        const tdPrice = document.createElement("td");

        td.innerText = timeAgo(element.updatedAt); //TODO: Change date format

        tdPrice.innerText = currencyFormatter(element.price); //

        tbody.append(tr);
        tr.append(td, tdPrice);
      });

    const button = document.querySelector(".close-btn");
    button.addEventListener("click", () => {
      divWindow.remove();
    });
  }
}

// Currency formatter
function currencyFormatter(value, inputValue = 1) {
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

  const selectedCurrency = selectCurrency.value;
  const location = currencyType[selectedCurrency].location;
  const options = currencyType[selectedCurrency].options;
  const operation = currencyType[selectedCurrency].operator(value, inputValue);

  return new Intl.NumberFormat(location, options).format(operation);
}

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
