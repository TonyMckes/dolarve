import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Currencies from "../components/CurrencyList";
import { useCurrencies } from "../context/CurrenciesContextProvider";

export default function Favorites() {
  const { setCurList, setLoading, setCurInput } = useOutletContext();

  const { allCurrencies } = useCurrencies();

  useEffect(() => {
    try {
      (async () => {
        const arr = localStorage.getItem("favorites");

        if (arr) {
          setLoading(true);

          const favCurrencies = allCurrencies.reduce((acc, curr) => {
            if (arr.includes(curr._id)) acc.push(curr);
            return acc;
          }, []);

          setCurList(favCurrencies);

          setLoading(false);
        }
      })();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [allCurrencies]);

  return <Currencies filter />;
}
