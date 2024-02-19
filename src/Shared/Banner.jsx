
const Banner = ({img}) => {
    return (
        <div style={{
            backgroundImage: `linear-gradient(to bottom, rgba(24,24,24,0.75), rgba(24,24,24,0.75)), url(${img})`,
          }}
          className="max-w-screen-2xl mx-auto bg-cover h-[800px]" 
          >
            <div className="flex py-20 h-full items-center justify-center">
                <div className="space-y-10">
                <h3 className="text-2xl text-center text-white font-semibold">Find cars for sell and buy</h3>
                <h1 className="text-9xl font-semibold text-white">Find your perfect car</h1>
                <div className="p-8  rounded-3xl bg-white">
                    <form>
                        <select name="" id="">
                            <option value="audi">Audi</option>
                            <option value="bmw">BMW</option>
                            <option value="marcedes">Marcedes</option>
                            <option value="ford">Ford</option>
                            <option value="nissan">Nissan</option>
                            <option value="nissan">Nissan</option>
                        </select>
                        <input type="submit" value={'Search car'}/>
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;