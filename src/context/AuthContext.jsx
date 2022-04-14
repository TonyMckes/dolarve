import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "utils/firebase";

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

const authInitState = JSON.parse(localStorage.getItem("user"));

function AuthProvider({ children }) {
  const [authState, setAuthState] = useState(authInitState);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      try {
        if (user) {
          const { displayName, email, photoURL, uid } = user;

          const authUser = {
            displayName: displayName,
            email: email,
            photoURL: photoURL,
            uid: uid,
          };

          localStorage.setItem("user", JSON.stringify(authUser));

          setAuthState(authUser);
          // ...
        } else {
          // ...
        }
      } catch (error) {
        console.log(error);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
