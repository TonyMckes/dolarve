import { formatCur } from "utils";

function CurPrice({ currency, price, size = "base" }) {
  return (
    <span className={`font-medium align-middle text-${size}`}>
      {currency && formatCur(price, currency)}
    </span>
  );
}

export default CurPrice;
