import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useCurrencies } from "../../context/CurrenciesContextProvider";
import SearchBar from "../SearchBar";
import SearchResults from "../SearchResults";
import Sidebar from "../Sidebar";
import SidebarCard from "../SidebarCard";
import List from "./List";
import ListSkeleton from "./ListSkeleton";

function CurrencyList({ currencies, loading }) {
  const [filteredCur, setFilteredCur] = useState(currencies);

  useEffect(() => {
    setFilteredCur(currencies);
  }, [currencies]);

  const handleFilter = (curr) => {
    setFilteredCur(curr);
  };

  return (
    <>
      {/* TODO: Refactor SearchBar 
      <SearchBar
        currencies={currencies}
        placeholder="Filtrar lista..."
        onFilterCur={handleFilter}
        variant
      /> */}

      {loading ? (
        <ListSkeleton />
      ) : currencies.length > 0 ? (
        <List filteredCur={filteredCur} />
      ) : (
        <div className="flex flex-col items-center justify-center h-screen text-xl">
          Nothing over here...
        </div>
      )}
    </>
  );
}

export default CurrencyList;
