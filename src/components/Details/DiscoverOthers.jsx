import SmallerCurrencyList from "components/SmallerCurrencyList";
import { useCurrenciesContext } from "context/CurrenciesContext";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getRandomCur } from "utils";

function DiscoverOthers() {
  const [randomCurr, setRandomCurr] = useState([]);
  const { currencies } = useCurrenciesContext();
  const location = useLocation();

  useEffect(() => {
    setRandomCurr(getRandomCur(currencies));
  }, [location]);

  return <SmallerCurrencyList currencies={randomCurr} />;
}

export default DiscoverOthers;
