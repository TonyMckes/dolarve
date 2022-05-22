import CurIcon from "components/CurIcon";
import CurName from "components/CurName";
import CurPrice from "components/CurPrice";
import CurSymbol from "components/CurSymbol";
import FavoriteButton from "components/FavoriteButton";
import LoadingSpinner from "components/LoadingSpinner";
import ModalContainer from "components/ModalContainer";
import TableList from "components/TableList";
import TrendingIcon from "components/TrendingIcon";
import useCurrency from "hooks/useCurrency";
import DetailsButton from "./DetailsButton";

function Modal() {
  const { data, error, loading } = useCurrency();
  const {
    _id,
    currency,
    icon,
    name,
    price,
    price24h,
    prices,
    slug,
    symbol,
    type,
  } = data || {};

  const bgColor =
    price24h < price
      ? "bg-gradient-to-b from-green-400"
      : price24h > price
      ? "bg-gradient-to-b from-red-400"
      : "bg-gradient-to-b from-neutral-450";

  return !loading ? (
    <ModalContainer>
      <div className={`${bgColor}`}>
        <div className="flex items-center justify-between gap-2 p-2 border-b border-neutral-450 text-neutral-700 ">
          <CurIcon name={name} icon={icon} size="14" />
          <div className="flex flex-col grow ">
            <div className="tracking-tighter ">
              <CurName name={name} size="lg" weight="bold" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <TrendingIcon price={price} price24h={price24h} />
                <CurSymbol darker size="xs" symbol={symbol} />
              </div>
              <CurPrice currency={currency} price={price} size="lg" />
            </div>
          </div>
        </div>

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
