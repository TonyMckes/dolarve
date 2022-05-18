import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "utils/firebase";

async function userSignIn(email, password) {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    const { code } = error;

    if (code === "auth/user-not-found") {
      throw "Usuario no encontrado, intenta registrarte";
    } else if (code === "auth/wrong-password") {
      throw "Contraseña incorrecta";
    }

    throw code;
  }
}

export default userSignIn;
