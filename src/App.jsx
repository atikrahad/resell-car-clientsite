import { Outlet } from "react-router-dom"
import Footer from "./Shared/Footer"
import Navber from "./Shared/Navber"


function App() {

  return (
    <div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
