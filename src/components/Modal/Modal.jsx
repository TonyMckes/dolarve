import CurHeader from "components/CurHeader";
import FavoriteButton from "components/FavoriteButton";
import LoadingSpinner from "components/LoadingSpinner";
import ModalContainer from "components/ModalContainer";
import TableList from "components/TableList";
import useCurrency from "hooks/useCurrency";
import DetailsButton from "./DetailsButton";

function Modal() {
  const { data, error, loading } = useCurrency();
  const { _id, currency, name, price, price24h, prices, slug, type } =
    data || {};

  const bgColor =
    price24h < price
      ? "bg-gradient-to-b from-green-400"
      : price24h > price
      ? "bg-gradient-to-b from-red-400"
      : "bg-gradient-to-b from-neutral-450";

  return !loading ? (
    <ModalContainer>
      <div className={`${bgColor}`}>
        <CurHeader {...data} modal />

        <div className="px-2 mx-2 my-4">
          <p className="dark:text-gray-800">
            Precio de {name} de la semana en Venezuela
          </p>
        </div>

        <TableList prices={prices} currency={currency} />

        <div className="flex justify-around m-4">
          <FavoriteButton _id={_id} size="9" variant />
          <DetailsButton _id={_id} details={data} slug={slug} type={type} />
        </div>
      </div>
    </ModalContainer>
  ) : (
    <LoadingSpinner loading={loading} />
  );
}

export default Modal;
