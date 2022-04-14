import { useEffect, useState } from "react";
import CurrencyList from "../components/CurrencyList";
import useCurrencies from "../hooks/useCurrencies";

function Favorites() {
  const { loading, curList } = useCurrencies("");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favorites = localStorage.getItem("favorites");

    if (favorites) {
      const favCurrencies = curList.reduce((acc, curr) => {
        if (favorites.includes(curr._id)) acc.push(curr);
        return acc;
      }, []);

      setFavorites(favCurrencies);
    }
  }, [curList]);

  return (
    <>
      <CurrencyList currencies={favorites} loading={loading} />
    </>
  );
}

export default Favorites;
