import { useEffect, useState } from "react";
import Banner from "../../Shared/Banner";
import Navber from "../../Shared/Navber";
import img from "../../assets/allcars/im.jpg";
import Publicaxios from "../../Api/Publicaxios";
import Cars from "./Allcarscomponents/Cars";

const Allcars = () => {
  const [carsdata, setCarsdata] = useState([]);
  const [brandName, setBrandName] = useState();
  const [price, setPrice] = useState();
  console.log(brandName)

  const handleSearch = (e) => {
    e.preventDefault();
    setBrandName(e.target.brand.value);
    setPrice(e.target.price.value);
    e.target.reset()
  };

  useEffect(() => {
    if(brandName || price){
      Publicaxios.get(`/allcars?name=${brandName}&price=${price}`).then((res) =>
        setCarsdata(res.data)
      );
    }else{
      Publicaxios.get(`/allcars?`).then((res) =>
        setCarsdata(res.data)
      );

    }
  }, [brandName, price]);
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
            <form onSubmit={handleSearch} className="flex items-center justify-between">
              <select name="brand" className="bg-transparent outline-none w-[40%]" id="">
                <option value={''}>Select Brand Name</option>
                <option value="audi">Audi</option>
                <option value="bmw">BMW</option>
                <option value="marcedes">Marcedes</option>
                <option value="ford">Ford</option>
                <option value="nissan">Nissan</option>
                <option value="nissan">Nissan</option>
              </select>
              <input type="number" placeholder="Price" className="outline-none bg-white w-[40%]" name="price" />
              <input type="submit" className="md:text-2xl" value={"Search car"} />
            </form>
          </div>
        }
      ></Banner>
      <Cars datas={carsdata}></Cars>
    </div>
  );
};

export default Allcars;
