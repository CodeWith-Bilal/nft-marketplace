import { useSelector } from "react-redux";
import TrendingCard from "../../../component/trendingCard/TrendingCard";
import { RootState } from "../../../store/store";
import { useMemo } from "react";

const TrandingSection = () => {
  const collections = useSelector((state: RootState) => state.collections.data);

  const randomNo = useMemo(() => {
    return Math.floor(Math.random() * (collections?.length - 3));
  }, [collections?.length]);

  return (
    <div>
      <div className="w-[375px] h-[718px] px-[40px] py-[0px] gap-[40px] md:w-[834px] md:h-[716px] md:px-[40px] md:gap-[40px] lg:w-[1280px] lg:h-[836px] lg:px-[110px] lg:py-[80px] lg:gap-[60px]">
        <div className="w-[315px] h-[93px] gap-[10px] md:w-[690px] lg:w-[1050px] lg:h-[91px] lg:gap-[10px]">
          <h1 className="text-[28px] md:test-[28px] leading-[39px] font-semibold font-worksens pb-3 lg:text-[38px]">
            Trending Collections
          </h1>
          <p className="font-worksens text-[16px] leading-[22px] lg:text-[22px]">
            Checkout our weekly updated trending collection.
          </p>
        </div>
        <div className="mt-[30px] md:w-[690px] md:h-[525px] gap-[30px] md:flex lg:w-[1050px] lg:h-[525px] lg:gap-[30px] lg:flex">
          {collections?.slice(randomNo, randomNo + 3).map((data, i) => {
            return (
              <TrendingCard
                key={i}
                item={data}
                view={
                  i === 0
                    ? "flex md:flex lg:flex" // Display on small, medium, and large screens
                    : i < 2
                    ? "hidden md:flex lg:flex" // Display on medium screens
                    : "hidden md:hidden lg:flex" // Display on large screens
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrandingSection;
