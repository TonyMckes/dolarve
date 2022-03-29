import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export function useFavorites() {
  return useContext(FavoritesContext);
}

const localFavorites = JSON.parse(localStorage.getItem("favoritedCurr"));
const initialState = localFavorites ? localFavorites : [];

export default function FavoritesContextProvider({ children }) {
  const [favorites, setFavorites] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("favoritedCurr", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}
