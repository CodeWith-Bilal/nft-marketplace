import React from "react";

interface TrendCardData {
  name: string;
  image_url: string;
  collection: string;
}

interface TrendCardProps {
  item: TrendCardData;
}

const DiscoverCard: React.FC<TrendCardProps> = ({ item }) => {
  return (
    <>
      <div className="bg-[#3b3b3b] rounded-3xl md:w-[330px] md:h-[330px] lg:w-[330px] lg:h-[469px]">
        <img
          src={item.image_url}
          alt={item.name}
          className="lg:w-[330px] md:w-[330px] object-cover lg:h-[296px] md:h-[250px] rounded-t-2xl"
        />
        <div className="py-7 pl-5 md:py-4 lg:py-7">
          <h2 className="font-worksens lg:text-2xl md:text-[22px] font-semibold">
            {item.name}
          </h2>
          <div className="flex ">
            <img
              src={item.image_url}
              alt=""
              className="lg:w-[30px] md:w-[24px] rounded-full object-cover"
            />
            <p className="flex justify-center items-center pl-4 md:text-[16px]">
              {item.collection.slice(0, 10)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoverCard;
