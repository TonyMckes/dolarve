import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useCurrencies } from "../../context/CurrenciesContextProvider";
import SearchBar from "../SearchBar";
import SearchResults from "../SearchResults";
import Sidebar from "../Sidebar";
import SidebarCard from "../SidebarCard";
import List from "./List";
import ListSkeleton from "./ListSkeleton";

export default function Currencies() {
  const [searchResults, setSearchResults] = useState([]);
  const { curList, loading, setFilteredCur } = useOutletContext();
  const { allCurrencies } = useCurrencies();

  useEffect(() => {
    setFilteredCur(curList);
  }, [curList]);

  return (
    <>
      <SearchBar
        currencies={curList}
        placeholder="Filtrar lista..."
        setFilteredCur={setFilteredCur}
        variant
      />
      {loading ? (
        <ListSkeleton />
      ) : curList.length > 0 ? (
        <List />
      ) : (
        <div className="flex flex-col items-center justify-center h-screen text-xl">
          Nothing over here...
        </div>
      )}

      <Sidebar>
        <SidebarCard title="Busca monedas...">
          <SearchBar
            currencies={allCurrencies}
            setFilteredCur={setSearchResults}
            placeholder="Buscar..."
          />
          <SearchResults results={searchResults} />
        </SidebarCard>

        <SidebarCard title="Tips...">
          <p>Agrega favoritos para verlos al inicio!</p>
        </SidebarCard>
      </Sidebar>
    </>
  );
}
