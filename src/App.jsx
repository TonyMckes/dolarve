import { useState } from "react";
import { IconContext } from "react-icons";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import LoadingSpinner from "./components/LoadingSpinner";
import Modal from "./components/Modal/Modal";
import AuthContextProvider from "./context/AuthContextProvider";
import CurrenciesContextProvider from "./context/CurrenciesContextProvider";
import { ThemeProvider } from "./context/ThemeContext";
import FavoritesContextProvider from "./hooks/useFavorites";

function App() {
  const [curList, setCurList] = useState([]);
  // const [curInput, setCurInput] = useState({ inputCode: "VES", inputValue: 1 });
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState({ data: {}, show: false, spinner: false });
  const [filteredCur, setFilteredCur] = useState([]);

  const states = {
    // curInput,
    curList,
    filteredCur,
    loading,
    modal,
    // setCurInput,
    setCurList,
    setFilteredCur,
    setLoading,
    setModal,
  };

  return (
    <ThemeProvider>
      <AuthContextProvider>
        <IconContext.Provider value={{ className: "inline-block w-6 h-6" }}>
          <div className="w-full h-full text-gray-800 lg:mx-auto lg:container dark:text-gray-300 ">
            <div className="grid grid-cols-1 md:grid-cols-layout md:grid-rows-layout">
              <FavoritesContextProvider>
                <Header />

                <CurrenciesContextProvider>
                  <Outlet context={states} />
                </CurrenciesContextProvider>

                <LoadingSpinner loading={modal.spinner} />
                <Modal modal={{ ...modal, setModal }} />
              </FavoritesContextProvider>
            </div>
          </div>
        </IconContext.Provider>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
