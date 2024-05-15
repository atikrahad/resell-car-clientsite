/* eslint-disable react/no-unescaped-entities */
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa6";
import { LuBadgeDollarSign } from "react-icons/lu";
import { MdOutlineSupportAgent } from "react-icons/md";

const Advantage = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-10">
      <h1 className="text-center text-3xl font-semibold">Our Advantages</h1>
      <div className="grid gap-3 py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex p-5 flex-col items-center justify-center space-y-2 bg-[#1f262ed3] shadow-xl">
          <RiSecurePaymentLine className="text-cyan-600 text-7xl" />
          <h1 className="text-center text-cyan-600 text-2xl font-medium">
            Highly Secured
          </h1>
          <p className="text-center">
            Discover the pinnacle of automotive security at our 'Highly Secured'
            Advantage Point. With state-of-the-art anti-theft systems, advanced
            vehicle tracking, and robust security features, we prioritize the
            safety of your vehicle like no other. Rest assured, your car is in
            the safest hands possible, providing you with peace of mind on every
            journey.
          </p>
        </div>
        <div className="flex p-5 flex-col items-center justify-center space-y-2 bg-[#1f262ed3] shadow-xl">
          <FaHandshake className="text-cyan-600 text-7xl" />
          <h1 className="text-center text-cyan-600 text-2xl font-medium">
          Trusted Agents
          </h1>
          <p className="text-center">
            Discover the pinnacle of automotive security at our 'Highly Secured'
            Advantage Point. With state-of-the-art anti-theft systems, advanced
            vehicle tracking, and robust security features, we prioritize the
            safety of your vehicle like no other. Rest assured, your car is in
            the safest hands possible, providing you with peace of mind on every
            journey.
          </p>
        </div>
        <div className="flex p-5 flex-col items-center justify-center space-y-2 bg-[#1f262ed3] shadow-xl">
          <LuBadgeDollarSign className="text-cyan-600 text-7xl" />
          <h1 className="text-center text-cyan-600 text-2xl font-medium">
          Get an Offer
          </h1>
          <p className="text-center">
            Discover the pinnacle of automotive security at our 'Highly Secured'
            Advantage Point. With state-of-the-art anti-theft systems, advanced
            vehicle tracking, and robust security features, we prioritize the
            safety of your vehicle like no other. Rest assured, your car is in
            the safest hands possible, providing you with peace of mind on every
            journey.
          </p>
        </div>
        <div className="flex p-5 flex-col items-center justify-center space-y-2 bg-[#1f262ed3] shadow-xl">
          <MdOutlineSupportAgent className="text-cyan-600 text-7xl" />
          <h1 className="text-center text-cyan-600 text-2xl font-medium">
          Free Support
          </h1>
          <p className="text-center">
            Discover the pinnacle of automotive security at our 'Highly Secured'
            Advantage Point. With state-of-the-art anti-theft systems, advanced
            vehicle tracking, and robust security features, we prioritize the
            safety of your vehicle like no other. Rest assured, your car is in
            the safest hands possible, providing you with peace of mind on every
            journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
