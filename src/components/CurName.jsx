function CurName({
  name,
  size = "base",
  weight = "base",
  custom = "",
  variant,
}) {
  const displayStyle = variant ? "inline" : " block";

  return (
    <span
      className={`${displayStyle} font-${weight} md:text-${size} ${custom}`}
    >
      {name}
    </span>
  );
}

export default CurName;
