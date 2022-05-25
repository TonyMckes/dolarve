import ModalContainer from "components/ModalContainer";
import ProviderButton from "components/ProviderButton";
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

  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name === "password" && value.length >= 6) setError("");

    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    userSignIn(email, password)
      .then(() => navigate("/"))
      .catch(setError);
  };

  return (
    <ModalContainer>
      <div className="flex flex-col items-center p-4 divide-y-2 divide-gray-300">
        <div className="pb-4">
          <h2 className="text-lg font-bold text-center">Login</h2>
          <form className="flex flex-col ">
            <label className="py-2 ">
              Email
              <input
                className="block px-4 py-1 border rounded outline-gray-300 hover:bg-gray-50"
                type="email"
                name="email"
                value={email}
                onChange={handleInput}
                required
              />
            </label>

              <label className={`py-2 ${error ? "text-red-600" : ""} `}>
                Password{" "}
                {error && <span className="text-red-600">{error}</span>}
                <input
                  className="block px-4 py-1 border rounded outline-gray-300 hover:bg-gray-50"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleInput}
                  required
                />
              </label>
              <button
                onClick={handleSubmit}
                className="px-2 py-3 mt-4 font-semibold rounded-2xl bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600"
              >
                Sign up
              </button>
            </form>
          </div>

        <div className="p-4 space-y-2">
          <ProviderButton provider="google" text="Sign ip with Google" />
          <ProviderButton provider="facebook" text="Sign ip with Facebook" />
        </div>

          <p className="p-4">
            Dont have an account?
            <Link
              className="text-blue-500 duration-300 hover:text-blue-700"
              state={{ backgroundLocation }}
              to="/register"
            >
              {" "}
              Register
            </Link>
          </p>
        </div>
    </ModalContainer>
  );
}

export default Login;
