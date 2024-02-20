import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Addcar from "../Pages/Addcar/Addcar";
import Allcars from "../Pages/Allcars/Allcars";

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
    element: <Addcar></Addcar>
  },
  {
    path: '/allcars',
    element: <Allcars></Allcars>
  }
]);

export default router;
