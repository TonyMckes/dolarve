import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { DiscoverOthers } from "../../components/Details/DiscoverOthers";
import GapSelector from "../../components/Details/GapSelector";
import LineChart from "../../components/LineChart";
import { Logo } from "../../components/Logo";
import SearchCard from "../../components/SearchCurrenciesCard";
import Sidebar from "../../components/Sidebar";
import SidebarCard from "../../components/SidebarCard";
import { useCurrencies } from "../../context/CurrenciesContextProvider";
import { formatCur } from "../../utils";

export default function Details() {
  const [details, setDetails] = useState({});
  const { currency, price, prices = [] } = details;
  const { pathname } = useLocation();
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
  }, [pathname]);

  return (
    <>
      {prices.length > 0 && (
        <div className="self-start w-full py-4 mt-12 space-y-4 text-sm md:col-start-2 md:mx-auto md:mt-0 ">
          <div className="p-4 space-y-2 border rounded-md dark:border-neutral-700">
            <div className="flex items-center">
              <Logo {...details} />

              <Title data={details} variant />
              <div className="flex-1 text-right">
                <span className="md:text-xl ">
                  {formatCur(price, currency)}
                </span>
              </div>
            </div>

            <div className="">
              <LineChart currencyCode={currency} data={{ prices }} />
            </div>
          </div>

          <div className="p-4 space-y-2 border rounded-md dark:border-neutral-700">
            <GapSelector {...{ details, setDetails, slug }} />
            <div className="lg:col-start-2">
              <TableList variant prices={prices} currency={currency} />
            </div>
          </div>
        </div>
      )}

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
