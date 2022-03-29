import axios from "axios";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Currencies from "../components/CurrencyList";

function Criptomonedas() {
  const { setCurList, setLoading, curInput, setCurInput } = useOutletContext();

  useEffect(() => {
    try {
      (async () => {
        setLoading(true);

        const res = await axios.get(
          `https://exchange.vcoud.com/coins/latest?type=cripto`,
        );

        setCurList(res.data);
        // setCurInput({ ...curInput, code: "USD" });
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
export default Criptomonedas;
