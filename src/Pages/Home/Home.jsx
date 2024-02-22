import Banner from "../../Shared/Banner";
import Footer from "../../Shared/Footer";
import Navber from "../../Shared/Navber";
import img from "../../assets/banner/img1.jpg";
import Brands from "./homeComponents/Brands";
import Getstart from "./homeComponents/Getstart";
import Greateprice from "./homeComponents/Greateprice";
import Vehicles from "./homeComponents/Vehicles";
import Whychoose from "./homeComponents/Whychoose";

const Home = () => {
  return (
    <div>
      <Navber bg={'bg-transparent'} textc={'text-white'} posi={'absolute'}></Navber>
      <Banner img={img}></Banner>
      <Brands></Brands>
      <Vehicles></Vehicles>
      <hr className="max-w-6xl mx-auto"/>
      <Whychoose></Whychoose>
      <Greateprice></Greateprice>
      <Getstart></Getstart>
      <Footer></Footer>
    </div>
  );
};

export default Home;
