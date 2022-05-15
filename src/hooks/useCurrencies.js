import { useEffect, useState } from "react";
import fetchCurrencies from "services/fetchCurrencies";

function useCurrencies(curType) {
  const [curList, setCurList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCurrencies(curType)
      .then(setCurList)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { curList, error, loading };
}

export default useCurrencies;
