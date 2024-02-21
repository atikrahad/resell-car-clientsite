import { createContext } from "react";

export const UserProvider = createContext();
const Authprovider = ({ children }) => {
  const authInfo = {name:'atik'};
  return (
    <UserProvider.Provider value={authInfo}>{children}</UserProvider.Provider>
  );
};

export default Authprovider;
