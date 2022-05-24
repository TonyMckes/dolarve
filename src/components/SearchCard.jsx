import SearchBar from "components/SearchBar";
import SmallerCurrencyList from "components/SmallerCurrencyList";
import { useCurrenciesContext } from "context/CurrenciesContext";
import { memo, useState } from "react";

function SearchCard() {
  const [searchResults, setSearchResults] = useState([]);
  const { currencies } = useCurrenciesContext();

  return (
    <>
      <SearchBar
        currencies={currencies}
        onFilterCur={setSearchResults}
        placeholder="Buscar..."
      />

      <div className="relative bg-neutral-450 ">
        <div className="absolute w-full -translate-y-3 rounded-lg dark:bg-neutral-800">
          <SmallerCurrencyList currencies={searchResults} />
        </div>
      </div>
    </>
  );
}

export default memo(SearchCard);
