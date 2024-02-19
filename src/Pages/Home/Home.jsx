import Banner from "../../Shared/Banner";
import Navber from "../../Shared/Navber";
import img from '../../assets/banner/img1.jpg'

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner img={img}></Banner>
        </div>
    );
};

export default Home;