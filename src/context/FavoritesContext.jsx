import { doc, getDoc, setDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import { db } from "../utils/firebase";

const FavoritesContext = createContext();

export function useFavoritesContext() {
  return useContext(FavoritesContext);
}

const localFavorites = JSON.parse(localStorage.getItem("favorites"));
const initialState = localFavorites ? localFavorites : [];

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(initialState);

  const { authState } = useAuthContext();

  useEffect(() => {
    (async () => {
      if (authState) {
        const docRef = doc(db, "users", authState.uid);

        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          localStorage.setItem(
            "favorites",
            JSON.stringify(docSnap.get("favorites")),
          );

          setFavorites(docSnap.get("favorites"));
        } else {
          const localFavorites = JSON.parse(localStorage.getItem("favorites"));

          const userUID = doc(db, `users/${authState.uid}`);

          await setDoc(userUID, { favorites: localFavorites }, { merge: true });
        }
      } else {
        // ...
      }
    })();
  }, [authState]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesProvider;
