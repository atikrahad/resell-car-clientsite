/* eslint-disable react/prop-types */
import { ToastContainer,  } from "react-toastify";
import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";
const Banner = ({ img,bannerSubtitle, bannertitle, search,description }) => {
  
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(24,24,24,0.75), rgba(24,24,24,0.75)), url(${img})`,
      }}
      className="max-w-screen-2xl object-contain mx-auto bg-cover h-[900px]"
    >
      <div className="flex py-20 h-full items-center justify-center">
        <div className="space-y-10">
          <h3 className="text-2xl text-center text-white font-semibold">
            {bannerSubtitle}
          </h3>
          <h1 className="text-4xl md:text-5xl lg:text-8xl text-center font-semibold text-white">
            {bannertitle}
          </h1>
          <p className="text-center mx-auto md:text-2xl text-white leading-10 font-semibold md:w-[70%]">
            {description}
          </p>
          
            {search}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
Banner.propTypes = {
  img: PropTypes.any,
};
export default Banner;
