import { useState } from "react";
import { useCurrenciesContext } from "../context/CurrenciesContext";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

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
