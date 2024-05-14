import { useEffect, useState } from "react";
import Title from "../../Shared/Title";
import Publicaxios from "../../Api/Publicaxios";
import { useLocation } from "react-router-dom";
import Drtails from "./Detailscomponents/Drtails";
import Navber from "../../Shared/Navber";

const Cardetails = () => {
  const [cardetails, setCardetails] = useState({});

  const location = useLocation();

  useEffect(() => {
    Publicaxios.get(`/car${location.pathname.slice(11)}`).then((res) =>
      setCardetails(res.data)
    );
  }, [location]);

  

  return (
    <div>
        <Navber></Navber>
      <div className="max-w-6xl mx-auto py-20">
        <Title title={"Details about car"}></Title>
        <Drtails item={cardetails}></Drtails>
      </div>
    </div>
  );
};

export default Cardetails;
