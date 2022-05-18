import { signInWithPopup, signInWithRedirect } from "firebase/auth";
import { auth } from "utils/firebase";

async function userSignInWithProvider(provider) {
  try {
    const { userAgent } = window.navigator;

    if (userAgent.includes("Mobi")) {
      return await signInWithRedirect(auth, provider);
    }

    return await signInWithPopup(auth, provider);
  } catch (error) {
    const { code } = error;

    throw code;
  }
}

export default userSignInWithProvider;
