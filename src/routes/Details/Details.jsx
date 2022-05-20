import CurIcon from "components/CurIcon";
import CurName from "components/CurName";
import CurPrice from "components/CurPrice";
import DiscoverOthers from "components/Details/DiscoverOthers";
import GapSelector from "components/Details/GapSelector";
import LineChart from "components/LineChart";
import SearchCard from "components/SearchCard";
import Sidebar from "components/Sidebar";
import SidebarCard from "components/SidebarCard";
import TableList from "components/TableList";
import TrendingIcon from "components/TrendingIcon";
import useCurrency from "hooks/useCurrency";
import { useState } from "react";

function Details() {
  const [gap, setGap] = useState("1w");
  const { data, loading } = useCurrency(gap);
  const { currency, icon, name, price, price24h, prices } = data || {};

  const gapHandler = (gap) => {
    setGap(gap);
  };

  return (
    <>
      <div className="self-start w-full py-4 mt-12 space-y-4 text-sm md:col-start-2 md:mx-auto md:mt-0 ">
        <div className="p-4 space-y-2 border rounded-md border-neutral-450">
          <div className="flex items-center">
            <CurIcon icon={icon} name={name} size="16" />
            <CurName name={name} size="xl" weight="bold" custom="mx-2" />

            <div className="flex-1 text-right">
              <TrendingIcon price={price} price24h={price24h} />{" "}
              <CurPrice currency={currency} price={price} />
            </div>
          </div>

          {!loading && <LineChart currencyCode={currency} prices={prices} />}
        </div>
        {!loading && prices?.length > 0 ? (
          <div className="p-4 space-y-2 border rounded-md border-neutral-450">
            <GapSelector gap={gap} handler={gapHandler} loading={loading} />
            <div className="lg:col-start-2">
              <TableList variant prices={prices} currency={currency} />
            </div>
          </div>
        ) : (
          <div className="p-4 space-y-2 border rounded-md border-neutral-450">
            No hay muchos detalles sobre esta moneda
          </div>
        )}
      </div>

      <Sidebar>
        <SidebarCard title="Buscar...">
          <SearchCard />
        </SidebarCard>

        <SidebarCard title="Descubre otras...">
          <DiscoverOthers />
        </SidebarCard>
      </Sidebar>
    </>
  );
}

export default Details;
