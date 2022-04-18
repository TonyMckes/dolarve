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
    ? "bg-gradient-to-l from-green-300 dark:from-green-400 via-transparent"
    : price24h > price
    ? "bg-gradient-to-l from-red-300 dark:from-red-400 via-transparent"
    : "bg-white dark:bg-neutral-800";
    
  return (
    <div
      className={`table-row transition-all cursor-pointer md:hover:scale-105 ${bgColor}`}
      onClick={() => handleClick(_id)}
    >
      <div className="table-cell w-10 align-middle border-y dark:border-neutral-700 ">
        <CurIcon icon={icon} name={name} />
      </div>

      <div className="table-cell align-middle border-y dark:border-neutral-700 ">
        <TrendingIcon price={price} price24h={price24h} size="4" />{" "}
        <CurName name={name} size="sm" weight="medium" />{" "}
        <CurSymbol symbol={symbol} size="xs" />
      </div>

      <div className="table-cell text-right align-middle border-y dark:border-neutral-700 ">
        <Prices currency={currency} price={price} price24h={price24h} updatedAt={updatedAt} />
      </div>

      <div className="table-cell w-5 text-center align-middle border-y dark:border-neutral-700 ">
        <FavoriteButton _id={_id} size="5" />
      </div>
    </div>
  );
}

export default ListRow;
