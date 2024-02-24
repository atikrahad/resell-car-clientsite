import { useEffect, useState } from "react";
import Title from "../../../Shared/Title";
import Publicaxios from "../../../Api/Publicaxios";
import useContextapi from "../../../Contextapi/useContextapi";
import Cartdesign from "./Cartdesign";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Cartsection = () => {
  const { user } = useContextapi();
  const [cartdata, setCartdata] = useState([]);
  useEffect(() => {
    Publicaxios.get(`/carts?email=${user?.email}`).then((res) =>
      setCartdata(res.data)
    );
  }, [user]);

  const handleCartdelete = (a) => {
    
    console.log(1);
    const fillterd = cartdata.filter((i) => i !== a);
    setCartdata(fillterd);
    Publicaxios.delete(`/carts?id=${a._id}`).then((res) => {
      if(res.data){
        toast.success("delete successfull", {
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
  console.log(cartdata);
  return (
    <div className="md:max-w-6xl w-[90%] min-h-svh mx-auto py-20">
      <Title title={"My car cart, ready to buy"}></Title>
      {cartdata.length === 0 && (
        <div className="h-[350px] flex items-center justify-center">
          <h1 className="text-5xl font-bold">
            You are not added any car to your cart
          </h1>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cartdata.map((item) => (
          <Cartdesign
            key={item._id}
            handleCartdelete={handleCartdelete}
            item={item}
          ></Cartdesign>
        ))}
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Cartsection;
