import Button from "components/Button";
import Fieldset from "components/Fieldset/Fieldset";
import ModalContainer from "components/ModalContainer";
import ProviderButton from "components/ProviderButton";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import userSignUp from "services/userSignUp";

function SignUp() {
  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    confirmPwd: "",
  });
  const { email, password, confirmPwd } = inputValue;

  const location = useLocation();
  const { backgroundLocation } = location.state || {};
  const navigate = useNavigate();

  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setError("");

    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPwd) {
      return setError("Las contraseñas no coinciden");
    }

    if (error) return;

    userSignUp(email, password)
      .then(() => navigate("/"))
      .catch(setError);
  };

  return (
    <ModalContainer>
      <div className="p-4 mx-auto space-y-4 divide-y divide-neutral-450">
        <h1 className="text-xl font-bold text-center">Regístrate</h1>

        <form
          className="flex flex-col items-center gap-4 pt-4"
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
            text="Contraseña"
            type="password"
            value={password}
            min="6"
          />
          <Fieldset
            name="confirmPwd"
            onChange={handleInput}
            text="Confirma la contraseña"
            type="password"
            value={confirmPwd}
            min="6"
          />

          <span className="h-4 text-red-500">{error}</span>

          <Button disabled={error} text="Registrarse" />
        </form>

        <div className="flex justify-center pt-4">
          <div className="flex flex-col items-stretch gap-2 max-w-fit ">
            <ProviderButton provider="google" text="Registrarse con Google" />
            <ProviderButton
              provider="facebook"
              text="Registrarse con Facebook"
            />
          </div>
        </div>

        <div className="pt-4">
          <p className="text-center">
            Ya tienes una cuenta?
            <Link
              className="text-blue-500 duration-300 hover:text-blue-700"
              replace
              state={{ backgroundLocation }}
              to="/login"
            >
              {" "}
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </ModalContainer>
  );
}

export default SignUp;
