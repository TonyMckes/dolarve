import Layout from "components/Layout";
import Modal from "components/Modal";
import ContextProviders from "context/ContextProviders";
import { Route, Routes, useLocation } from "react-router-dom";
import { routes } from "routes";
import Details from "routes/Details/Details";
import Login from "routes/Login";
import SignUp from "routes/SignUp";

function App() {
  const location = useLocation();
  const currencyPath = location.pathname.split("/")[1];
  const { backgroundLocation } = location.state || {};

  return (
    <ContextProviders>
      <Layout currencyPath={currencyPath}>
        <Routes location={backgroundLocation || location}>
          {routes.map(({ url, component }) => (
            <Route key={url} path={url} element={component} />
          ))}
          <Route path={`${currencyPath}/:slug`} element={<Details />} />
        </Routes>
      </Layout>

      {backgroundLocation && (
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<SignUp />} />
          <Route path={`${currencyPath}/:slug`} element={<Modal />} />
        </Routes>
      )}
    </ContextProviders>
  );
}

export default App;
