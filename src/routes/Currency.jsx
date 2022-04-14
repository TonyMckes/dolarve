import CurrencyList from "../components/CurrencyList";
import useCurrencies from "../hooks/useCurrencies";

function Currency() {
  const { curList, loading } = useCurrencies("currency");

  return (
    <>
      <CurrencyList currencies={curList} loading={loading} />
    </>
  );
}

export default Currency;
