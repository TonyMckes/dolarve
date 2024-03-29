import CurrencyList from "components/CurrencyList";
import useCurrencies from "hooks/useCurrencies";

function Currency() {
  const { curList, error, loading } = useCurrencies("currency");

  return (
    <>
      <CurrencyList currencies={curList} error={error} loading={loading} />
    </>
  );
}

export default Currency;
