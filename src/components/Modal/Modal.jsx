import CurIcon from "components/CurIcon";
import CurName from "components/CurName";
import CurPrice from "components/CurPrice";
import FavoriteButton from "components/FavoriteButton";
import LineChart from "components/LineChart";
import ModalContainer from "components/ModalContainer";
import TableList from "components/TableList";
import TrendingIcon from "components/TrendingIcon";
import useCurrency from "hooks/useCurrency";
import DetailsButton from "./DetailsButton";

function Modal() {
  const { data, loading } = useCurrency();
  const { _id, currency, icon, name, price, price24h, prices, slug, type } =
    data || {};

  const bgColor =
    price24h <= price
      ? "bg-gradient-to-b from-green-300 "
      : "bg-gradient-to-b from-red-200 ";

  return (
    <ModalContainer>
      <div className={`${bgColor}`}>
        <div className="flex items-center p-2 border-b-2">
          <CurIcon name={name} icon={icon} size="14" />
          <CurName name={name} size="lg" weight="bold" custom="mx-2" />
          <TrendingIcon price={price} price24h={price24h} />
          <CurPrice currency={currency} price={price} />
        </div>
        {!loading && prices?.length > 0 ? (
          <>
            <div className="px-2 mx-2 my-4">
              <p className="dark:text-gray-800">
                Precio de {name} de la semana en Venezuela
              </p>
            </div>
            <TableList prices={prices} currency={currency} />
            <div className="px-2 pt-2">
              <LineChart currencyCode={currency} prices={prices} />
            </div>
          </>
        ) : (
          <div className="p-4 space-y-2 border rounded-md dark:border-neutral-700">
            No hay muchos detalles sobre esta moneda
          </div>
        )}
        <div className="flex justify-around m-4">
          <FavoriteButton _id={_id} size="9" variant />
          <DetailsButton _id={_id} details={data} slug={slug} type={type} />
        </div>
      </div>
    </ModalContainer>
  );
}

export default Modal;
