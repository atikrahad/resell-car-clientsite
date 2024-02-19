import CarCard from "../../../Components/CarCard";
import Title from "../../../Shared/Title";

const Vehicles = () => {
    return (
        <div className="max-w-6xl mx-auto py-20">
            <Title title={'Explore All Vehicles'} sub={'View'}></Title>
            <CarCard></CarCard>
        </div>
    );
};

export default Vehicles;