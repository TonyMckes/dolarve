import axios from "axios";
import CurIcon from "components/CurIcon";
import CurName from "components/CurName";
import CurSymbol from "components/CurSymbol";
import FavoriteButton from "components/FavoriteButton";
import TrendingIcon from "components/TrendingIcon";
import { API_URL } from "constants";
import { useOutletContext } from "react-router-dom";
import Prices from "./Prices";

function ListRow({ _id, currency, icon, name, price, price24h, symbol, updatedAt }) {
  const setModal = useOutletContext();

  const handleClick = async (id) => {
    try {
      setModal((prev) => ({ ...prev, spinner: true }));

      const { data } = await axios(`${API_URL}/coins/${id}?gap=1w&base=usd`);

      setModal({ data, showing: true, spinner: false });
    } catch (error) {
      console.error(error);
    }
  };

  const bgColor =
    price24h < price
      ? "bg-gradient-to-l from-green-400 via-transparent"
      : price24h > price
      ? "bg-gradient-to-l from-red-400  via-transparent"
      : "bg-gradient-to-l from-neutral-450  via-transparent";

  return (
    <div
      className={`table-row transition cursor-pointer md:hover:scale-105 ${bgColor}`}
      onClick={() => handleClick(_id)}
    >
      <div className="table-cell w-10 text-center align-middle border-y border-neutral-450">
        <CurIcon icon={icon} name={name} />
      </div>

      <div className="table-cell align-middle border-y border-neutral-450">
        <CurName name={name} size="sm" weight="medium" />
        <TrendingIcon price={price} price24h={price24h} size="4" />
        <CurSymbol symbol={symbol} size="xs" />
      </div>

      <div className="table-cell w-32 text-right align-middle border-y border-neutral-450">
        <Prices currency={currency} price={price} price24h={price24h} updatedAt={updatedAt} />
      </div>

      <div className="table-cell w-6 text-center align-middle border-y border-neutral-450">
        <FavoriteButton _id={_id} size="5" />
      </div>
    </div>
  );
}

export default ListRow;
