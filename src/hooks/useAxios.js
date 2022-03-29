import axios from "axios";
import { useEffect, useState } from "react";

export default function useAxios({ url, method, dep }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios({
          url: url,
          method: method,
          baseURL: "https://exchange.vcoud.com/coins/",
        });

        setData(res.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [url, method, dep]);

  return { data: data, error: error, loading: loading };
}
