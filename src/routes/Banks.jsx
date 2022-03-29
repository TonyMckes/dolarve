import axios from "axios";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Currencies from "../components/CurrencyList";

function TasasDeBancos() {
  const { setCurList, setLoading } = useOutletContext();

  useEffect(() => {
    try {
      (async () => {
        setLoading(true);

        const res = await axios.get(
          `https://exchange.vcoud.com/coins/latest?type=bancove`,
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

      {/* <Inputs /> */}
    </>
  );
}

export default TasasDeBancos;
