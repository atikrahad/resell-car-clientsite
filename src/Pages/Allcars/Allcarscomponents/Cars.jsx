/* eslint-disable react/prop-types */
import CarCard from "../../../Components/CarCard";
import Title from "../../../Shared/Title";

const Cars = ({ datas }) => {
  return (
    <div className="max-w-6xl py-20 mx-auto">
      <Title title={"All Cars"}></Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {datas.map((i) => (
          <CarCard key={i._id} item={i}></CarCard>
        ))}
      </div>
    </div>
  );
};

export default Cars;
