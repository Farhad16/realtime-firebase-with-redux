import store from "../store/store";
import { auth, provider } from "./firebase";

export const handleGoogleLogin = () => {
  auth
    .signInWithPopup(provider)
    .then((result) => {
      // Handle successful login
      const user = result.user;
      const signedInUser = {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      };
      store.dispatch({ type: "SET_USER", payload: signedInUser });
    })
    .catch((error) => {
      // Handle errors
      console.error("Google login error:", error);
    });
};

export const singOut = () => {
  auth.signOut();
};
