import { useEffect, useState } from "react";
import Title from "../../../Shared/Title";
import { RxCross2 } from "react-icons/rx";
import Publicaxios from "../../../Api/Publicaxios";
import useContextapi from "../../../Contextapi/useContextapi";
import Cartdesign from "./Cartdesign";

const Cartsection = () => {
  const { user } = useContextapi();
  const [cartdata, setCartdata] = useState([]);
  useEffect(() => {
    Publicaxios.get(`/carts?email=${user?.email}`).then((res) =>
      setCartdata(res.data)
    );
  }, [user]);
  console.log(cartdata);
  return (
    <div className="max-w-6xl min-h-svh mx-auto py-20">
      <Title title={"My car cart, ready to buy"}></Title>
      {
        cartdata.length ===0 && <div className="h-[350px] flex items-center justify-center"><h1 className="text-5xl font-bold">You are not added any car to your cart</h1></div>
      }
      <div className="flex justify-between md:flex-nowrap gap-5 flex-wrap">
        {cartdata.map((item) => (
          <Cartdesign key={item._id} item={item}></Cartdesign>
        ))}
      </div>
    </div>
  );
};

export default Cartsection;
