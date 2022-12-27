import CurrencyList from "components/CurrencyList";
import { useFavoritesContext } from "context/FavoritesContext";
import useCurrencies from "hooks/useCurrencies";
import useDebounce from "hooks/useDebounce";
import { useEffect, useState } from "react";

function Favorites() {
  const { curList, error, loading } = useCurrencies(""); // all currencies
  const [favList, setFavList] = useState([]);
  const { favorites } = useFavoritesContext();

  useEffect(() => {
    updateFavoritesList();
  }, [curList]);

  const updateFavoritesList = () => {
    if (curList.length === 0) return;

    const favCurrencies = curList.reduce((acc, curr) => {
      if (favorites.includes(curr._id)) acc.push(curr);
      return acc;
    }, []);

    setFavList(favCurrencies);
  };

  useDebounce(updateFavoritesList, 1000, [favorites]);

  return (
    <>
      <CurrencyList currencies={favList} error={error} loading={loading} />
    </>
  );
}

export default Favorites;
