function CurName({ name, size = "base", weight = "base", custom = "", variant }) {
  const displayStyle = variant ? "inline" : " block"; 
  
  return (
    <span
      className={`truncate ${displayStyle} font-${weight} lg:text-${size} ${custom}`}
    >
      {name}
    </span>
  );
}

export default CurName;
