import React, { useMemo } from "react";
import { RootState } from "../../../store/store";
import { eye } from "../../../assets/constant/constants";
import { useSelector } from "react-redux";
import DiscoverCard from "../../../component/discoverCard/DiscoverCard";

export default function DiscoverData() {
  const collections = useSelector((state: RootState) => state.collections.data);

  const randomNumber = useMemo(
    () => Math.random() * (collections?.length - 3),
    [collections?.length]
  );
  return (
    <>
      <div className="w-[375px] h-[1557px] pt-[40px] pl-[40px] gap-[40px] md:w-[834px] md:h-[700px] md:px-[115px] md:gap-[40px] lg:w-[1280px] lg:h-[780px] lg:gap-[60px]">
        <div className="w-[315px] h-[71px] gap-[100px] md:w-[690px] md:h-[71px] md:grid md:grid-cols-2 lg:w-[1050px] lg:h-[91px] lg:grid lg:grid-cols-2">
          <div className="md:w-[403px] md:h-[71px] md:gap-[10px] lg:w-[763px]">
            <h1 className="font-worksens font-semibold text-[28px] md:text-[28px] lg:text-[38px]">
              Discover More NFTs
            </h1>
            <p className="text-[16px] font-worksens lg:text-[22px]">
              Explore new trending NFTs
            </p>
          </div>
          <div className="md:w-[287px] md:h-[71px] md:pl-24 lg:w-[287px] lg:pl-72">
            <button className="hidden md:block md:w-[187px] md:h-[60px] rounded-[20px] border-[2px] border-[#A259FF]">
              <div className="flex justify-center items-center">
                <img src={eye} alt="icon" className="w-[20px] h-[20px]" />
                <span className="font-semibold font-worksens ml-[10px]">
                  See All
                </span>
              </div>
            </button>
          </div>
          <div></div>
        </div>
        <div className="w-[315px] h-[1246px] gap-[20px] md:w-[690px] md:h-[469px] md:gap-[30px] md:flex lg:w-[1050px] lg:h-[469px]">
          {collections.slice(randomNumber, randomNumber + 3).map((data, i) => (
            <DiscoverCard
              key={i}
              item={data}
              view={i === 0 ? "" : i === 1 ? "md:hidden lg:block" : ""}
            />
          ))}
        </div>
        <div className="w-[315px] h-[60px] gap-[100px] mt-[25px] md:hidden">
          <button className="w-[315px] h-[60px] rounded-[20px] border-[2px] border-[#A259FF]">
            <div className="flex justify-center items-center">
              <img src={eye} alt="icon" className="w-[20px] h-[20px]" />
              <span className="font-semibold font-worksens ml-[10px]">
                See All
              </span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
