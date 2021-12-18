import React, { useContext, useEffect } from "react";
import { UserContext } from "./App";
import "./Currencies.css";
import { currencyFormatter } from "./currencyFormatter";
import { fetchData } from "./fetchData";
import { timeFormat } from "./timeFormat";

function Currencies({
  currencyCode,
  currencyName,
  inputValue,
  setCurrencies,
  setCurrencyDetails,
  setCurrencyName,
  setToggleModal,
  toggleModal,
}) {
  const [currencies] = useContext(UserContext);

  useEffect(() => {
    const fetchDat = async () => {
      // You can await here
      const response = await fetchData(currencyName);
      if (response instanceof Array) {
        setCurrencies(response);
      } else {
        setCurrencyDetails(response);
        setToggleModal(!toggleModal);
      }
    };
    fetchDat();
  }, [currencyName]);

  function handleClick(e) {
    // console.log(e.currentTarget.dataset.name);
    setCurrencyName(e.currentTarget.dataset.name);
  }

  return (
    currencies.length > 0 && (
      <div className="container">
        {currencies.map((item) => {
          return (
            <div
              className={`cur-container`}
              key={item._id}
              data-name={item.slug}
              onClick={(e) => handleClick(e)}
            >
              <img className="cur-logo" src={item.icon} alt={item.name} />
              <h4 className="cur-name">{item.name}</h4>
              <span className="cur-value">
                {currencyFormatter(currencyCode, item.price, inputValue)}
              </span>
              <span className="cur-updated">{timeFormat(item.updatedAt)}</span>
            </div>
          );
        })}
      </div>
    )
  );
}

export default Currencies;
