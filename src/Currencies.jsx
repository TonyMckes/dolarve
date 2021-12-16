import React, { useState, useEffect, useContext } from "react";
import { currencyFormatter } from "./currencyFormatter";
import { timeFormat } from "./timeFormat";
import { UserContext } from "./App";
import { fetchData } from "./fetchData";
import "./Currencies.css";

function Currencies({ inputValue, currency }) {
  const [resourceType, setResourceType] = useState("");
  const [data, setData] = useContext(UserContext);
  const [dataObj, setDataObj] = useState({});

  useEffect(async () => {
    const res = await fetchData(resourceType);
    if (res instanceof Array) setData(res);
    if (res instanceof Object) setDataObj(res);
  }, [resourceType]);

  function handleClick(e) {
    setResourceType(e.currentTarget.dataset.name);
  }

  return (
    <div className="container">
      {data &&
        data.length > 0 &&
        data.map((item) => {
          return (
            <div
              className={`cur-container ${item.slug}`}
              key={item._id}
              data-name={item.slug}
              onClick={(e) => handleClick(e)}
            >
              <img className="cur-logo" src={item.icon} alt={item.name} />
              <h4 className="cur-name">{item.name}</h4>
              <span className="cur-value">
                {currencyFormatter(currency, item.price, inputValue)}
              </span>
              <span className="cur-updated">{timeFormat(item.updatedAt)}</span>
            </div>
          );
        })}
    </div>
  );
}

export default Currencies;
