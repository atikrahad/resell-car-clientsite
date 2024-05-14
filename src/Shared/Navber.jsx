import { NavLink } from "react-router-dom";
import PropTypes from "prop-types"
import img from "../assets/logo/logo.png";
import { IoMenu } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from "react";
import useContextapi from "../Contextapi/useContextapi";
const Navber = ({ bg, posi, textc }) => {
  const { login, user, Logout } = useContextapi();

  

  const userLOgin = () => {
    login()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const userLogout = () => {
    Logout();
  };

  const nav = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to="/allcars">Cars</NavLink>
      <NavLink to={"/about"}>About Us</NavLink>
      {user && <NavLink to={"/addcar"}>Add Car</NavLink>}
      {user && <NavLink to={"/mycart"}>My Cart</NavLink>}
    </>
  );

  return (
    <div className={`${posi} w-full`}>
      <div className={`navbar max-w-screen-lg mx-auto ${bg}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <IoMenu className="text-3xl text-primary" />
            </div>
            <ul
              tabIndex={0}
              className="menu text-xl font-medium text-Black menu-sm dropdown-content activeRoute mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {nav}
            </ul>
          </div>
          <NavLink to={"/"}>
            <div className="flex items-center">
              <img className="w-20" src={img} alt="" />
              <h1 className="text-3xl text-cyan-400 font-medium">
                RESell<span className="text-white font-bold">Car</span>
              </h1>
            </div>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul
            className={`menu text-xl ${textc} activeRoute font-medium space-x-10 menu-horizontal px-1`}
          >
            {nav}
          </ul>
        </div>

        <div className="navbar-end">
          <div className="dropdown md:ml-3 dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="m-1">
              {user ? (
                <img className="w-12 rounded-full" src={user.photoURL} alt="" />
              ) : (
                <CgProfile className="text-5xl text-primary"></CgProfile>
              )}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow shadow-slate-500 bg-base-100 rounded-box w-40"
            >
              {user ? (
                <button onClick={userLogout}>Logout</button>
              ) : (
                <button onClick={userLOgin}>Login with google</button>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

Navber.propTypes = {
  bg: PropTypes.string,
  posi: PropTypes.string,
  textc: PropTypes.string,
}

export default Navber;
