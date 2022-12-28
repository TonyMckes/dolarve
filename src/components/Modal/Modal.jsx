import CurIcon from "components/CurIcon";
import CurSymbol from "components/CurSymbol";
import FavoriteButton from "components/FavoriteButton";
import LineChart from "components/LineChart";
import ModalContainer from "components/ModalContainer";
import TrendingIcon from "components/TrendingIcon";
import { urlPath } from "constants";
import useCurrency from "hooks/useCurrency";
import useTitle from "hooks/useTitle";
import { Link } from "react-router-dom";
import { formatCur } from "utils";

function Modal() {
  const { data, error, loading } = useCurrency();
  const { _id, currency, name, price, price24h, prices, slug, type, icon } =
    data || {};

  const href = `/${urlPath[type]}/${slug || _id}`;

  useTitle(`${name} - DólarVE`);

  const bgColor =
    price24h < price
      ? "bg-gradient-to-t from-green-400 via-transparent"
      : price24h > price
      ? "bg-gradient-to-t from-red-400 via-transparent"
      : "bg-gradient-to-t from-neutral-450 via-transparent";

  return (
    <ModalContainer price={price} price24h={price24h} isLoading={loading}>
      <div className={` p-4 space-y-2 ${bgColor}`}>
        <div className="flex items-center space-x-2 divide-slate-900 ">
          <CurIcon name={name} icon={icon} size="14" />
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold tracking-tighter">{name}</h3>
            <div className="grow">
              <TrendingIcon price={price} price24h={price24h} />{" "}
              <CurSymbol size="xs" symbol={currency} />
            </div>
          </div>
        </div>
        <LineChart
          currencyCode={currency}
          prices={prices}
          price={price}
          price24h={price24h}
        />
        <div className="mx-2 text-4xl font-medium text-right ">
          {formatCur(price, currency)}
        </div>
        <div className="flex justify-around !mt-6 !mb-2">
          <FavoriteButton _id={_id} size="10" variant />
          <Link
            className="px-4 py-2 text-base shadow-lg rounded-xl whitespace-nowrap bg-neutral-100 hover:bg-neutral-100/75 dark:bg-neutral-800 dark:hover:bg-neutral-800/75 ring-1 ring-neutral-450"
            state={{ details: data }}
            to={href}
          >
            Ver mas detalles
          </Link>
        </div>
      </div>
    </ModalContainer>
  );
}

export default Modal;
