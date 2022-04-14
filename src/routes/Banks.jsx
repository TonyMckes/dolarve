import CurrencyList from "components/CurrencyList";
import useCurrencies from "hooks/useCurrencies";

function TasasDeBancos() {
  const { curList, loading } = useCurrencies("bancove");

  return (
    <>
      <CurrencyList currencies={curList} loading={loading} />
    </>
  );
}

export default TasasDeBancos;
