import CurIcon from "components/CurIcon";
import CurName from "components/CurName";
import CurSymbol from "components/CurSymbol";
import FavoriteButton from "components/FavoriteButton";
import TrendingIcon from "components/TrendingIcon";
import { urlPath } from "constants";
import { useLocation, useNavigate } from "react-router-dom";
import Prices from "./Prices";

function ListRow({
  _id,
  currency,
  details,
  icon,
  name,
  price,
  price24h,
  slug,
  symbol,
  type,
  updatedAt,
}) {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

  const handleClick = (e) => {
    const path = "/"
      ? `/${urlPath[type]}/${slug || _id}`
      : `${pathname}/${slug || _id}`;

    navigate(path, { state: { backgroundLocation: location, details } });
  };

  const bgColor =
    price24h < price
      ? "bg-gradient-to-l from-green-400 via-transparent"
      : price24h > price
      ? "bg-gradient-to-l from-red-400  via-transparent"
      : "bg-gradient-to-l from-neutral-450  via-transparent";

  return (
    <div
      className={`table-row transition cursor-pointer divide-y divide-neutral-450 md:hover:scale-105 ${bgColor}`}
      onClick={handleClick}
    >
      <div className="table-cell w-0"></div>
      <div className="table-cell w-16 py-1 ">
        <CurIcon icon={icon} name={name} size="12" />
      </div>

      <div className="table-cell align-middle">
        <CurName name={name} size="sm" weight="medium" custom="truncate" />
        <TrendingIcon price={price} price24h={price24h} size="4" />
        <CurSymbol symbol={symbol} size="xs" />
      </div>

      <div className="table-cell w-32 text-right align-middle">
        <Prices
          currency={currency}
          price={price}
          price24h={price24h}
          updatedAt={updatedAt}
        />
      </div>

      <div className="table-cell w-6 text-center align-middle">
        <FavoriteButton _id={_id} size="5" />
      </div>
    </div>
  );
}

export default ListRow;
