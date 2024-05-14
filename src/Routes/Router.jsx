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
import App from "../App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Errore></Errore>,
    children: [

      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "update/:id",
        element: <Privateroute><Update></Update></Privateroute>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "addcar",
        element: <Privateroute><Addcar></Addcar></Privateroute>,
      },
      {
        path: 'allcars',
        element: <Allcars></Allcars>,
      },
      {
        path: 'mycart',
        element: <Privateroute><Mycart></Mycart></Privateroute>,
      },
      {
        path: 'cardetails/:id',
        element: <Privateroute><Cardetails></Cardetails></Privateroute>,
      }
    ]
  },
]);

export default router;
