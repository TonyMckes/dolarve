import useCurrencies from "hooks/useCurrencies";
import { createContext, useContext, useEffect, useState } from "react";

const CurrenciesContext = createContext();
export function useCurrenciesContext() {
  return useContext(CurrenciesContext);
}

const sessionCur = sessionStorage.getItem("sessionCurrencies");
const initialState = sessionCur ? JSON.parse(sessionCur) : [];

function CurrenciesProvider({ children }) {
  const [currencies, setCurrencies] = useState(initialState);
  const { curList } = useCurrencies("");

  useEffect(() => {
    if (!sessionCur) {
      const excludedList = ["blue", "currencyBlue", "currency"];

      const filteredCur = curList.reduce((acc, curr) => {
        if (!excludedList.includes(curr.type)) acc.push(curr);

        return acc;
      }, []);

      setCurrencies(filteredCur);

      sessionStorage.setItem("sessionCurrencies", JSON.stringify(filteredCur));
    }
  }, []);

  return (
    <CurrenciesContext.Provider value={{ currencies, setCurrencies }}>
      {children}
    </CurrenciesContext.Provider>
  );
}

export default CurrenciesProvider;
