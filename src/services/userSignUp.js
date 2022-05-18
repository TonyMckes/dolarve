import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "utils/firebase";

async function userSignUp(email, password) {
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    const { code } = error;
    if (code === "auth/email-already-in-use") {
      throw "El email ya está en uso, intenta iniciar sesión";
    } else if (code === "auth/weak-password") {
      throw "La contraseña debe tener un minimo de 6 caracteres";
    }

    throw code;
  }
}

export default userSignUp;
