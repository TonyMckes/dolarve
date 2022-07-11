import Anchor from "components/Anchor";
import Button from "components/Button";
import { useAuthContext } from "context/AuthContext";
import { useFavoritesContext } from "context/FavoritesContext";
import {
  HiOutlineLogin,
  HiOutlineLogout,
  HiOutlinePencilAlt,
} from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { auth } from "utils/firebase";

function SessionLinks() {
  const { authState, setAuthState } = useAuthContext();
  const { setFavorites } = useFavoritesContext();
  const location = useLocation();

  const handleLogout = async () => {
    localStorage.removeItem("user");
    localStorage.removeItem("favorites");

    setAuthState(null);
    setFavorites([]);

    auth.signOut();
  };

  const bgLocation = { backgroundLocation: location };

  return authState ? (
    <div className="flex py-2 space-x-2 text-sm font-medium md:text-xs lg:text-base">
      <Button
        icon={<HiOutlineLogout />}
        onClick={handleLogout}
        text="Cerrar sesión"
      />
    </div>
  ) : (
    <div className="flex py-2 space-x-2 text-sm font-medium md:text-xs lg:text-base">
      <Anchor
        href="/login"
        icon={<HiOutlineLogin />}
        state={bgLocation}
        text="Ingresar"
      />
      <Anchor
        href="/register"
        icon={<HiOutlinePencilAlt />}
        state={bgLocation}
        text="Registrarse"
      />
    </div>
  );
}

export default SessionLinks;
