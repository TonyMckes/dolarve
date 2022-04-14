import { useState } from "react";
import { IconContext } from "react-icons";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import LoadingSpinner from "./components/LoadingSpinner";
import Modal from "./components/Modal/Modal";
import AuthProvider from "./context/AuthContext";
import CurrenciesProvider from "./context/CurrenciesContext";
import FavoritesProvider from "./context/FavoritesContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [modal, setModal] = useState({ data: {}, show: false, spinner: false });

  return (
    <AuthProvider>
      <ThemeProvider>
        <IconContext.Provider value={{ className: "inline-block w-6 h-6" }}>
          <div className="w-full h-full text-gray-800 lg:mx-auto lg:container dark:text-gray-300 ">
            <div className="grid grid-cols-1 md:grid-cols-layout md:grid-rows-layout">
              <FavoritesProvider>
                <Header />

                <CurrenciesProvider>
                  <Outlet context={{ modal, setModal }} />
                </CurrenciesProvider>

                <LoadingSpinner loading={modal.spinner} />
                <Modal modal={{ ...modal, setModal }} />
              </FavoritesProvider>
            </div>
          </div>
        </IconContext.Provider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
