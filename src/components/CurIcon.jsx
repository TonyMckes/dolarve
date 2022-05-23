import { PLACEHOLDER_URL } from "../constants";

function CurIcon({ icon = PLACEHOLDER_URL, name, size = "14" }) {
  const handleOnError = (e) => {
    e.target.src = PLACEHOLDER_URL;
  };

  const handleOnLoad = (e) => {
    e.target.classList.replace("opacity-0", "opacity-100");
  };

  return (
    <img
      className={`inline-block transition-opacity rounded-full p-1 opacity-0 w-${size} h-${size}`}
      src={icon}
      alt={name}
      onError={handleOnError}
      onLoad={handleOnLoad}
    />
  );
}

export default CurIcon;