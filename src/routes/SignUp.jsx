import { useAuthContext } from "context/AuthContext";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { logInWithGoogle, signUpWithEmailAndPassword } from "utils/firebase";

function SignIn() {
  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;

  const { setAuthState } = useAuthContext();
  const navigate = useNavigate();

  const googleHandler = async () => {
    const { user } = await logInWithGoogle();

    navigate("/");
  };

  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name === "password" && value.length >= 6) setError("");

    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) return setError("must be at least 6 characters");

    try {
      const { user } = await signUpWithEmailAndPassword(email, password);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
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
              to="/login"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
