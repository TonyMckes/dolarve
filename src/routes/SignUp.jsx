import ModalContainer from "components/ModalContainer";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import userSignInWithProvider from "services/userSignInWithProvider";
import userSignUp from "services/userSignUp";

function SignUp() {
  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const { email, password } = inputValue;

  const location = useLocation();
  const { backgroundLocation } = location.state || {};
  const navigate = useNavigate();

  const googleHandler = () => {
    userSignInWithProvider(new GoogleAuthProvider())
      .then(() => navigate("/"))
      .catch(console.log);
  };

  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name === "password" && value.length >= 6) setError("");

    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    userSignUp(email, password)
      .then(() => navigate("/"))
      .catch(setError);
  };

  return (
    <ModalContainer>
      <div className="flex flex-col items-center p-4 divide-y-2 divide-gray-300">
        <div className="pb-4">
          <h2 className="text-lg font-bold text-center">Sign in</h2>
          <form className="flex flex-col ">
            <label className="py-2 ">
              Email
              <input
                className="block px-4 py-1 border rounded outline-gray-300 hover:bg-gray-50"
                type="email"
                name="email"
                value={email}
                onChange={(e) => handleInput(e)}
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
                  onChange={(e) => handleInput(e)}
                  required
                />
              </label>
              <button
                onClick={(e) => handleSubmit(e)}
                className="px-2 py-3 rounded-2xl mt-4 bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 font-semibold"
              >
                Sign up
              </button>
            </form>
          </div>
          <div className="p-4">
            <button
              className="p-2 border outline-none rounded-xl hover:bg-gray-100"
              onClick={googleHandler}
            >
              <FcGoogle />{" "}
              <span className="font-bold">Sign in with Google</span>
            </button>
          </div>

          <p className="p-4">
            Already have an account?{" "}
            <Link
              className="text-blue-500 hover:text-blue-700 duration-300"
              state={{ backgroundLocation }}
              to="/login"
            >
              Login
            </Link>
          </p>
        </div>
    </ModalContainer>
  );
}

export default SignUp;
