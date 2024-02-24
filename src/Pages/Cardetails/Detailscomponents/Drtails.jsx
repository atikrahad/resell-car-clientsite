import { NavLink } from "react-router-dom";
import PropTypes from "prop-types"
import Publicaxios from "../../../Api/Publicaxios";
import useContextapi from "../../../Contextapi/useContextapi";
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

const Drtails = ({ item }) => {
  const { user } = useContextapi();
  const {
    car_name,
    price,
    seller_name,
    seller_email,
    seller_img,
    category,
    brand,
    description,
    img,
    fuel,
    speed,
    classes,
    _id,
  } = item;
  const handleCart = () => {
    const email = user?.email;
    const carNo = _id;
    const cartItem = {
      email,
      carNo,
      img,
      price,
      car_name,
    };

    Publicaxios.post("/cart", cartItem).then((res) => {
        if(res.data){
            toast.success('Succesfully added to cart', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                // transition: Bounce,
                });
        }
    });
  };
  return (
    <div className="flex flex-col md:flex-row md:gap-10 items-start">
      <div className="w-full md:h-full md:-skew-y-2">
        <img className="" src={img} alt="" />
        <div className="my-5 flex gap-3 flex-wrap">
          
           
          {user?.email !== seller_email && (
            <button onClick={handleCart} className="btn btn-neutral"> Add Cart
          </button>
          )}
          
          {user?.email === seller_email && (
            <NavLink to={`/update/${_id}`} className="btn btn-neutral">Update car</NavLink>
          )}
        </div>
      </div>
      <div className="w-full md:h-full md:skew-y-2 space-y-2">
        <h1 className="text-5xl font-medium">{car_name}</h1>
        <p className="text-sm">{description}</p>
        <p>Car type: {category}</p>
        <div className="flex items-center gap-4"></div>
        <div className="flex text-xl font-medium gap-4">
          <p>{classes}</p>
          <p>{speed}</p>
          <p>{fuel}</p>
        </div>
        <h1 className="text-2xl font-bold">Brand: {brand}</h1>
        <h1 className="text-3xl">
          <span className="font-semibold">Price</span>: {price}TK
        </h1>
        <div className="flex gap-6 items-center">
          <img className="w-12 rounded-full" src={seller_img} alt="" />
          <h1 className="text-2xl font-semibold">{seller_name}</h1>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};
Drtails.propTypes = {
  item: PropTypes.object.isRequired
}
export default Drtails;
