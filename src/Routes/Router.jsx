import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Addcar from "../Pages/Addcar/Addcar";
import Allcars from "../Pages/Allcars/Allcars";
import Privateroute from "./Privateroute";
import Mycart from "../Pages/Mycart/Mycart";
import Cardetails from "../Pages/Cardetails/Cardetails";
import Update from "../Pages/Updatecar/Update";
import Errore from "../Pages/Errorpage/Errore";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Errore></Errore>
  },
  {
    path: "update/:id",
    element: <Privateroute><Update></Update></Privateroute>,
    errorElement: <Errore></Errore>
  },
  {
    path: "/about",
    element: <About></About>,
    errorElement: <Errore></Errore>
  },
  {
    path: "/addcar",
    element: <Privateroute><Addcar></Addcar></Privateroute>,
    errorElement: <Errore></Errore>
  },
  {
    path: '/allcars',
    element: <Privateroute><Allcars></Allcars></Privateroute>,
    errorElement: <Errore></Errore>
  },
  {
    path: '/mycart',
    element: <Privateroute><Mycart></Mycart></Privateroute>,
    errorElement: <Errore></Errore>
  },
  {
    path: '/:id',
    element: <Privateroute><Cardetails></Cardetails></Privateroute>,
    errorElement: <Errore></Errore>
  }
]);

export default router;
