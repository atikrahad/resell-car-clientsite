const BrandCard = ({ item }) => {
  const { image_url, name } = item;
  return (
    <div className="mx-2">
      <img className="w-full rounded-md h-52 border" src={image_url} alt="" />
      <h1 className="text-2xl font-semibold py-3 ">{name}</h1>
    </div>
  );
};

export default BrandCard;
