function CurName({ name, size = "base", weight = "base", custom = "" }) {
  return (
    <span
      className={`dark:text-gray-100 drop-shadow font-${weight} lg:text-${size} ${custom}`}
    >
      {name}
    </span>
  );
}

export default CurName;
