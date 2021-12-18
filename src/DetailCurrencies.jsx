import React, { useContext } from "react";
import { UserContext } from "./App";
import { currencyFormatter } from "./currencyFormatter";
import "./DetailCurrencies.css";
import { timeFormat } from "./timeFormat";

function DetailCurrencies({
  currencyCode,
  currencyDetails,
  inputValue,
  setCurrencyName,
  setToggleModal,
  toggleModal,
}) {
  const [currencies] = useContext(UserContext);

  function closeHandler(e) {
    if (e.currentTarget !== e.target) return;
    setCurrencyName("");
    setToggleModal(!toggleModal);
  }

  return (
    <div className="background-window" onClick={(e) => closeHandler(e)}>
      <div className="history-window">
        <button className="close-btn" onClick={(e) => closeHandler(e)}>
          X
        </button>
        <div className="window-container">
          <h3>{currencyDetails.name}</h3>
          {currencyDetails.subtitle ? <p>{currencyDetails.subtitle}</p> : null}
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {console.log(currencyDetails)}
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
        </div>
      </div>
    </div>
  );
}

export default DetailCurrencies;
