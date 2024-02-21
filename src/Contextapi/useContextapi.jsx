import { useContext } from "react";
import { UserProvider } from "./Authprovider";

const useContextapi = () => {
  const authApi = useContext(UserProvider);
  return authApi;
};

export default useContextapi;
