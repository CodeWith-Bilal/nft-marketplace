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
    <div
      className={`${view} w-[315px] h-[505px] gap-[30px] md:w-[330px] md:h-[525px] md:gap-[15px] lg:w-[330px] lg:h-[525px] lg:gap-[15px]`}
    >
      <div className="w-[315px] h-[425px] gap-[15px] md:w-[330px] md:h-[445px] md:gap-[15px] lg:w-[330px] lg:h-[330px]">
        <div className="w-[315px] h-[315px] md:w-[330px] md:h-[330px] lg:w-[330px] lg:h-[330px]">
          <img
            src={item.image_url}
            alt="image"
            className="w-[315px] h-[315px] rounded-[20px] md:w-[330px] md:h-[330px] object-cover lg:w-[330px] lg:h-[330px]"
          />
        </div>
        <div className="w-[315px] h-[95px] gap-[15px] flex mt-4 md:mt-7 md:w-[330px] md:h-[100px] md:gap-[15px]">
          <img
            src={item.image_url}
            alt=""
            className="w-[95px] h-[95px] rounded-[20px] md:w-[100px] md:h-[100px]"
          />
          <img
            src={item.image_url}
            alt=""
            className="w-[95px] h-[95px] rounded-[20px] md:w-[100px] md:h-[100px]"
          />
          <div className="flex justify-center items-center w-[95px] h-[95px] md:w-[100px] md:h-[100px] bg-[#A259FF] rounded-[20px]">
            <span className="font-spance_mono text-[16px] font-semibold md:text-[22px]">
              1025+
            </span>
          </div>
        </div>
        <div className="mt-2">
          <div>
            <h1 className="font-worksens text-[22px] font-semibold">
              {item.name.slice(0, 8)}
            </h1>
          </div>
          <div className="flex gap-[10px]">
            <img
              src={item.image_url}
              alt=""
              className="w-[24px] h-[24px] rounded-full"
            />
            <h2 className="text-[16px] font-worksens md:text-[16px]">
              {item.collection.slice(0, 10)}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
