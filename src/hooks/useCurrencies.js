import { useEffect, useState } from "react";
import fetchCurrencies from "../services/fetchCurrencies";

function useCurrencies(curType) {
  const [curList, setCurList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCurrencies(curType)
      .then(setCurList)
      .then(() => setLoading(false))
      .catch((error) => console.error(error));
  }, []);

  return { curList, loading };
}

export default useCurrencies;
