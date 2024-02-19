import { NavLink } from "react-router-dom";
import img from "../assets/logo/logo.png";
import { IoMenu } from "react-icons/io5";
const Navber = () => {
  const nav = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About Us</NavLink>
      <NavLink to={"/addcar"}>Add Car</NavLink>
      <NavLink to={"/mycart"}>My Cart</NavLink>
    </>
  );

  return (
    <div className="absolute w-full">
      <div className="navbar max-w-screen-lg mx-auto bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <IoMenu className="text-3xl text-white" />
            </div>
            <ul
              tabIndex={0}
              className="menu text-xl font-medium text-Black menu-sm dropdown-content activeRoute mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {nav}
            </ul>
          </div>
          <NavLink to={'/'}>
            <div className="flex items-center">
              <img className="w-20" src={img} alt="" />
              <h1 className="text-3xl text-cyan-400 font-medium">
                RESell<span className="text-white font-bold">Car</span>
              </h1>
            </div>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-xl activeRoute font-medium text-white space-x-10 menu-horizontal px-1">
            {nav}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
