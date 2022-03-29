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
      {loading ? (
        <ListSkeleton />
      ) : curList.length > 0 ? (
        <List />
      ) : (
        <div className="text-xl flex flex-col items-center justify-center h-screen">
          Nothing over here...
        </div>
      )}

      <Sidebar>
        <SidebarCard title="Busca monedas...">
          <SearchBar
            currencies={allCurrencies}
            setFilteredCur={setSearchResults}
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
