import React, { createContext, useState } from "react";
import Currencies from "./Currencies";
import DetailCurrencies from "./DetailCurrencies";
import Footer from "./Footer";
import Header from "./Header";

export const UserContext = createContext();

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [currencyCode, setCurrencyCode] = useState("VES");
  const [currencyDetails, setCurrencyDetails] = useState({});
  const [currencyName, setCurrencyName] = useState("");
  const [inputValue, setInputValue] = useState(1);
  const [toggleModal, setToggleModal] = useState(false);
  const [view, setView] = useState(false);

  return (
    <>
      <UserContext.Provider value={[currencies]}>
        <Header view={view} setView={setView} />
        <Currencies
          currencyCode={currencyCode}
          currencyDetails={currencyDetails}
          currencyName={currencyName}
          inputValue={inputValue}
          setCurrencies={setCurrencies}
          setCurrencyCode={setCurrencyCode}
          setCurrencyDetails={setCurrencyDetails}
          setCurrencyName={setCurrencyName}
          setInputValue={setInputValue}
          setToggleModal={setToggleModal}
          toggleModal={toggleModal}
          view={view}
        />
        <div>
          <div
            className={`loading-bg ${!currencies.length ? "display" : ""}`}
          ></div>
          <div
            className={`loading ${!currencies.length ? "display" : ""}`}
          ></div>
        </div>
        {toggleModal && (
          <DetailCurrencies
            currencyCode={currencyCode}
            currencyDetails={currencyDetails}
            inputValue={inputValue}
            setCurrencyName={setCurrencyName}
            setToggleModal={setToggleModal}
            toggleModal={toggleModal}
          />
        )}
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
