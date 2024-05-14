import { BsSpeedometer2 } from "react-icons/bs";
import PropTypes from "prop-types"
import { RiOilLine } from "react-icons/ri";
import { TbAutomaticGearbox } from "react-icons/tb";
import { NavLink } from "react-router-dom";
const CarCard = ({item}) => {
  const {car_name,price,seller_img,img,fuel,speed,classes,_id} = item;
  return (
    <div className="mx-5">
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img 
          className="h-52 w-full"
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="flex items-center gap-4">
            <img
              className="w-16 h-16 rounded-full"
              src={seller_img}
              alt=""
            />
            <h1 className="text-xl font-medium">{car_name}</h1>
          </div>
          <hr />
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center justify-center">
              <BsSpeedometer2 className="text-2xl" />
              <h3 className="text-xl">{speed}</h3>
            </div>
            <div className="flex flex-col items-center justify-center">
              <RiOilLine className="text-2xl" />
              <h3 className="text-xl">{fuel}</h3>
            </div>
            <div className="flex flex-col items-center justify-center">
              <TbAutomaticGearbox className="text-2xl" />
              <h3 className="text-xl">{classes}</h3>
            </div>
          </div>
          <hr />
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">{price}TK</h1>
            <NavLink to={`/cardetails/${_id}`}>View Details</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
CarCard.propTypes = {
  item: PropTypes.object.isRequired
}
export default CarCard;
