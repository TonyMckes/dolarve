import React, { createContext, useState } from "react";
import Currencies from "./Currencies";
import DetailCurrencies from "./DetailCurrencies";
// import Header from "./Header";
import Inputs from "./Inputs";
// import Footer from "./Footer";

export const UserContext = createContext();

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [currencyCode, setCurrencyCode] = useState("VES");
  const [currencyDetails, setCurrencyDetails] = useState({});
  const [currencyName, setCurrencyName] = useState("");
  const [inputValue, setInputValue] = useState(1);
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <>
      <UserContext.Provider value={[currencies]}>
        {/* <Header /> */}
        {/* <h1 className="h-12">USD =&gt; Bs.S</h1> */}
        <Currencies
          currencyCode={currencyCode}
          currencyName={currencyName}
          inputValue={inputValue}
          setCurrencies={setCurrencies}
          setCurrencyDetails={setCurrencyDetails}
          setCurrencyName={setCurrencyName}
          setToggleModal={setToggleModal}
          toggleModal={toggleModal}
        />
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
        <Inputs
          setInputValue={setInputValue}
          setCurrencyCode={setCurrencyCode}
        />

        <div>
          <div
            className={`loading-bg ${!currencies.length ? "display" : ""}`}
          ></div>
          <div
            className={`loading ${!currencies.length ? "display" : ""}`}
          ></div>
        </div>

        {/* <Footer /> */}
      </UserContext.Provider>
    </>
  );
}

export default App;
