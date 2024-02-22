import { useEffect, useState } from "react";
import Footer from "../../Shared/Footer";
import Navber from "../../Shared/Navber";
import Title from "../../Shared/Title";
import Publicaxios from "../../Api/Publicaxios";
import { useLocation } from "react-router-dom";
import Drtails from "./Detailscomponents/Drtails";
import { data } from "autoprefixer";

const Cardetails = () => {
  const [cardetails, setCardetails] = useState({});

  const location = useLocation();

  useEffect(() => {
    Publicaxios.get(`/car${location.pathname}`).then((res) =>
      setCardetails(res.data)
    );
  }, [location]);

  console.log(cardetails);

  return (
    <div>
      <Navber></Navber>
      <div className="max-w-6xl mx-auto py-20">
        <Title title={"Details about car"}></Title>
        <Drtails item={cardetails}></Drtails>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Cardetails;
