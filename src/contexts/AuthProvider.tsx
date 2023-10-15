import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase-cofig";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<null | object>(null);
  const [isInstructor, setIsInstructor] = useState<boolean>(
    false || localStorage.getItem("isInstructor") === "true"
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, isInstructor, setIsInstructor }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
