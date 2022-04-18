import { formatCur } from "utils";

function CurPrice({ currency, price }) {
  return (
    <span className="md:text-xl align-middle">
      {currency && formatCur(price, currency)}
    </span>
  );
}

export default CurPrice;
