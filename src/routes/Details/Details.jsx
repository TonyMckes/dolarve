import CurHeader from "components/CurHeader";
import CurIcon from "components/CurIcon";
import DetailsContainer from "components/Details/DetailsContainer";
import DiscoverOthers from "components/Details/DiscoverOthers";
import GapSelector from "components/Details/GapSelector";
import LineChart from "components/LineChart";
import LoadingSpinner from "components/LoadingSpinner";
import SearchCard from "components/SearchCard";
import Sidebar from "components/Sidebar";
import SidebarCard from "components/SidebarCard";
import TableList from "components/TableList";
import useCurrency from "hooks/useCurrency";
import useTitle from "hooks/useTitle";
import { useState } from "react";
import { useParams } from "react-router-dom";
import formatDateAndTime from "utils/formatDateAndTime";

function Details() {
  const [gap, setGap] = useState("1w");
  const { data, error, loading } = useCurrency(gap);
  const { _id, currency, icon, name, prices, slug, updatedAt } = data || {};

  const params = useParams();
  const loadingScreen = (slug || _id) !== params.slug;

  useTitle(`${name} - DolarVE`);

  const gapHandler = (gap) => {
    setGap(gap);
  };

  return (
    <>
      <LoadingSpinner loading={loadingScreen} />

      {name && (
        <div className="self-start w-full p-2 mt-12 space-y-2 text-sm md:px-0 md:col-start-2 md:mx-auto md:mt-0">
          <div className="float-left mt-2 align-middle md:hidden">
            <CurIcon name={name} icon={icon} size="14" />
          </div>
          <div className="sticky top-0 z-10 transition-colors duration-500 md:rounded-b-lg md:pt-5 md:bg-white md:dark:bg-neutral-900">
            <CurHeader {...data} />
          </div>

          <DetailsContainer>
            <p className="py-2 pt-4 text-xs text-right">
              Ultima vez actualizado el {formatDateAndTime(updatedAt)}
            </p>

            <LineChart currencyCode={currency} prices={prices} />
          </DetailsContainer>

          <DetailsContainer>
            <GapSelector gap={gap} handler={gapHandler} loading={loading} />

            <TableList currency={currency} prices={prices} rounded />
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
