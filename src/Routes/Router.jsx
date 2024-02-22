import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Addcar from "../Pages/Addcar/Addcar";
import Allcars from "../Pages/Allcars/Allcars";
import Privateroute from "./Privateroute";
import Mycart from "../Pages/Mycart/Mycart";
import Cardetails from "../Pages/Cardetails/Cardetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/addcar",
    element: <Privateroute><Addcar></Addcar></Privateroute>
  },
  {
    path: '/allcars',
    element: <Privateroute><Allcars></Allcars></Privateroute>
  },
  {
    path: '/mycart',
    element: <Privateroute><Mycart></Mycart></Privateroute>
  },
  {
    path: '/:id',
    element: <Privateroute><Cardetails></Cardetails></Privateroute>,
  }
]);

export default router;
