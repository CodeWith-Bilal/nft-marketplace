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
    <>
      <div className="w-[147px] h-[209px] md:w-[150px] lg:w-[240px] lg:h-[316px]  bg-[#3B3B3B] rounded-[20px]">
        <div>
          <img
            src={item.image_url}
            alt=""
            className="w-[147px] h-[142px] md:w-[150px] rounded-t-[20px] lg:w-[240px] lg:h-[240px]"
          />
        </div>
        <div className="w-[147px] h-[67px] gap-[25px] lg:w-[240px] lg:h-[76px]">
          <h2 className="text-[16px] px-7 pt-5 font-worksens font-semibold lg:text-[22px]">
            {item.name.slice(0, 8)}
          </h2>
        </div>
      </div>
    </>
  );
};

export default BrowseCard;
