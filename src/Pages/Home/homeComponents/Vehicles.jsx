import { useEffect, useState } from "react";
import CarCard from "../../../Components/CarCard";
import Title from "../../../Shared/Title";
import Publicaxios from "../../../Api/Publicaxios";
import Slider from "react-slick";

const Vehicles = () => {
  const [carsdata, setCarsdata] = useState([]);
  useEffect(() => {
    Publicaxios.get("/resentcars").then((res) => setCarsdata(res.data));
  }, []);
  console.log(carsdata);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto py-20">
      <div className="w-[85%] md:w-full mx-auto">
      <Title title={"Explore All Vehicles"} sub={"View"}></Title>
      <Slider {...settings}>

        {carsdata?.map((item) => (
          <CarCard key={item._id} item={item}></CarCard>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default Vehicles;
