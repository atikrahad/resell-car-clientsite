import Banner from "../../Shared/Banner";
import Navber from "../../Shared/Navber";
import img from "../../assets/banner/about.jpg";
import Section1 from "./Components/Section1";

const About = () => {
  return (
    <div>
      <Navber textc={"text-white"} posi={"absolute"}></Navber>
      <Banner
        bannertitle={"About this site"}
        description={
          "At Resellcar, we're passionate about connecting car enthusiasts with their perfect ride. Founded with a mission to revolutionize the way people buy and sell used cars, our platform offers a seamless and secure online marketplace. With a commitment to transparency, reliability, and customer satisfaction, we strive to make every transaction a positive and rewarding experience for our users. Join our community today and discover the future of car shopping!"
        }
        img={img}
      ></Banner>
      <Section1></Section1>
    </div>
  );
};

export default About;
