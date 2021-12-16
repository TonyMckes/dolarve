import React, { useState, createContext } from "react";
import Header from "./Header";
import Inputs from "./Inputs";
import Currencies from "./Currencies";
import Footer from "./Footer";

export const UserContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState(1);
  const [currency, setCurrency] = useState("VES");

  const [data, setData] = useState([]);

  return (
    <>
      <UserContext.Provider value={[data, setData]}>
        <Header />
        {/* <h1>USD =&gt; Bs.S</h1> */}
        <Currencies inputValue={inputValue} currency={currency} />

        <Inputs setInputValue={setInputValue} setCurrency={setCurrency} />

        <div>
          <div className={`loading-bg ${!data.length ? "display" : ""}`}></div>
          <div className={`loading ${!data.length ? "display" : ""}`}></div>
        </div>

        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
