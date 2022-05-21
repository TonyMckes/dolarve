function CurSymbol({ symbol, size = "sm" }) {
  return <span className={`text-neutral-450 text-${size}`}>({symbol})</span>;
}

export default CurSymbol;
