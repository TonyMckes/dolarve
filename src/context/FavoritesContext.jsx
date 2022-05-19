import { useAuthContext } from "context/AuthContext";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "utils/firebase";

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
      const docRef = doc(db, "users", authState.uid);
      const docSnap = await getDoc(docRef);

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

      const docRef = doc(db, "users", authState.uid);
      const docSnap = await getDoc(docRef);

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
