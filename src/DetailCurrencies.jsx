import React from "react";
import { currencyFormatter } from "./currencyFormatter";
import "./DetailCurrencies.css";
import LineChart from "./LineChart";
import { timeFormat } from "./timeFormat";

function DetailCurrencies({
  currencyCode,
  currencyDetails,
  inputValue,
  setCurrencyName,
  setToggleModal,
  toggleModal,
}) {
  function closeHandler(e) {
    if (e.currentTarget !== e.target) return;
    setCurrencyName("");
    setToggleModal(!toggleModal);
  }

  return (
    <div className="background-window" onClick={(e) => closeHandler(e)}>
      <div className="history-window">
        <button className="close-btn" onClick={(e) => closeHandler(e)}>
          x
        </button>
        <div className="window-container">
          <div>
            <img src={currencyDetails.icon} alt={currencyDetails.name} />
            <h3>{currencyDetails.name}</h3>
          </div>
          <p>Precio del {currencyDetails.name} hoy en Venezuela</p>
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {currencyDetails.prices.slice(0, 7).map((item) => {
                return (
                  <tr key={item._id}>
                    <td className="date">{timeFormat("", item.updatedAt)}</td>
                    <td className="price">
                      {currencyFormatter(currencyCode, item.price, inputValue)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <LineChart
            currencyCode={currencyCode}
            currencyDetails={currencyDetails}
            inputValue={inputValue}
          />
        </div>
      </div>
    </div>
  );
}

export default DetailCurrencies;
