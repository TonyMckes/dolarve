function CurName({ name, size = "base", weight = "base", custom = "" }) {
  return (
    <span
      className={`dark:text-gray-100 whitespace-nowrap drop-shadow font-${weight} text-${size} ${custom}`}
    >
      {name}
    </span>
  );
}

export default CurName;
