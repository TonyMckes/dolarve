import { IconContext } from "react-icons";
import AuthProvider from "./AuthContext";
import CurrenciesProvider from "./CurrenciesContext";
import FavoritesProvider from "./FavoritesContext";
import ThemeProvider from "./ThemeContext";

function ContextProviders({ children }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <CurrenciesProvider>
          <FavoritesProvider>
            <IconContext.Provider value={{ className: "inline-block w-6 h-6" }}>
              {children}
            </IconContext.Provider>
          </FavoritesProvider>
        </CurrenciesProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default ContextProviders;
