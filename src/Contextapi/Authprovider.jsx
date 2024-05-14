import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types"
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
  const Logout = ()=>{
    setLoading(true)
    return signOut(auth)
  }
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
    loading,
    Logout
  };
  return (
    <UserProvider.Provider value={authInfo}>{children}</UserProvider.Provider>
  );
};

Authprovider.propTypes ={
  children: PropTypes.node,
  
}

export default Authprovider;
