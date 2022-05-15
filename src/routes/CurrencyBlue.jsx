import CurrencyList from "components/CurrencyList";
import useCurrencies from "hooks/useCurrencies";

function CurrencyBlue() {
  const { curList, error, loading } = useCurrencies("currencyBlue");

  return (
    <>
      <CurrencyList currencies={curList} error={error} loading={loading} />
    </>
  );
}

export default CurrencyBlue;
