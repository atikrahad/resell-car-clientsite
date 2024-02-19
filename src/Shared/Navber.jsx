import { NavLink } from "react-router-dom";
import img from "../assets/logo/logo.png";
import { IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";
const Navber = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const getTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", getTheme);
  }, [theme]);

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
          <ul className="menu text-xl activeRoute font-medium text-white space-x-10 menu-horizontal px-1">
            {nav}
          </ul>
        </div>
        
        <div className="navbar-end">
          <label className="cursor-pointer grid place-items-center">
            <input
              type="checkbox"
              value={true}
              onChange={(e) =>
                e.target.checked ? setTheme("dark") : setTheme("light")
              }
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
