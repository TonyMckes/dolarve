import { useAuthContext } from "context/AuthContext";
import { setDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { getDocSnap } from "utils/firebase";

const FavoritesContext = createContext();

export function useFavoritesContext() {
  return useContext(FavoritesContext);
}

const initialState = () => JSON.parse(localStorage.getItem("favorites")) || [];

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(initialState);

  const { authState } = useAuthContext();

  useEffect(() => {
    if (!authState) return;

    (async () => {
      const { docRef, docSnap } = await getDocSnap(authState.uid);

      if (docSnap.exists()) {
        const dbFavorites = docSnap.get("favorites");
        const mergedFavorites = [...new Set([...dbFavorites, ...favorites])];

        setFavorites(mergedFavorites);
      } else {
        await setDoc(docRef, { favorites });
      }
    })();
  }, [authState]);

  useEffect(() => {
    (async () => {
      if (!authState) return;

      const { docRef, docSnap } = await getDocSnap(authState.uid);

      if (docSnap.exists()) {
        await setDoc(docRef, { favorites }, { merge: true });
      }
    })();

    if (favorites.length === initialState().length) return;

    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesProvider;
