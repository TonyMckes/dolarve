import CurrencyList from "components/CurrencyList";
import useCurrencies from "hooks/useCurrencies";

function Recursos() {
  const { curList, error, loading } = useCurrencies("petrooro");

  return (
    <>
      <CurrencyList currencies={curList} error={error} loading={loading} />
    </>
  );
}

export default Recursos;
