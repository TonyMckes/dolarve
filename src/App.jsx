import Header from "components/Header";
import LoadingSpinner from "components/LoadingSpinner";
import Modal from "components/Modal/Modal";
import NavbarPanel from "components/NavbarPanel";
import AuthProvider from "context/AuthContext";
import CurrenciesProvider from "context/CurrenciesContext";
import FavoritesProvider from "context/FavoritesContext";
import { ThemeProvider } from "context/ThemeContext";
import { useState } from "react";
import { IconContext } from "react-icons";
import { Outlet } from "react-router-dom";

const modalState = { data: {}, showing: false, spinner: false };

function App() {
  const [{ data, showing, spinner }, setModal] = useState(modalState);

  return (
    <AuthProvider>
      <ThemeProvider>
        <IconContext.Provider value={{ className: "inline-block w-6 h-6" }}>
          <div className="w-full h-full text-gray-800 lg:mx-auto lg:container dark:text-gray-300 ">
            <div className="grid grid-cols-1 md:grid-cols-layout md:grid-rows-layout">
              <FavoritesProvider>
                  <NavbarPanel />
                  <CurrenciesProvider>
                    <Outlet context={setModal} />
                  </CurrenciesProvider>

                <LoadingSpinner loading={spinner} />
                <Modal details={data} setModal={setModal} showing={showing} />
              </FavoritesProvider>
            </div>
          </div>
        </IconContext.Provider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
