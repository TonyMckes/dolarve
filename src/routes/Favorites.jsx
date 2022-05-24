import CurrencyList from "components/CurrencyList";
import SearchCard from "components/SearchCard";
import Sidebar from "components/Sidebar";
import SidebarCard from "components/SidebarCard";
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

      <Sidebar>
        <SidebarCard title="Buscar...">
          <SearchCard />
        </SidebarCard>

        <SidebarCard title="Tips...">
          <p>Agrega favoritos para verlos en un solo lugar</p>
        </SidebarCard>
      </Sidebar>
    </>
  );
}

export default Favorites;
