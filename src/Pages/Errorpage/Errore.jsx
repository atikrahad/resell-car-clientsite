import { NavLink } from "react-router-dom";

const Errore = () => {
    return (
        <div className="flex items-center mx-auto justify-center h-screen">
            <div className="w-[90%] mx-auto flex items-center justify-center flex-col">
                <h1 className="text-7xl text-center font-semibold">404</h1>
                <p className="text-center">Sorry Your searched location is not found</p>
                <NavLink className="btn w-52 mx-auto text-center btn-warning text-2xl font-semibold" to='/'>Go back home</NavLink>
            </div>
        </div>
    );
};

export default Errore;