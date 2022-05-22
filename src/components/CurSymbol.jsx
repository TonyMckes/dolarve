function CurSymbol({ symbol, size = "sm", darker }) {
  const darkerText = darker ? "text-neutral-600" : "text-neutral-450 ";

  return (
    <span className={`${darkerText} text-${size} ${darker}`}>({symbol})</span>
  );
}

export default CurSymbol;
