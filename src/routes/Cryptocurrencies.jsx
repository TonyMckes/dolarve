import CurrencyList from "../components/CurrencyList";
import useCurrencies from "../hooks/useCurrencies";

function Criptomonedas() {
  const { curList, loading } = useCurrencies("cripto");

  return (
    <>
      <CurrencyList currencies={curList} loading={loading} />
    </>
  );
}
export default Criptomonedas;
