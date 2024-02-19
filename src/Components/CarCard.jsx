import { BsSpeedometer2 } from "react-icons/bs";
import { RiOilLine } from "react-icons/ri";
import { TbAutomaticGearbox } from "react-icons/tb";
import { NavLink } from "react-router-dom";
const CarCard = () => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://demoapus1.com/boxcar/wp-content/uploads/2023/11/car5-660x440.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="flex items-center gap-4">
            <img
              className="w-16 h-16 rounded-full"
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
              alt=""
            />
            <h1 className="text-2xl font-medium">Corolla Altis -2023</h1>
          </div>
          <hr />
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center justify-center">
              <BsSpeedometer2 className="text-2xl" />
              <h3 className="text-xl">20 Miles</h3>
            </div>
            <div className="flex flex-col items-center justify-center">
              <RiOilLine className="text-2xl" />
              <h3 className="text-xl">Petrol</h3>
            </div>
            <div className="flex flex-col items-center justify-center">
              <TbAutomaticGearbox className="text-2xl" />
              <h3 className="text-xl">Automatic</h3>
            </div>
          </div>
          <hr />
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">$60000</h1>
            <NavLink>View Details</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
