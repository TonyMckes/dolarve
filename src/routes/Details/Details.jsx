import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { DiscoverOthers } from "../../components/Details/DiscoverOthers";
import GapSelector from "../../components/Details/GapSelector";
import LineChart from "../../components/LineChart";
import { Logo } from "../../components/Logo";
import TableList from "../../components/TableList";
import { Title } from "../../components/Title";
import SearchBar from "../../components/SearchBar";
import SearchResults from "../../components/SearchResults";
import Sidebar from "../../components/Sidebar";
import SidebarCard from "../../components/SidebarCard";
import { useCurrencies } from "../../context/CurrenciesContextProvider";
import { formatCur } from "../../utils/utils";

export default function Details() {
  const { allCurrencies } = useCurrencies();

  const [details, setDetails] = useState({});

  const [searchResults, setSearchResults] = useState([]);

  const { slug } = useParams();

  const {
    base,
    createdAt,
    currency,
    icon,
    name,
    price,
    price24h,
    prices = [],
    symbol,
    type,
    updatedAt,
  } = details;

  const { pathname } = useLocation();

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
        <div className="space-y-4 py-4 self-start w-full md:col-start-2 mt-12 text-sm md:mx-auto md:mt-0 ">
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
              <LineChart data={{ prices }} />
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
          <SearchBar
            currencyList={allCurrencies}
            setFilteredCurrency={setSearchResults}
          />
          <SearchResults results={searchResults} />
        </SidebarCard>

        <SidebarCard title="Descubre otras...">
          <DiscoverOthers />
        </SidebarCard>
      </Sidebar>
    </>
  );
}
