import CurIcon from "components/CurIcon";
import CurName from "components/CurName";
import CurPrice from "components/CurPrice";
import CurSymbol from "components/CurSymbol";
import DetailsContainer from "components/Details/DetailsContainer";
import DiscoverOthers from "components/Details/DiscoverOthers";
import GapSelector from "components/Details/GapSelector";
import LineChart from "components/LineChart";
import LoadingSpinner from "components/LoadingSpinner";
import SearchCard from "components/SearchCard";
import Sidebar from "components/Sidebar";
import SidebarCard from "components/SidebarCard";
import TableList from "components/TableList";
import TrendingIcon from "components/TrendingIcon";
import useCurrency from "hooks/useCurrency";
import { useState } from "react";
import { useParams } from "react-router-dom";
import formatDateAndTime from "utils/formatDateAndTime";

function Details() {
  const [gap, setGap] = useState("1w");
  const { data, error, loading } = useCurrency(gap);
  const {
    _id,
    currency,
    icon,
    name,
    price,
    price24h,
    prices,
    slug,
    symbol,
    updatedAt,
  } = data || {};

  const params = useParams();
  const loadingScreen = (slug || _id) !== params.slug;

  const gapHandler = (gap) => {
    setGap(gap);
  };

  return (
    <>
      <LoadingSpinner loading={loadingScreen} />

      {name && (
        <div className="self-start w-full p-2 space-y-2 text-sm md:py-4 md:px-0 mt-14 md:col-start-2 md:mx-auto md:mt-0 ">
          <DetailsContainer>
            <div className="flex items-center">
              <CurIcon icon={icon} name={name} size="16" />
              <div className="ml-2 truncate whitespace-normal">
                <CurName name={name} size="xl" weight="bold" />
                <TrendingIcon price={price} price24h={price24h} />{" "}
                <CurSymbol symbol={symbol} size="xs" />
              </div>

              <div className="flex-1 text-right">
                <CurPrice currency={currency} price={price} />
              </div>
            </div>

            <p className="py-2 pt-4 text-xs text-right">
              Ultima vez actualizado el {formatDateAndTime(updatedAt)}
            </p>

            <LineChart currencyCode={currency} prices={prices} />
          </DetailsContainer>

          <DetailsContainer>
            <GapSelector gap={gap} handler={gapHandler} loading={loading} />

            <TableList variant prices={prices} currency={currency} />
          </DetailsContainer>
        </div>
      )}

      <Sidebar>
        <SidebarCard title="Buscar monedas...">
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
