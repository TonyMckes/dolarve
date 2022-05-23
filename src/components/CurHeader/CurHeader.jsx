import CurIcon from "components/CurIcon";
import CurName from "components/CurName";
import CurPrice from "components/CurPrice";
import CurSymbol from "components/CurSymbol";
import TrendingIcon from "components/TrendingIcon";

function CurHeader({ name, icon, price, price24h, symbol, currency, modal }) {
  const containerStyles = modal
    ? "py-2 pr-2 border-b border-neutral-450"
    : "gap-2 md:p-2";

  const iconStyles = modal ? "" : "hidden md:block";

  const fontSize = modal ? "base" : "lg";

  return (
    <div className={`flex items-center justify-between ${containerStyles}`}>
      <div className={iconStyles}>
        <CurIcon name={name} icon={icon} size="14" />
      </div>
      <header className="grow">
        <h1 className="tracking-tighter">
          <CurName name={name} size={fontSize} weight="bold" />
        </h1>
        <div className="flex items-center justify-between">
          <div>
            <TrendingIcon price={price} price24h={price24h} />
            <CurSymbol darker size="xs" symbol={symbol} />
          </div>

          <CurPrice currency={currency} price={price} size={fontSize} />
        </div>
      </header>
    </div>
  );
}

export default CurHeader;
