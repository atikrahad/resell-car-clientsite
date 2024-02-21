import Title from "../../../Shared/Title";
import { RxCross2 } from "react-icons/rx";

const Cartsection = () => {
  return (
    <div className="max-w-6xl min-h-svh mx-auto py-20">
      <Title title={"My car cart, ready to buy"}></Title>
      <div
        onMouseEnter={() => {
          document.querySelector(".cross").classList.remove("hidden");
        }}
        onMouseLeave={() => {
          document.querySelector(".cross").classList.add("hidden");
        }}
        className="card w-96 bg-base-100 shadow-xl"
      >
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <button className="absolute hidden cross right-0">
          <RxCross2 className="text-4xl text-red-600"></RxCross2>
        </button>
      </div>
    </div>
  );
};

export default Cartsection;
