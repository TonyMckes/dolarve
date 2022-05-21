import { diffPrice, formatCur, formatTime } from "utils";

function Prices({ price24h, price, currency, updatedAt }) {
  return (
    <>
      <span className="block text-xs font-light text-neutral-800 ">
        {`${diffPrice(price24h, price)}%`} {formatCur(price24h, currency)}
      </span>
      <span className="block col-start-3 row-start-2 font-medium text-neutral-800 place-self-end">
        {formatCur(price, currency)}
      </span>
      <span className="block col-span-3 col-start-1 row-start-3 text-xs font-light text-neutral-800 whitespace-nowrap place-self-end">
        {formatTime(updatedAt)}
      </span>
    </>
  );
}

export default Prices;
