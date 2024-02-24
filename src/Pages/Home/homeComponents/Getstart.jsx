import { FaCaravan } from "react-icons/fa";
import Title from "../../../Shared/Title";
import Swal from "sweetalert2";
import useContextapi from "../../../Contextapi/useContextapi";

const Getstart = () => {
    const {login} = useContextapi()

    const handleLogin = ()=>{
        Swal.fire({
            title: "Login Please!",
            text: "You won't be able to see it",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Login",
          }).then((result) => {
            if (result.isConfirmed) {
              login().then((res) => {
                Swal.fire({
                  title: "Login successfull!",
                  text: "You can sell and buy car.",
                  icon: "success",
                });
                
                console.log(res);
              });
            }
          });
    }

  return (
    <div className="max-w-6xl mx-auto py-20">
        <Title title={"Get Start with us"}></Title>
      <div className="flex flex-col md:flex-row items-center gap-5 justify-between">
        <div className="p-20 space-y-5 rounded-lg bg-[#43ec4396]">
          <h1 className="text-3xl font-medium">Are You Looking For a Car ?</h1>
          <p>
            We are committed to providing our customers with exceptional
            service.
          </p>
          <div className="flex items-center justify-between">
            <button onClick={handleLogin} className="btn btn-primary">Get Start</button>
            <FaCaravan className="text-6xl"></FaCaravan>
          </div>
        </div>
        <div className="p-20 space-y-5 rounded-lg bg-[#ffc0cb85]">
          <h1 className="text-3xl font-medium">Are You Looking For a Car ?</h1>
          <p>
            We are committed to providing our customers with exceptional
            service.
          </p>
          <div className="flex  items-center justify-between">
            <button onClick={handleLogin} className="btn btn-neutral">Get Start</button>
            <FaCaravan className="text-6xl"></FaCaravan>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getstart;
