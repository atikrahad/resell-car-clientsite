import Title from "../../../Shared/Title";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import BrandCard from "../../../Components/BrandCard";

const Brands = () => {
  const [cardata, setCardata] = useState([]);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
  useEffect(() => {
    fetch("car.json")
      .then((res) => res.json())
      .then((data) => setCardata(data.top_car_brands));
  }, []);
  console.log(cardata);
  return (
    <div className="max-w-6xl  py-20 mx-auto">
      <div className="w-[95%] mx-auto">
        <Title
          title={"Explore Our Premium Brands"}
          sub={"See all brands"}
        ></Title>

        <div className="slider-container">
          <Slider {...settings}>
            {cardata.map((item) => (
              <BrandCard key={item.id} item={item}></BrandCard>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Brands;
