import axios from "axios";
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
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function Details() {
  const { state } = useLocation();
  const [details, setDetails] = useState(state || {});
  const { name, icon, currency, price, price24h, prices = [] } = details;
  const { slug } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `https://exchange.vcoud.com/coins/${slug}?gap=${"1w"}&base=usd`,
        );
        setDetails(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [slug]);

  return (
    <>
      <div className="self-start w-full py-4 mt-12 space-y-4 text-sm md:col-start-2 md:mx-auto md:mt-0 ">
        <div className="p-4 space-y-2 border rounded-md dark:border-neutral-700">
          <div className="flex items-center">
            <CurIcon icon={icon} name={name} size="16" />
            <CurName name={name} size="xl" weight="bold" custom="mx-2" />

            <div className="flex-1 text-right">
              <TrendingIcon price={price} price24h={price24h} />{" "}
              <CurPrice currency={currency} price={price} />
            </div>
          </div>

          <LineChart currencyCode={currency} prices={prices} />
        </div>

        {prices.length > 0 ? (
          <div className="p-4 space-y-2 border rounded-md dark:border-neutral-700">
            <GapSelector {...{ details, setDetails, slug }} />
            <div className="lg:col-start-2">
              <TableList variant prices={prices} currency={currency} />
            </div>
          </div>
        ) : (
          <div className="p-4 space-y-2 border rounded-md dark:border-neutral-700">
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
