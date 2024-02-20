import CarCard from "../../../Components/CarCard";
import Title from "../../../Shared/Title";

const Cars = () => {
    return (
        <div className="max-w-6xl py-20 mx-auto">
            <Title title={"All Cars"}></Title>
            <CarCard></CarCard>
        </div>
    );
};

export default Cars;