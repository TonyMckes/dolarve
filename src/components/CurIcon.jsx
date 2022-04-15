import { PLACEHOLDER_URL } from "../constants";

function CurIcon({ icon = PLACEHOLDER_URL, name, size = "8" }) {
  const handleSrcError = (e) => {
    e.target.src = PLACEHOLDER_URL;
  };

  return (
    <img
      className={` rounded-full inline-block drop-shadow-md w-${size} h-${size}`}
      src={icon}
      alt={name}
      onError={handleSrcError}
    />
  );
}

export default CurIcon;
