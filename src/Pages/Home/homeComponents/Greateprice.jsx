import Slider from "react-slick";
import Title from "../../../Shared/Title";
import CarCard from "../../../Components/CarCard";
import { useEffect, useState } from "react";
import Publicaxios from "../../../Api/Publicaxios";


const Greateprice = () => {
    const [topcars, setTopcars] = useState([])

    useEffect(()=>{
        Publicaxios.get("/greateprice",)
        .then(res => setTopcars(res.data))
    },[])
    console.log(topcars);

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
            <Title title={"Greate Price best cars"}></Title>
                <Slider {...settings}>
                    
                    {
                        topcars.map(item => <CarCard key={item._id} item={item}></CarCard>)
                    }
                </Slider>
            </div>
            
        </div>
    );
};

export default Greateprice;