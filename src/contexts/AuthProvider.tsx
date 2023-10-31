import { createContext, useContext } from "react";
import { useQuery, useMutation } from "react-query";
import { auth } from "../firebase-cofig";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const { data: user, isLoading } = useQuery("user", async () => {
    return new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        resolve(currentUser);
      });

      return () => {
        unsubscribe();
      };
    });
  });

  const { mutate: setIsInstructor } = useMutation(
    (newValue) => {
    }
  );

  return (
    <AuthContext.Provider value={{ user, isLoading, setIsInstructor }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
