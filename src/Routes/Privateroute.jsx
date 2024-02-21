import Swal from "sweetalert2";
import useContextapi from "../Contextapi/useContextapi";
import Home from "../Pages/Home/Home";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Privateroute = ({ children }) => {
  const { user, loading, login } = useContextapi();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  if (loading) {
    return (
      <div className="h-screen w-[100vw] flex items-center justify-center">
        <h1>loading...</h1>
      </div>
    );
  } else if (user) {
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
