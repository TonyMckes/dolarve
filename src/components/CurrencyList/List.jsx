import axios from "axios";
import { useOutletContext } from "react-router-dom";
import { FavoriteButton } from "../FavoriteButton";
import { Logo } from "./Logo";
import { Prices } from "./Prices";
import { Title } from "./Title";

export default function List({ filteredCur }) {
  const { modal, setModal } = useOutletContext();

  async function handleClick(id) {
    try {
      setModal({ ...modal, spinner: true });

      const res = await axios.get(
        `https://exchange.vcoud.com/coins/${id}?gap=1w&base=usd`,
      );

      setModal({ data: res.data, show: true, spinner: false });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div
        className={`md:px-4 md:border dark:border-neutral-700 rounded-lg dark:bg-neutral-800 md:dark:bg-inherit  transition-all dark:text-gray-100 md:col-start-2 w-full self-start md:mx-auto table text-sm mt-6 md:mt-0`}
      >
        <div className="table-row-group ">
          {filteredCur.map((curr) => {
            const bgColor =
              curr.price24h < curr.price
                ? "bg-gradient-to-l from-green-300 dark:from-green-400 via-transparent"
                : curr.price24h === curr.price
                ? "bg-white dark:bg-neutral-800"
                : "bg-gradient-to-l from-red-300 dark:from-red-400 via-transparent";

            return (
              <div
                className={`table-row md:hover:scale-105 transition-all cursor-pointer ${bgColor}`}
                key={curr._id}
                onClick={() => handleClick(curr._id)}
              >
                <div className="table-cell w-10 align-middle border-y dark:border-neutral-700 ">
                  <Logo {...curr} />
                </div>

                <div className="table-cell align-middle border-y dark:border-neutral-700 ">
                  <Title {...curr} />
                </div>

                <div className="table-cell text-right align-middle border-y dark:border-neutral-700 ">
                  <Prices {...curr} />
                </div>

                <div className="table-cell w-5 text-center align-middle border-y dark:border-neutral-700 ">
                  <FavoriteButton _id={curr._id} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
