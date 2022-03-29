import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { useFavorites } from "../../hooks/useFavorites";

export function FavoriteButton({ _id }) {
  const { favorites, setFavorites } = useFavorites();

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

  return (
    <button
      className=""
      onClick={(e) => handleFav(e, _id)}
    >
      {favorites.includes(_id) ? (
        <MdOutlineFavorite className="h-4 w-4" />
      ) : (
        <MdOutlineFavoriteBorder className="h-4 w-4" />
      )}
    </button>
  );
}
