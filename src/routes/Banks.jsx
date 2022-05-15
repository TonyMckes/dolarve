import CurrencyList from "components/CurrencyList";
import useCurrencies from "hooks/useCurrencies";

function TasasDeBancos() {
  const { curList, error, loading } = useCurrencies("bancove");

  return (
    <>
      <CurrencyList currencies={curList} error={error} loading={loading} />
    </>
  );
}

export default TasasDeBancos;
