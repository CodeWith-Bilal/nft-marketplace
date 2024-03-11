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

const DiscoverCard: React.FC<TrendCardProps> = ({ item, view }) => {
  return (
    <>
      <div
        className={`${view} w-[315px] h-[402px] md:w-[330px] md:h-[469px] bg-[#3B3B3B] mt-5 rounded-[20px]`}
      >
        <img
          src={item.image_url}
          alt={item.name}
          className="w-[315px] h-[238px] md:w-[330px] md:h-[295px] object-cover rounded-t-[20px] gap-[10px]"
        />
        <div className="w-[315px] h-[164px] md:w-[330px] md:h-[172px] gap-[25px] py-[20px] pl-[25px] md:pl-[30px]">
          <div className="w-[275px] h-[60px] gap-[5px]">
            <h1 className="font-worksens font-semibold text-[22px]">
              {item.name.slice(0, 10)}
            </h1>
            <div className="w-[275px] h-[24px] gap-[12px] flex my-[10px]">
              <img
                src={item.image_url}
                alt={item.name.slice(0, 10)}
                className="w-[24px] h-[24px] rounded-full object-cover"
              />
              <p className="font-spance_mono">{item.collection.slice(0, 12)}</p>
            </div>
            <div className="w-[275px] h-[34px] grid grid-cols-2 mt-[10px]">
              <div className="w-[137px] h-[34px] gap-[8px] ">
                <h2 className="text-[#858584] text-[12px] font-spance_mono">
                  Price
                </h2>
                <p className="font-spance_mono text-[12px]">1.63 ETH</p>
              </div>
              <div className="w-[137px] h-[34px] gap-[8px] ">
                <h2 className="text-[#858584] text-[12px] font-spance_mono">
                  Highest Bid
                </h2>
                <p className="font-spance_mono text-[12px]">0.33 wETH</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoverCard;
