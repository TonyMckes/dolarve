import { diffPrice, formatCur, formatTime } from "utils";

export function Prices({ price24h, price, currency, updatedAt }) {
  return (
    <>
      <span className="block text-xs font-light dark:drop-shadow-xl">
        {`${diffPrice(price24h, price)}%`} {formatCur(price24h, currency)}
      </span>
      <span className="block col-start-3 row-start-2 font-medium dark:drop-shadow-xl place-self-end">
        {formatCur(price, currency)}
      </span>
      <span className="block col-span-3 col-start-1 row-start-3 text-xs font-light dark:drop-shadow-xl whitespace-nowrap place-self-end">
        {formatTime(updatedAt)}
      </span>
    </>
  );
}
