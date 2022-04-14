import CurrencyList from "components/CurrencyList";
import useCurrencies from "hooks/useCurrencies";

function Recursos() {
  const { curList, loading } = useCurrencies("petrooro");

  return (
    <>
      <CurrencyList currencies={curList} loading={loading} />
    </>
  );
}

export default Recursos;
