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
    <>
      <div className={``}>
        <div className={``}>
          <div className={`w-[330px] h-[330px] `}>
            <img
              src={item.image_url}
              alt=""
              className={`w-330px h-330px rounded-2xl ${view}`}
            />
          </div>
          <div className="flex gap-[15px] mt-4">
            <img
              src={item.image_url}
              alt=""
              className="w-[100px] h-[100px] rounded-2xl"
            />
            <img
              src={item.image_url}
              alt=""
              className="w-[100px] h-[100px] rounded-2xl"
            />
            <div className="flex justify-center items-center lg:w-[100px] lg:h-[100px] bg-[#A259FF] rounded-2xl">
              <div className="font-spance_mono text-[22px] font-bold">
                1025+
              </div>
            </div>
          </div>
          <div className="mt-[8px]">
            <h2 className="font-worksens lg:text-[22px] md:text-[22px] font-semibold">
              {item.name.slice(0, 10)}
            </h2>
            <div className="flex ">
              <img
                src={item.image_url}
                alt=""
                className="lg:w-[24px] lg:h-[24px] md:w-[24px] rounded-full object-cover"
              />
              <p className="flex justify-center items-center pl-4 md:text-[16px]">
                {item.collection.slice(0, 13)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingCard;
