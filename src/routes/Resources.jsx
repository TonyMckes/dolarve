import CurrencyList from "components/CurrencyList";
import useCurrencies from "hooks/useCurrencies";

function Resources() {
  const { curList, error, loading } = useCurrencies("petrooro");

  return (
    <>
      <CurrencyList currencies={curList} error={error} loading={loading} />
    </>
  );
}

export default Resources;
