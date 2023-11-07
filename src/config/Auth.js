import store from "../store/store";
import { setUser } from "../store/user/user.slice";
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
      store.dispatch(setUser(signedInUser));
      localStorage.setItem("user", JSON.stringify(signedInUser));
    })
    .catch((error) => {
      // Handle errors
      console.error("Google login error:", error);
    });
};

export const singOut = () => {
  auth.signOut();
};
