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
  const [loading, setLoading] = useState<boolean>(true);
  const [isInstructor, setIsInstructor] = useState<boolean>(
    false || localStorage.getItem("isInstructor") === "true"
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      setLoading(false); 
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loading, setLoading, isInstructor, setIsInstructor }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
