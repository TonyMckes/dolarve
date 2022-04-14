import { FavoriteButton } from "components/FavoriteButton";
import LineChart from "components/LineChart";
import { Logo } from "components/Logo";
import TableList from "components/TableList";
import { Title } from "components/Title";
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
          <div className=""></div>
          <div
            className={`p-1 border border-neutral-300 dark:border-neutral-700 rounded-lg window-container ${bgColor}`}
          >
            <div className="flex items-center border-b-2">
              <Logo icon={icon} name={name} />
              <Title data={data} />
            </div>

            <div className="mx-2 my-4">
              <p className="dark:text-gray-800">
                Precio del {name} de la semana en Venezuela
              </p>
            </div>

            <TableList prices={prices} currency={currency} />

            <LineChart currencyCode={currency} data={data} />
          </div>

          <div className="flex justify-around m-4">
            <FavoriteButton _id={_id} />
            <DetailsButton modal={modal} setModal={setModal} />
          </div>
        </div>
      </div>
    )
  );
}

export default Modal;
