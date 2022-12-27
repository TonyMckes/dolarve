import DiscoverOthers from "components/Details/DiscoverOthers";
import NavbarPanel from "components/NavbarPanel";
import SearchCard from "components/SearchCard";
import Sidebar from "components/Sidebar";
import SidebarCard from "components/SidebarCard";
import { Route, Routes } from "react-router-dom";
import { routes } from "routes";

function Layout({ children, currencyPath }) {
  return (
    <div className="lg:mx-auto lg:container">
      <div className="grid grid-cols-1 md:grid-cols-layout md:grid-rows-layout">
        <NavbarPanel />
        {children}
        <Sidebar>
          <SidebarCard title="Buscar...">
            <SearchCard />
          </SidebarCard>

          <SidebarCard title="Descubre otras...">
            <DiscoverOthers />
          </SidebarCard>

          <Routes>
            {routes.map(({ url, sidebar }) => (
              <Route key={url} path={url} element={sidebar} />
            ))}
            <Route path={`${currencyPath}/:slug`} element={null} />
          </Routes>
        </Sidebar>
      </div>
    </div>
  );
}

export default Layout;
