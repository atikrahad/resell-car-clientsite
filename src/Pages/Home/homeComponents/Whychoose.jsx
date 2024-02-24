import Title from "../../../Shared/Title";
import { MdOutlinePriceChange } from "react-icons/md";
import { FaMendeley } from "react-icons/fa";
import { GiPriceTag } from "react-icons/gi";
import { FaCaravan } from "react-icons/fa";

const Whychoose = () => {
    return (
        <div className="max-w-6xl mx-auto my-32">
            <Title title={'Why Choose Us?'}></Title>
            <div className="flex md:flex-nowrap flex-wrap items-center gap-5 justify-between">
                <div className="space-y-4 flex flex-col mx-auto">
                    <MdOutlinePriceChange className="text-7xl"></MdOutlinePriceChange>
                    <h1 className="text-2xl">Special Financing Offers</h1>
                    <p>Our stress-free finance department that can find financial solutions to save you money.</p>
                </div>
                <div className="space-y-4 flex flex-col mx-auto">
                    <FaMendeley className="text-7xl"></FaMendeley>
                    <h1 className="text-2xl">Trusted Car Dealership</h1>
                    <p className="text-justify">Our stress-free finance department that can find financial solutions to save you money.</p>
                </div>
                <div className="space-y-4 flex flex-col mx-auto">
                    <GiPriceTag className="text-7xl"></GiPriceTag>
                    <h1 className="text-2xl">Transparent Pricing</h1>
                    <p>Our stress-free finance department that can find financial solutions to save you money.</p>
                </div>
                <div className="space-y-4 flex flex-col mx-auto">
                    <FaCaravan className="text-7xl"></FaCaravan>
                    <h1 className="text-2xl">Expert Car Service</h1>
                    <p>Our stress-free finance department that can find financial solutions to save you money.</p>
                </div>
            </div>
        </div>
    );
};

export default Whychoose;