import { createContext, useContext, useEffect, useState } from "react";
import fetchCurrencies from "services/fetchCurrencies";

const CurrenciesContext = createContext();
export function useCurrenciesContext() {
  return useContext(CurrenciesContext);
}

const sessionCur = sessionStorage.getItem("sessionCurrencies");
const initialState = sessionCur ? JSON.parse(sessionCur) : [];

function CurrenciesProvider({ children }) {
  const [currencies, setCurrencies] = useState(initialState);

  useEffect(() => {
    if (sessionCur) return;

    (async () => {
      try {
        const excludedList = ["blue", "currencyBlue", "currency"];
        const data = await fetchCurrencies("");

        const filteredCur = data.reduce((acc, curr) => {
          if (!excludedList.includes(curr.type)) acc.push(curr);

          return acc;
        }, []);

        setCurrencies(filteredCur);

        sessionStorage.setItem(
          "sessionCurrencies",
          JSON.stringify(filteredCur),
        );
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <CurrenciesContext.Provider value={{ currencies, setCurrencies }}>
      {children}
    </CurrenciesContext.Provider>
  );
}

export default CurrenciesProvider;
