import SidebarCard from "components/SidebarCard";
import Banks from "routes/Banks";
import Cryptocurrencies from "routes/Cryptocurrencies";
import Favorites from "routes/Favorites";
import Login from "routes/Login";
import Quotations from "routes/Quotations";
import Resources from "routes/Resources";
import SignUp from "routes/SignUp";

export const routes = [
  {
    url: "/",
    component: <Favorites />,
    sidebar: (
      <SidebarCard title="Tips...">
        <p>Agrega favoritos para verlos en un solo lugar</p>
      </SidebarCard>
    ),
  },
  {
    url: "/cotizaciones",
    component: <Quotations />,
    sidebar: null,
  },
  {
    url: "/criptomonedas",
    component: <Cryptocurrencies />,
    sidebar: null,
  },
  {
    url: "/tasas-de-bancos",
    component: <Banks />,
    sidebar: null,
  },
  {
    url: "/recursos",
    component: <Resources />,
    sidebar: null,
  },
  {
    url: "/login",
    component: <Login />,
    sidebar: null,
  },
  {
    url: "/register",
    component: <SignUp />,
    sidebar: null,
  },
];
