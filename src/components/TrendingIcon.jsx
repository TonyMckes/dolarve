import { MdTrendingDown, MdTrendingFlat, MdTrendingUp } from "react-icons/md";

function TrendingIcon({ price, price24h, size = "6" }) {
  return price24h < price ? (
    <MdTrendingUp className={`w-${size} h-${size}`} />
  ) : price24h === price ? (
    <MdTrendingFlat className={`w-${size} h-${size}`} />
  ) : (
    <MdTrendingDown className={`w-${size} h-${size}`} />
  );
}

export default TrendingIcon;
