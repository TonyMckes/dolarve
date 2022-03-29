import { MdTrendingDown, MdTrendingFlat, MdTrendingUp } from "react-icons/md";

export function Title({ data: { name }, data, variant }) {
  return (
    <h3 className="inline-block text-base font-bold text-center whitespace-nowrap dark:text-gray-100 drop-shadow">
      {name} <Symbol {...data} />
    </h3>
  );
}

function Symbol({ symbol, price24h, price }) {
  const icon =
    price24h < price ? (
      <MdTrendingUp className="inline" />
    ) : price24h === price ? (
      <MdTrendingFlat className="inline" />
    ) : (
      <MdTrendingDown className="inline" />
    );

  return (
    <span className="block text-xs text-gray-600 md:inline-block dark:text-gray-500 font-base">
      ({symbol}) {icon}
    </span>
  );
}
