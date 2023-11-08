import { toast } from "react-toastify";
import store from "../store/store";
import { clearUser, setUser } from "../store/user/user.slice";
import { auth, provider } from "./firebase";
import {
  clearCourse,
  subscribeCoursesByStudent,
} from "../store/student-course/student.slice";

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
      toast.success("Login success", {
        position: "top-right",
        autoClose: 3000,
      });
      store.dispatch(subscribeCoursesByStudent());
    })
    .catch((error) => {
      // Handle errors
      console.error("Google login error:", error);
    });
};

export const singOut = (dispatch) => {
  auth.signOut();
  localStorage.clear("user");
  dispatch(clearUser());
  toast.error("Logged out", {
    position: "top-right",
    autoClose: 3000, // Auto-close in 3 seconds
  });
  store.dispatch(clearCourse());
};
