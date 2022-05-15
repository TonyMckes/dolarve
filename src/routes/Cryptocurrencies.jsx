import CurrencyList from "components/CurrencyList";
import useCurrencies from "hooks/useCurrencies";

function Criptomonedas() {
  const { curList, error, loading } = useCurrencies("cripto");

  return (
    <>
      <CurrencyList currencies={curList} error={error} loading={loading} />
    </>
  );
}
export default Criptomonedas;
