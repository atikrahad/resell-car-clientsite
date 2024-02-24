// import {useForm, SubmitHandler} from 'react-hook-form'
import PropTypes from 'prop-types'; 

import { useState } from "react";
import { useForm } from "react-hook-form";
import Publicaxios from "../../Api/Publicaxios";
import { RxCross2 } from "react-icons/rx";
import { CiImageOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const UpdateForm = ({ data }) => {
  const {
    car_name,
    price,
    category,
    brand,
    description,
    img,
    fuel,
    speed,
    classes,
    _id,
  } = data;

  const navigate = useNavigate();

  const [image, setImage] = useState(img);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (e) => {
    e["img"] = image;

    Publicaxios.put(`/car/${_id}`, e).then((res) => {
      if (res.data) {
        navigate(`/${_id}`);
      }
    });

    reset();
    setImage(null);
  };
  return (
    <div className={`max-w-6xl  mx-auto py-10`}>
      <h1 className="text-center text-5xl font-semibold">
        Add new and used car for sell!
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row items-center h-full justify-evenly"
      >
        <div className="w-full ">
          {image ? (
            <div className="relative flex flex-col justify-center items-center  border-blue-400 border w-[90%] mx-auto m-2 border-dashed">
              <img className="w-full" src={image} alt="" />
              <button
                onClick={() => setImage(null)}
                className="absolute -top-1 right-0 text-5xl text-red-600 "
              >
                <RxCross2></RxCross2>
              </button>
            </div>
          ) : (
            <div
              onClick={() => document.querySelector(".file").click()}
              className="flex flex-col justify-center items-center border-blue-400 border w-[90%] py-10 mx-auto m-2 border-dashed"
            >
              <input
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  const img = e.target.files[0];
                  const data = new FormData();
                  data.append("image", img);
                  fetch(
                    "https://api.imgbb.com/1/upload?key=ce85064e81684efe89c25151af809230",
                    {
                      method: "POST",
                      body: data,
                    }
                  )
                    .then((res) => res.json())
                    .then((data) => setImage(data.data.url));
                }}
                type="file"
                className="file"
                hidden
              />
              <CiImageOn className="text-5xl text-blue-700"></CiImageOn>
              <h1 className="text-2xl bg-blue-700 text-white px-2 py-1 rounded-md font-medium">
                Browse Image
              </h1>
            </div>
          )}
        </div>
        <div className="w-full space-y-5 p-5  ">
          <input
            type="text"
            maxLength={30}
            defaultValue={car_name}
            {...register("car_name")}
            placeholder="Car name and model number"
            className="border-0 bg-transparent outline-none w-full p-5 border-b-2"
          />
          <textarea
            placeholder="Shortly Description about your car"
            className="border-0 bg-transparent outline-none w-full p-5 border-b-2"
            name=""
            defaultValue={description}
            {...register("description")}
            id=""
            cols=""
            maxLength={150}
            rows="3"
          ></textarea>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Price"
              defaultValue={price}
              {...register("price")}
              className="border-0 outline-none w-full bg-transparent p-5 border-b-2"
            />
            <input
              type="number"
              placeholder="Speed"
              defaultValue={speed}
              {...register("speed")}
              className="border-0 outline-none w-full bg-transparent p-5 border-b-2"
            />
          </div>
          <div className="flex items-center gap-2">
            <select
              className="border-0 outline-none w-full bg-transparent p-5 border-b-2"
              name=""
              defaultValue={fuel}
              {...register("fuel")}
              id=""
            >
              <option value="petrol">Petrol</option>
              <option value="disel">Disel</option>
              <option value="octen">Octen</option>
            </select>
            <select
              className="border-0 outline-none w-full bg-transparent p-5 border-b-2"
              name=""
              defaultValue={classes}
              {...register("classes")}
              id=""
            >
              <option value="Automatic">Automatic</option>
              <option value="MUD">MUD</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <select
              className="border-0 outline-none w-full bg-transparent p-5 border-b-2"
              name=""
              defaultValue={category}
              {...register("category")}
              id=""
            >
              <option value="new">New</option>
              <option value="used">Used</option>
            </select>
            <select
              className="border-0 outline-none w-full bg-transparent p-5 border-b-2"
              name=""
              defaultValue={brand}
              {...register("brand")}
              id=""
            >
              <option value="audi">Audi</option>
              <option value="ford">Ford</option>
              <option value="bmw">BMW</option>
              <option value="marcedes">Marcedes-Benz</option>
              <option value="toyota">Toyota</option>
            </select>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="submit"
              className="btn w-[70%] btn-primary text-xl font-semibold my-5"
              value={"Add Car"}
            />
            <button className="btn text-xl my-5 btn-warning w-[30%]">
              Delete car
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
UpdateForm.propTypes = {
  data: PropTypes.object.isRequired
}

export default UpdateForm;
