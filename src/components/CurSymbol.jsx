function CurSymbol({ symbol, size = "sm" }) {
  return (
    <span className={`text-${size} text-gray-500 dark:text-gray-400`}>
      ({symbol})
    </span>
  );
}

export default CurSymbol;
