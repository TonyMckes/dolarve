import { formatCur } from "utils";

function CurPrice({ currency, price }) {
  return (
    <span className="font-medium text-lg md:text-xl align-middle">
      {currency && formatCur(price, currency)}
    </span>
  );
}

export default CurPrice;
