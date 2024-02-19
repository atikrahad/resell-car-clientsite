import Banner from "../../Shared/Banner";
import Footer from "../../Shared/Footer";
import Navber from "../../Shared/Navber";
import img from "../../assets/banner/img1.jpg";
import Brands from "./homeComponents/Brands";
import Vehicles from "./homeComponents/Vehicles";

const Home = () => {
  return (
    <div>
      <Navber></Navber>
      <Banner img={img}></Banner>
      <Brands></Brands>
      <Vehicles></Vehicles>
      <Footer></Footer>
    </div>
  );
};

export default Home;
