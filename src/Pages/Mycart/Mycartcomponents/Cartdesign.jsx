import { RxCross2 } from "react-icons/rx";

const Cartdesign = ({item}) => {
    const {img, price, car_name}=  item
    return (
        
            <div 
          
          className="card w-full h-80 bg-base-100 shadow-xl"
        >
          <figure
          className="relative"
          >
            <img
            className="rounded-xl"
              src={img}
              alt="Shoes"
            />
          <h1 className="absolute text-2xl font-semibold bottom-0 text-center py-2 bg-slate-900 w-full bg-opacity-60 mx-auto">{price}TK</h1>
          </figure>
          <h1 className="text-3xl  py-3">{car_name}</h1>
          <button className="absolute cross right-0">
            <RxCross2 className="text-4xl text-red-600"></RxCross2>
          </button>
        </div>
        
    );
};

export default Cartdesign;