import { useAuthContext } from "context/AuthContext";
import { useFavoritesContext } from "context/FavoritesContext";
import { doc, setDoc } from "firebase/firestore";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { db } from "utils/firebase";

function FavoriteButton({ _id, size = "6", variant }) {
  const { favorites, setFavorites } = useFavoritesContext();
  const { authState } = useAuthContext();

  const save = async (arr) => {
    if (authState) {
      const userUID = doc(db, `users/${authState.uid}`);
      const docData = await setDoc(
        userUID,
        { favorites: arr },
        { merge: true },
      );

      localStorage.setItem("favorites", JSON.stringify(arr));

      console.log("online: saved on localStorage and Firestore");
    } else {
      localStorage.setItem("favorites", JSON.stringify(arr));

      console.log("offline: saved on localStorage");
    }
  };

  const handleFav = (e, id) => {
    e.stopPropagation();

    if (favorites.includes(id)) {
      const tempArr = favorites.reduce((acc, curr) => {
        if (curr !== id) acc.push(curr);
        return acc;
      }, []);

      save(tempArr);

      setFavorites(tempArr);
    } else {
      save([...favorites, id]);

      setFavorites([...favorites, id]);
    }
  };

  const colorStyle = variant ? "text-inherit" : "text-neutral-800";

  return (
    <button className="" onClick={(e) => handleFav(e, _id)}>
      {favorites.includes(_id) ? (
        <MdOutlineFavorite className={`${colorStyle} w-${size} h-${size}`} />
      ) : (
        <MdOutlineFavoriteBorder className={`${colorStyle} w-${size} h-${size}`} />
      )}
    </button>
  );
}

export default FavoriteButton;
