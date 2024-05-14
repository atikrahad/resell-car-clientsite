import { useEffect, useState } from "react";
import Banner from "../../Shared/Banner";
import Navber from "../../Shared/Navber";
import img from "../../assets/allcars/im.jpg";
import Publicaxios from "../../Api/Publicaxios";
import Cars from "./Allcarscomponents/Cars";

const Allcars = () => {
    const [carsdata, setCarsdata] = useState([]);
    useEffect(() => {
      Publicaxios.get("/resentcars").then((res) => setCarsdata(res.data));
    }, []);
  return (
    <div className="">
      <Navber
        textc={"text-white"}
        posi={"absolute"}
        bg={"bg-transparent"}
      ></Navber>
      <Banner
        bannerSubtitle={"Choose your dream cars for buy"}
        bannertitle={"Filter cars by search"}
        img={img}
        search={
          <div className="p-8  rounded-3xl bg-white">
            <form>
              <select name="" className="bg-transparent" id="">
                <option value="audi">Audi</option>
                <option value="bmw">BMW</option>
                <option value="marcedes">Marcedes</option>
                <option value="ford">Ford</option>
                <option value="nissan">Nissan</option>
                <option value="nissan">Nissan</option>
              </select>
              <input type="submit" value={"Search car"} />
            </form>
          </div>
        }
      ></Banner>
      <Cars datas={carsdata}></Cars>
    </div>
  );
};

export default Allcars;
