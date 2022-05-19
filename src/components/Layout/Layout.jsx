import LoadingSpinner from "components/LoadingSpinner";
import Modal from "components/Modal/Modal";
import NavbarPanel from "components/NavbarPanel";
import CurrenciesProvider from "context/CurrenciesContext";
import FavoritesProvider from "context/FavoritesContext";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const modalState = { data: {}, showing: false, spinner: false };

function Layout() {
  const [{ data, showing, spinner }, setModal] = useState(modalState);

  return (
    <div className="lg:mx-auto lg:container">
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
  );
}

export default Layout;
