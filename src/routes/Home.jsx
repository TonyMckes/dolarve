import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Currencies from "../components/CurrencyList";
import { useCurrencies } from "../context/CurrenciesContextProvider";

export default function Home() {
  const { setCurList, setLoading, setCurInput } = useOutletContext();

  const { allCurrencies } = useCurrencies();

  useEffect(() => {
    try {
      (async () => {
        setLoading(true);

        const arr = localStorage.getItem("favoritedCurr");

        const favCurrencies = allCurrencies.reduce((acc, curr) => {
          if (arr.includes(curr._id)) acc.push(curr);
          return acc;
        }, []);

        // setCurInput({ inputCode: "VES", inputValue: 1 });

        setCurList(favCurrencies);

        setLoading(false);
      })();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [allCurrencies]);

  return <Currencies filter />;
}
