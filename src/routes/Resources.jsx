import axios from "axios";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Currencies from "../components/CurrencyList";

function Recursos() {
  const { setCurList, setLoading } = useOutletContext();

  useEffect(() => {
    try {
      (async () => {
        setLoading(true);

        const res = await axios.get(
          `https://exchange.vcoud.com/coins/latest?type=petrooro`,
        );

        setCurList(res.data);
        setLoading(false);
      })();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  return (
    <>
      <Currencies />
    </>
  );
}

export default Recursos;
