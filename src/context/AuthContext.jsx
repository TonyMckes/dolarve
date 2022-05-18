import { getRedirectResult, onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "utils/firebase";

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

const initialState = () => JSON.parse(localStorage.getItem("auth"));

function AuthProvider({ children }) {
  const [authState, setAuthState] = useState(initialState);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        localStorage.removeItem("auth");
        return setAuthState(null);
      }

      const {
        displayName = "Usuario",
        email,
        photoURL = "https://via.placeholder.com/100x100",
        uid,
      } = user;

      const userData = { uid, email, displayName, photoURL };

      localStorage.setItem("auth", JSON.stringify(userData));
      setAuthState(userData);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    getRedirectResult(auth).then((result) => {
      if (result) navigate("/");
    });
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
