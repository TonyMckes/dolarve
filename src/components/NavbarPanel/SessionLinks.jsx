import { useAuthContext } from "context/AuthContext";
import { useFavoritesContext } from "context/FavoritesContext";
import {
  HiOutlineLogin,
  HiOutlineLogout,
  HiOutlinePencilAlt,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import { auth } from "utils/firebase";

function SessionLinks() {
  const { authState, setAuthState } = useAuthContext();
  const { setFavorites } = useFavoritesContext();

  const handleLogout = async () => {
    localStorage.removeItem("user");
    localStorage.removeItem("favorites");

    setAuthState(null);
    setFavorites([]);

    auth.signOut();
  };

  return authState ? (
    <div className="flex justify-end space-x-2 md:justify-start ">
      <button
        className="px-4 py-2 my-3 ring-1 ring-neutral-450 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-xl"
        onClick={handleLogout}
      >
        <HiOutlineLogout /> Logout
      </button>
    </div>
  ) : (
    <div className="flex justify-end space-x-2 md:justify-start">
      <Link
        className="px-4 py-2 my-3 ring-1 ring-neutral-450 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-xl"
        to="/login"
      >
        <HiOutlineLogin /> Log In
      </Link>
      <Link
        className="px-4 py-2 my-3 ring-1 ring-neutral-450 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-xl"
        to="/register"
      >
        <HiOutlinePencilAlt /> Sign Up
      </Link>
    </div>
  );
}

export default SessionLinks;
