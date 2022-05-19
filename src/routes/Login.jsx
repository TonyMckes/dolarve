import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import userSignIn from "services/userSignIn";
import userSignInWithProvider from "services/userSignInWithProvider";

function Login() {
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

    userSignIn(email, password)
      .then(() => navigate("/"))
      .catch(setError);
  };

  return (
    <div
      className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-black bg-opacity-25 dark:bg-opacity-50 background-window"
      // onClick={(e) => closeHandler(e)}
    >
      <div className="w-4/5 p-4 text-sm bg-white rounded-lg dark:bg-neutral-800 md:max-w-md history-window">
        <div
          className={`flex divide-y-2 divide-gray-300 flex-col items-center p-4 border border-neutral-300 dark:border-neutral-700 rounded-lg window-container `}
        >
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
      </div>
    </div>
  );
}

export default Login;
