import React from "react";

interface TrendCardData {
  name: string;
  image_url: string;
  collection: string;
}

interface TrendCardProps {
  item: TrendCardData;
  view: string;
}

const TrendingCard: React.FC<TrendCardProps> = ({ item, view }) => {
  return (
    <div className={`${view} flex flex-col`}>
      <div className="">
        <img
          src={item.image_url}
          alt={item.name}
          className="lg:w-[330px] md:w-[330px] object-cover lg:h-[330px] md:h-[330px] rounded-2xl"
        />
      </div>
      <div className="flex gap-[15px] mt-4">
        <img
          src={item.image_url}
          alt=""
          className="lg:w-[100px] lg:h-[100px] object-cover rounded-2xl"
        />
        <img
          src={item.image_url}
          alt=""
          className="lg:w-[100px] lg:h-[100px] object-cover rounded-2xl"
        />
        <img
          src={item.image_url}
          alt=""
          className="lg:w-[100px] lg:h-[100px] object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default TrendingCard;
