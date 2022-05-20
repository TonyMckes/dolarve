import Layout from "components/Layout";
import Modal from "components/Modal";
import AuthProvider from "context/AuthContext";
import FavoritesProvider from "context/FavoritesContext";
import { ThemeProvider } from "context/ThemeContext";
import { IconContext } from "react-icons";
import { Route, Routes, useLocation } from "react-router-dom";
import Banks from "routes/Banks";
import Cryptocurrencies from "routes/Cryptocurrencies";
import Details from "routes/Details/Details";
import Favorites from "routes/Favorites";
import Login from "routes/Login";
import Quotations from "routes/Quotations";
import Resources from "routes/Resources";
import SignUp from "routes/SignUp";

function App() {
  const location = useLocation();
  const currencyPath = location.pathname.split("/")[1];
  const { backgroundLocation } = location.state || {};

  return (
    <AuthProvider>
      <ThemeProvider>
        <IconContext.Provider value={{ className: "inline-block w-6 h-6" }}>
          <FavoritesProvider>
            <Routes location={backgroundLocation || location}>
              <Route path="/" element={<Layout />}>
                <Route index element={<Favorites />} />
                <Route path="cotizaciones" element={<Quotations />} />
                <Route path="criptomonedas" element={<Cryptocurrencies />} />
                <Route path="tasas-de-bancos" element={<Banks />} />
                <Route path="recursos" element={<Resources />} />

                <Route path={`${currencyPath}/:slug`} element={<Details />} />

                <Route path="login" element={<Login />} />
                <Route path="register" element={<SignUp />} />
              </Route>
            </Routes>

            {backgroundLocation && (
              <Routes>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<SignUp />} />
                <Route path={`${currencyPath}/:slug`} element={<Modal />} />
              </Routes>
            )}
          </FavoritesProvider>
        </IconContext.Provider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
