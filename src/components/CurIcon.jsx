import PLACEHOLDER_IMG from "assets/images/placeholder_50x50.png";

function CurIcon({ icon = PLACEHOLDER_IMG, name, size = "14" }) {
  const handleOnError = (e) => {
    e.target.src = PLACEHOLDER_IMG;
  };

  const handleOnLoad = (e) => {
    e.target.classList.replace("opacity-0", "opacity-100");
  };

  return (
    <img
      className={`inline-block mx-1 transition-opacity rounded-full opacity-0 dark:bg-neutral-700 w-${size} h-${size}`}
      src={icon}
      alt={name}
      onError={handleOnError}
      onLoad={handleOnLoad}
    />
  );
}

export default CurIcon;
