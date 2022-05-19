import CurrencyList from "components/CurrencyList";
import SearchCard from "components/SearchCard";
import Sidebar from "components/Sidebar";
import SidebarCard from "components/SidebarCard";
import useCurrencies from "hooks/useCurrencies";

function Quotations() {
  const { curList, error, loading } = useCurrencies("bolivar");

  return (
    <>
      <CurrencyList currencies={curList} error={error} loading={loading} />

      <Sidebar>
        <SidebarCard title="Buscar...">
          <SearchCard />
        </SidebarCard>
      </Sidebar>
    </>
  );
}

export default Quotations;
