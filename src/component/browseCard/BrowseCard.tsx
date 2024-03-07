interface TrendCardData {
  name: string;
  image_url: string;
  collection: string;
}

interface TrendCardProps {
  item: TrendCardData;
}
const BrowseCard: React.FC<TrendCardProps> = ({ item }) => {
  return (
    <div className="">
      <div className="bg-[#3b3b3b] rounded-3xl md:w-[150px] md:h-[209px] lg:w-[240px] lg:h-[310px]">
        <img
          src={item.image_url}
          alt={item.name}
          className="lg:w-[240px] md:w-[150px] object-cover lg:h-[240px] md:h-[142px] rounded-t-3xl"
        />
        <div className="py-7 pl-5 md:py-4 lg:py-4">
          <h2 className="font-worksens lg:text-[22px] md:text-[22px] font-semibold">
            {item.name.slice(0, 7)}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BrowseCard;
