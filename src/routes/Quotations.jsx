import CurrencyList from "components/CurrencyList";
import useCurrencies from "hooks/useCurrencies";

function Cotizaciones() {
  const { loading, curList } = useCurrencies("bolivar");

  return (
    <>
      <CurrencyList currencies={curList} loading={loading} />
    </>
  );
}

export default Cotizaciones;
