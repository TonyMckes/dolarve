import { formatCur, diffPrice, formatTime } from "../../utils/utils";

export function Prices({ price24h, price, currency, updatedAt }) {
  return (
    <>
      <span className={` dark:drop-shadow-xl block text-xs font-light`}>
        {`${diffPrice(price24h, price)}%`} {formatCur(price, currency)}
      </span>
      <span
        className={` dark:drop-shadow-xl block row-start-2 col-start-3 place-self-end font-medium `}
      >
        {price} {formatCur(price, currency)}
      </span>
      <span
        className={` dark:drop-shadow-xl block col-start-1 whitespace-nowrap row-start-3 col-span-3 place-self-end text-xs  font-light`}
      >
        {formatTime(updatedAt)}
      </span>
    </>
  );
}
