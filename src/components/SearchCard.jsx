import SearchBar from "components/SearchBar";
import SearchResults from "components/SearchResults";
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
      <SearchResults results={searchResults} />
    </>
  );
}

export default SearchCard;
