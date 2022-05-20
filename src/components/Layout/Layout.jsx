import NavbarPanel from "components/NavbarPanel";
import CurrenciesProvider from "context/CurrenciesContext";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="lg:mx-auto lg:container">
      <div className="grid grid-cols-1 md:grid-cols-layout md:grid-rows-layout">
        <NavbarPanel />
        <CurrenciesProvider>
          <Outlet />
        </CurrenciesProvider>

        {/* <LoadingSpinner /> */}
      </div>
    </div>
  );
}

export default Layout;
