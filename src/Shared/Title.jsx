import { GoArrowUpRight } from "react-icons/go";

const Title = ({ title, sub }) => {
  return (
    <div className="flex py-5 flex-wrap items-center justify-between">
      <h1 className="text-3xl font-medium">{title}</h1>
      <div className="flex items-center">
        <h3 className="text-xl">{sub}</h3>
        <GoArrowUpRight className="text-2xl" />
      </div>
    </div>
  );
};

export default Title;
