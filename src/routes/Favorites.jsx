import CurrencyList from "components/CurrencyList";
import SearchCard from "components/SearchCard";
import Sidebar from "components/Sidebar";
import SidebarCard from "components/SidebarCard";
import useCurrencies from "hooks/useCurrencies";
import { useEffect, useState } from "react";

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
