import { useFavoritesContext } from "context/FavoritesContext";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

function FavoriteButton({ _id, size = "6", variant }) {
  const { favorites, setFavorites } = useFavoritesContext();

  const handleFav = (e, id) => {
    e.stopPropagation();

    if (favorites.includes(id)) {
      const tempArr = favorites.reduce((acc, curr) => {
        if (curr !== id) acc.push(curr);
        return acc;
      }, []);

      setFavorites(tempArr);
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const colorStyle = variant ? "text-inherit" : "text-neutral-800";

  return (
    <button onClick={(e) => handleFav(e, _id)}>
      {favorites.includes(_id) ? (
        <MdOutlineFavorite className={`${colorStyle} w-${size} h-${size}`} />
      ) : (
        <MdOutlineFavoriteBorder
          className={`${colorStyle} w-${size} h-${size}`}
        />
      )}
    </button>
  );
}

export default FavoriteButton;
