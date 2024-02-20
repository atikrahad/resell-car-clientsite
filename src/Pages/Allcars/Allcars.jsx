import Banner from "../../Shared/Banner";
import Footer from "../../Shared/Footer";
import Navber from "../../Shared/Navber";
import img from '../../assets/allcars/im.jpg'
import Cars from "./Allcarscomponents/Cars";

const Allcars = () => {
    return (
        <div className="">
            <Navber textc={'text-white'} posi={'absolute'} bg={'bg-transparent'}></Navber>
            <Banner img={img}></Banner>
            <Cars></Cars>
            <Footer></Footer>
        </div>
    );
};

export default Allcars;