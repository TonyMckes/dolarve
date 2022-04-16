import SmallerCurrencyList from "components/SmallerCurrencyList";
import { useCurrenciesContext } from "context/CurrenciesContext";
import { memo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getRandomCur } from "utils";

function DiscoverOthers() {
  const [randomCurr, setRandomCurr] = useState([]);
  const { currencies } = useCurrenciesContext();
  const { pathname } = useLocation();

  useEffect(() => {
    setRandomCurr(getRandomCur(currencies));
  }, [pathname, currencies]);

  return <SmallerCurrencyList currencies={randomCurr} />;
}

export default memo(DiscoverOthers);
