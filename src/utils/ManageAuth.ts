import { auth, db } from "../firebase-cofig";
import { signOut, deleteUser } from "firebase/auth";
import { doc, deleteDoc, getDocs, collection } from "firebase/firestore";
import {deleteAllCourses} from "./Course";


async function logOut() {
  await signOut(auth)
    .then(() => {
      localStorage.removeItem("isInstructor");
      return "Sign-out successful.";
    })
    .catch((error) => {
      return error;
    });
}

async function logIn() {}

async function signUp() {}

async function googleSignUp() {}

async function deleteAccount() {
  try {
    deleteAllCourses();

    // Delete the user's account
    const userRef = doc(db, "users", `${auth.currentUser?.uid}`);
    await deleteDoc(userRef);

    // Delete user's file

    
    // Delete the user's authentication
    await deleteUser(auth.currentUser);
  } catch (error) {
    console.error(error);

    if (error.code === "auth/requires-recent-login") {
      throw new Error("Reauthentication is required to delete the account");
    } else {
      throw new Error("Failed to delete the account");
    }
  }
}

export { logOut, logIn, signUp, googleSignUp, deleteAccount };
