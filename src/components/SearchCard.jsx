import SearchBar from "components/SearchBar";
import SmallerCurrencyList from "components/SmallerCurrencyList";
import { useCurrenciesContext } from "context/CurrenciesContext";
import { useState } from "react";

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
      <SmallerCurrencyList currencies={searchResults} />
    </>
  );
}

export default SearchCard;
