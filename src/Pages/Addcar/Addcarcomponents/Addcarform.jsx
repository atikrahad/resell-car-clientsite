// import {useForm, SubmitHandler} from 'react-hook-form'
import { CiImageOn } from "react-icons/ci";

const Addcarform = () => {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-center text-5xl font-semibold">
        Add new and used car for sell!
      </h1>
      <form className="flex flex-col md:flex-row items-center h-full justify-evenly">
        <div className="w-full ">
          <div
            onClick={() => document.querySelector(".file").click()}
            className="flex flex-col justify-center items-center h-40 border-blue-400 border w-[90%] mx-auto m-2 border-dashed"
          >
            <input type="file" className="file" hidden />
            <CiImageOn className="text-5xl text-blue-700"></CiImageOn>
            <h1 className="text-2xl bg-blue-700 text-white px-2 py-1 rounded-md font-medium">
              Browse Image
            </h1>
          </div>
        </div>
        <div className="w-full space-y-5 p-5  ">
          <input
            type="text"
            placeholder="Car name and model number"
            className="border-0 bg-transparent outline-none w-full p-5 border-b-2"
          />
          <textarea
            placeholder="Description about your car"
            className="border-0 bg-transparent outline-none w-full p-5 border-b-2"
            name=""
            id=""
            cols=""
            rows="5"
          ></textarea>
          <input
            type="number"
            placeholder="Price"
            className="border-0 outline-none w-full bg-transparent p-5 border-b-2"
          />
          <div className="flex items-center gap-2">
            <select
              className="border-0 outline-none w-full bg-transparent p-5 border-b-2"
              name=""
              id=""
            >
              <option value="new">New</option>
              <option value="used">Used</option>
            </select>
            <select
              className="border-0 outline-none w-full bg-transparent p-5 border-b-2"
              name=""
              id=""
            >
              <option value="new">New</option>
              <option value="used">Used</option>
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
