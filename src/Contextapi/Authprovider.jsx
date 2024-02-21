import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../Firebase/firebase";

export const UserProvider = createContext();
const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const login = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };
  useEffect(() => {
    const subsCribe = onAuthStateChanged(auth, (userinf) => {
      setUser(userinf);
      setLoading(false)
    });
    return subsCribe;
  }, [setUser,auth,setLoading]);
  const authInfo = {
    user,
    login,
    loading
  };
  return (
    <UserProvider.Provider value={authInfo}>{children}</UserProvider.Provider>
  );
};

export default Authprovider;
