import Banner from "../../Shared/Banner";
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
      <Navber textc={"text-white"} posi={"absolute"}></Navber>
      <Banner
        bannerSubtitle={""}
        bannertitle={"Used cars sell and buy here"}
        description={
          "Discover your next ride or sell your current one hassle-free on our user-friendly platform dedicated to buying and selling used cars. With an extensive selection, easy listing tools, and secure transactions, finding your perfect vehicle or connecting with eager buyers has never been simpler. Join us and experience the convenience of online car shopping today!"
        }
        img={img}
      ></Banner>
      <Brands></Brands>
      <Vehicles></Vehicles>
      <hr className="max-w-6xl mx-auto" />
      <Whychoose></Whychoose>
      <Greateprice></Greateprice>
      <Getstart></Getstart>
    </div>
  );
};

export default Home;
