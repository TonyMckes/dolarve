import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const CurrenciesContext = createContext();
export function useCurrencies() {
  return useContext(CurrenciesContext);
}

const currencies = sessionStorage.getItem("sessionCurrencies");
const initialState = currencies ? JSON.parse(currencies) : [];

export default function CurrenciesContextProvider({ children }) {
  const [allCurrencies, setAllCurrencies] = useState(initialState);

  useEffect(() => {
    if (!currencies) {
      try {
        (async () => {
          const res = await axios.get(
            `https://exchange.vcoud.com/coins/latest`,
          );

          const filtered = ["blue", "currencyBlue", "currency"];

          const cur = res.data.reduce((acc, curr) => {
            if (!filtered.includes(curr.type)) acc.push(curr);

            return acc;
          }, []);

          setAllCurrencies(cur);

          sessionStorage.setItem("sessionCurrencies", JSON.stringify(cur));
        })();
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <CurrenciesContext.Provider value={{ allCurrencies, setAllCurrencies }}>
      {children}
    </CurrenciesContext.Provider>
  );
}
