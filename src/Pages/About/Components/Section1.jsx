/* eslint-disable react/no-unescaped-entities */
import img from "../../../assets/banner/about1.jpg";
const Section1 = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-20 gap-10 flex items-center justify-between">
      <img
        className="border-4 w-[40%] border-[#1D232A] hover:border-l-pink-600 hover:border-t-pink-600"
        src={img}
        alt=""
      />
      <div className="w-full space-y-3">
        <h1 className="text-3xl font-bold">WELCOME TO RESELLCAR</h1>
        <p>
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrible vermin. He lay on his
          armour-like back, and if he lifted his head a little he could Gregor
          Samsa woke from troubled dreams, he found himself transformed in his
          bed into a horrible vermin. <br /><br /> morning, when Gregor Samsa woke from
          troubled dreams, he found himself transformed in his bed into a
          horrible vermin. He lay on his armour-like back, and if he lifted his
          head a little he could see Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type scrambled
        </p>
      </div>
    </div>
  );
};

export default Section1;
