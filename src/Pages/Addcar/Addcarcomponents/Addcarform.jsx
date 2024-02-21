// import {useForm, SubmitHandler} from 'react-hook-form'
import { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import {useForm} from 'react-hook-form'
import useContextapi from "../../../Contextapi/useContextapi";

const Addcarform = () => {
  const {user} = useContextapi()
  
  const [image, setImage] = useState(null);
  const {register, handleSubmit, reset} = useForm()
  const onSubmit = async e =>{
    e['img'] = image;
    e['seller-name'] = user?.displayName;
    e['seller-img'] = user?.photoURL;
    e['seller-email'] = user?.email;
    console.log(e);

    reset()
    setImage(null)
  }
  return (
    <div className={`max-w-6xl  mx-auto py-10`}>
      <h1 className="text-center text-5xl font-semibold">
        Add new and used car for sell!
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row items-center h-full justify-evenly">
        <div className="w-full ">
          {image ? (
            <div className="relative flex flex-col justify-center items-center  border-blue-400 border w-[90%] mx-auto m-2 border-dashed">
              <img className="w-full" src={image} alt="" />
              <button onClick={()=>setImage(null)} className="absolute -top-1 right-3 text-5xl text-red-600 ">
                x
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
            {...register('car-name')}
            placeholder="Car name and model number"
            className="border-0 bg-transparent outline-none w-full p-5 border-b-2"
          />
          <textarea
            placeholder="Description about your car"
            className="border-0 bg-transparent outline-none w-full p-5 border-b-2"
            name=""
            {...register('description')}
            id=""
            cols=""
            rows="5"
          ></textarea>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Price"
              {...register('price')}
              className="border-0 outline-none w-full bg-transparent p-5 border-b-2"
            />
            <input
              type="number"
              placeholder="Speed"
              {...register('speed')}
              className="border-0 outline-none w-full bg-transparent p-5 border-b-2"
            />
          </div>
          <div className="flex items-center gap-2">
            <select
              className="border-0 outline-none w-full bg-transparent p-5 border-b-2"
              name=""
              {...register('fuel')}
              id=""
            >
              <option value="petrol">Petrol</option>
              <option value="disel">Disel</option>
              <option value="octen">Octen</option>
            </select>
            <select
              className="border-0 outline-none w-full bg-transparent p-5 border-b-2"
              name=""
              {...register('class')}
              id=""
            >
              <option value="auto">Automatic</option>
              <option value="mud">MUD</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <select
              className="border-0 outline-none w-full bg-transparent p-5 border-b-2"
              name=""
              {...register('category')}
              id=""
            >
              <option value="new">New</option>
              <option value="used">Used</option>
            </select>
            <select
              className="border-0 outline-none w-full bg-transparent p-5 border-b-2"
              name=""
              {...register('brand')}
              id=""
            >
              <option value="audi">Audi</option>
              <option value="ford">Ford</option>
              <option value="bmw">BMW</option>
              <option value="marcedes">Marcedes-Benz</option>
              <option value="toyota">Toyota</option>
            </select>
          </div>
          <input
            type="submit"
            className="btn btn-primary text-xl font-semibold w-full my-5"
            value={"Add Car"}
          />
        </div>
      </form>
    </div>
  );
};

export default Addcarform;
