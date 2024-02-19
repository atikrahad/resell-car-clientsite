import Banner from "../../Shared/Banner";
import Footer from "../../Shared/Footer";
import Navber from "../../Shared/Navber";
import img from '../../assets/banner/img1.jpg'

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner img={img}></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;