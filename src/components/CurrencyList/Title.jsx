import { MdTrendingDown, MdTrendingFlat, MdTrendingUp } from "react-icons/md";

export function Title({ layoutView, price24h, price, name, symbol }) {
  return (
    <span className={`text-center font-medium whitespace-nowrap ${layoutView}`}>
      {price24h < price ? (
        <MdTrendingUp className="w-4 h-4" />
      ) : price24h === price ? (
        <MdTrendingFlat className="w-4 h-4" />
      ) : (
        <MdTrendingDown className="w-4 h-4" />
      )}{" "}
      {name} <span className="text-xs text-gray-500 font-base dark:text-gray-400 transition-color">({symbol})</span>
    </span>
  );
}
