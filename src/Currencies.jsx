import React, { useContext, useEffect } from "react";
import { UserContext } from "./App";
import "./Currencies.css";
import { currencyFormatter } from "./currencyFormatter";
import { fetchData } from "./fetchData";
import Inputs from "./Inputs";
import { timeFormat } from "./timeFormat";

function Currencies({
  currencyCode,
  currencyName,
  inputValue,
  setCurrencies,
  setCurrencyCode,
  setCurrencyDetails,
  setCurrencyName,
  setInputValue,
  setToggleModal,
  toggleModal,
  view,
}) {
  const [currencies] = useContext(UserContext);

  useEffect(() => {
    const fetchDat = async () => {
      const response = await fetchData(currencyName);
      if (response instanceof Array) {
        setCurrencies(response);
      } else {
        setCurrencyDetails(response);
        setToggleModal(!toggleModal);
        document.body.classList.remove("loading-indicator");
      }
    };

    if (currencyName !== "") document.body.classList.add("loading-indicator");

    fetchDat();
  }, [currencyName]);

  function handleClick(e) {
    setCurrencyName(e.currentTarget.dataset.name);
  }

  const layoutView = view === true ? "grid" : "";

  return (
    <>
      <div className="wrapper">
        <div>
          <h1 className="title">USD =&gt; Bs.S</h1>
        </div>
        {currencies.length > 0 && (
          <div className={`container ${layoutView}`}>
            {currencies.map((item) => {
              return (
                <div
                  className={`cur-container ${layoutView}`}
                  key={item._id}
                  data-name={item.slug}
                  onClick={(e) => handleClick(e)}
                >
                  <img
                    className={`cur-logo ${layoutView}`}
                    src={item.icon}
                    alt={item.name}
                  />
                  <h4 className={`cur-name ${layoutView}`}>{item.name}</h4>
                  <span className={`cur-value ${layoutView}`}>
                    {currencyFormatter(currencyCode, item.price, inputValue)}
                  </span>
                  <span className={`cur-updated ${layoutView}`}>
                    {timeFormat(item.updatedAt)}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        <Inputs
          setInputValue={setInputValue}
          setCurrencyCode={setCurrencyCode}
        />
      </div>
    </>
  );
}

export default Currencies;
