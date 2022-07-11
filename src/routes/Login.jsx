import Button from "components/Button";
import Fieldset from "components/Fieldset/Fieldset";
import ModalContainer from "components/ModalContainer";
import ProviderButton from "components/ProviderButton";
import useTitle from "hooks/useTitle";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import userSignIn from "services/userSignIn";

function Login() {
  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const { email, password } = inputValue;

  const location = useLocation();
  const { backgroundLocation } = location.state || {};
  const navigate = useNavigate();

  useTitle(`Inicio de sesión - DolarVE`);

  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setError("");

    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return setError("Todos los campos son obligatorios");
    }
    if (error) return;

    userSignIn(email, password)
      .then(() => navigate("/"))
      .catch(setError);
  };

  return (
    <ModalContainer>
      <div className="p-4 mx-auto space-y-4 divide-y divide-neutral-450">
        <h1 className="text-xl font-bold text-center">Iniciar sesión</h1>

        <form
          className="flex flex-col items-center gap-4 pt-4 "
          onSubmit={handleSubmit}
        >
          <Fieldset
            name="email"
            onChange={handleInput}
            text="Email"
            type="email"
            value={email}
          />
          <Fieldset
            name="password"
            onChange={handleInput}
            text="Password"
            type="password"
            value={password}
            min="6"
          />

          <span className="h-4 text-red-500">{error}</span>

          <Button disabled={error} text="Inicia sesión" />
        </form>

        <div className="flex justify-center pt-4">
          <div className="flex flex-col items-stretch gap-2 max-w-fit ">
            <ProviderButton provider="google" text="Inicia sesión con Google" />
            <ProviderButton
              provider="facebook"
              text="Inicia sesión con Facebook"
            />
          </div>
        </div>

        <div className="pt-4">
          <p className="text-center">
            Aun no tienes una cuenta?
            <Link
              className="text-blue-500 duration-300 hover:text-blue-700"
              replace
              state={{ backgroundLocation }}
              to="/register"
            >
              {" "}
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </ModalContainer>
  );
}

export default Login;
