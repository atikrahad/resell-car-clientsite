import Swal from "sweetalert2";
import useContextapi from "../Contextapi/useContextapi";
import Home from "../Pages/Home/Home";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Privateroute = ({ children }) => {
  const { user, login } = useContextapi();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  if (user) {
    return children;
  } else {
    Swal.fire({
      title: "Login Please!",
      text: "You won't be able to see it",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Login",
    }).then((result) => {
      if (result.isConfirmed) {
        login().then((res) => {
          Swal.fire({
            title: "Login successfull!",
            text: "You can sell and buy car.",
            icon: "success",
          });
          navigate(`${location.pathname}`);
          console.log(res);
        });
      }
    });
    return <Navigate to="/"></Navigate>;
  }
};

export default Privateroute;
