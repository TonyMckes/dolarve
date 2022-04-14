import CurrencyList from "../components/CurrencyList";
import useCurrencies from "../hooks/useCurrencies";

function CurrencyBlue() {
  const { curList, loading } = useCurrencies("currencyBlue");

  return (
    <>
      <CurrencyList currencies={curList} loading={loading} />
    </>
  );
}

export default CurrencyBlue;
