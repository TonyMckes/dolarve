import CurIcon from "components/CurIcon";
import CurName from "components/CurName";
import { FavoriteButton } from "components/FavoriteButton";
import LineChart from "components/LineChart";
import TableList from "components/TableList";
import TrendingIcon from "components/TrendingIcon";
import { useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { DetailsButton } from "./DetailsButton";

function Modal({ modal }) {
  const {
    data,
    data: { icon, name, prices, _id, price, price24h, currency },
    setModal,
    show: showing,
  } = modal;

  useEffect(() => {
    if (showing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => (document.body.style.overflow = "unset");
  }, [showing]);

  const bgColor =
    price24h <= price
      ? "bg-gradient-to-b from-green-300 "
      : "bg-gradient-to-b from-red-200 ";

  function closeHandler(e) {
    e.stopPropagation();

    if (e.currentTarget !== e.target) return;

    setModal({ ...modal, show: false });
  }

  return (
    showing && (
      <div
        className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-black bg-opacity-25 dark:bg-opacity-50 background-window"
        onClick={closeHandler}
      >
        <div className="w-4/5 p-4 text-sm bg-white rounded-lg dark:bg-neutral-800 md:max-w-md history-window">
          <div className="flex flex-row-reverse mb-2">
            <button
              className="outline-none drop-shadow-lg"
              onClick={closeHandler}
            >
              <AiOutlineCloseCircle className="w-6 h-6" pointerEvents="none" />
            </button>
          </div>

          <div
            className={`border border-neutral-300 dark:border-neutral-700 rounded-lg window-container ${bgColor}`}
          >
            <div className="flex items-center p-2 border-b-2">
              <CurIcon name={name} icon={icon} size="14" />
              <CurName name={name} size="lg" weight="bold" custom="mx-2" />
              <TrendingIcon price={price} price24h={price24h} />
            </div>

            <div className="px-2  mx-2 my-4">
              <p className="dark:text-gray-800">
                Precio del {name} de la semana en Venezuela
              </p>
            </div>

            <TableList prices={prices} currency={currency} />

            <div className="px-2 pt-2">
              <LineChart currencyCode={currency} data={data} />
            </div>
          </div>

          <div className="flex justify-around m-4">
            <FavoriteButton _id={_id} size="9" />
            <DetailsButton modal={modal} setModal={setModal} />
          </div>
        </div>
      </div>
    )
  );
}

export default Modal;
