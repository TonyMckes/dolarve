import SearchBar from "components/SearchBar";
import { useEffect, useState } from "react";
import List from "./List";
import ListSkeleton from "./ListSkeleton";

function CurrencyList({ currencies, error, loading }) {
  const [filteredCur, setFilteredCur] = useState(currencies);

  useEffect(() => {
    setFilteredCur(currencies);
  }, [currencies]);

  const handleFilter = (curr) => {
    setFilteredCur(curr);
  };

  return (
    <>
      <SearchBar
        currencies={currencies}
        placeholder="Filtrar lista..."
        onFilterCur={handleFilter}
        variant
      />

      {loading ? (
        <ListSkeleton />
      ) : currencies.length > 0 ? (
        <List filteredCur={filteredCur} />
      ) : (
        <div className="flex flex-col items-center justify-center h-screen text-xl md:col-start-2">
          {error || <p>No hay divisas para mostrar...</p>}
        </div>
      )}
    </>
  );
}

export default CurrencyList;
