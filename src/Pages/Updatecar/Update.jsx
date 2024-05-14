import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Publicaxios from "../../Api/Publicaxios";
import UpdateForm from "./UpdateForm";
const Update = () => {
    const [loaddata, setLoaddata] = useState({})
    const location = useLocation()

    const ids = location?.pathname.slice(8);
    console.log(ids);
    useEffect(()=>{
     Publicaxios.get(`/car/${ids}`)
        .then(res => {
            
            setLoaddata(res.data)
        })
    },[ids])
    return (
        <div>
            <UpdateForm data={loaddata}></UpdateForm>
        </div>
    );
};

export default Update;