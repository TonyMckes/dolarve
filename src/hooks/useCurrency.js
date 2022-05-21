import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import getCurrency from "services/getCurrency";

function useCurrency(gap = "1w") {
  const { state } = useLocation();
  const { details } = state || {};
  const [data, setData] = useState(details || {});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    if (details?.prices && !gap) return;

    setLoading(true);

    getCurrency({ gap, slug })
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [details?.prices, gap, slug]);

  return { data, error, loading };
}

export default useCurrency;
