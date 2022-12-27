import Anchor from "components/Anchor";
import CurHeader from "components/CurHeader";
import FavoriteButton from "components/FavoriteButton";
import ModalContainer from "components/ModalContainer";
import TableList from "components/TableList";
import { urlPath } from "constants";
import useCurrency from "hooks/useCurrency";
import useTitle from "hooks/useTitle";

function Modal() {
  const { data, error, loading } = useCurrency();
  const { _id, currency, name, price, price24h, prices, slug, type } =
    data || {};

  const href = `/${urlPath[type]}/${slug || _id}`;

  useTitle(`${name} - DólarVE`);

  const bgColor =
    price24h < price
      ? "bg-gradient-to-b from-green-400"
      : price24h > price
      ? "bg-gradient-to-b from-red-400"
      : "bg-gradient-to-b from-neutral-450";

  return (
    <ModalContainer isLoading={loading}>
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

          <Anchor
            href={href}
            state={{ details: data }}
            text="Ver mas detalles"
          />
        </div>
      </div>
    </ModalContainer>
  );
}

export default Modal;
