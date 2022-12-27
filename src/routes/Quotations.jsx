import CurrencyList from "components/CurrencyList";
import useCurrencies from "hooks/useCurrencies";

function Quotations() {
  const { curList, error, loading } = useCurrencies("bolivar");

  return (
    <>
      <CurrencyList currencies={curList} error={error} loading={loading} />
    </>
  );
}

export default Quotations;
