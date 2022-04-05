import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Banks from "./routes/Banks";
// import Blue from "./routes/Blue";
import Cryptocurrencies from "./routes/Cryptocurrencies";
// import Currency from "./routes/Currency";
// import CurrencyBlue from "./routes/CurrencyBlue";
import Details from "./routes/Details/Details";
import Favorites from "./routes/Favorites";
import Login from "./routes/Login";
import Quotations from "./routes/Quotations";
import Resources from "./routes/Resources";
import SignUp from "./routes/SignUp";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Favorites />} />

          <Route path="cotizaciones" element={<Quotations />} />
          <Route path="cotizaciones/:slug" element={<Details />} />

          <Route path="criptomonedas" element={<Cryptocurrencies />} />
          <Route path="criptomonedas/:slug" element={<Details />} />

          <Route path="tasas-de-bancos" element={<Banks />} />
          <Route path="tasas-de-bancos/:slug" element={<Details />} />

          <Route path="recursos" element={<Resources />} />
          <Route path="recursos/:slug" element={<Details />} />

          {/* <Route path="blue" element={<Blue />} />
          <Route path="blue/:slug" element={<Details />} />

          <Route path="divisa" element={<Currency />} />
          <Route path="divisa/:slug" element={<Details />} />

          <Route path="divisa-blue" element={<CurrencyBlue />} />
          <Route path="divisa-blue/:slug" element={<Details />} /> */}

          <Route path="login" element={<Login />} />
          <Route path="register" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
