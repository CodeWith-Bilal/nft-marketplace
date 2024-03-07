import { useSelector } from "react-redux";
import TrendingCard from "../../../component/trendingCard/TrendingCard";
import { RootState } from "../../../store/store";
import { useMemo } from "react";

const TrandingSection = () => {
  const collections = useSelector((state: RootState) => state.collections.data);

  const randomNo = useMemo(() => {
    return Math.floor(Math.random() * collections?.length - 3);
  }, [collections?.length]);

  return (
    <div className="w-full lg:h-[836px] lg:py-[80px] lg:px-[115px] md:w-[834px] md:h-[716px] md:py-[40px] md:px-[60px]">
      <div className="lg:w-[1050px] md:w-[834px] md:h-[716px]">
        <div className="lg:w-[1050px] md:w-[834px]">
          <h1 className="font-worksens lg:text-[38px] font-semibold md:text-[38px]">
            Trending Collection
          </h1>
          <p className="font-worksens lg:text-[22px] font-[400] lg:my-7 md:text-[16px] md:my-5">
            Checkout Our Weekly Updated Trending Collection.
          </p>
        </div>
        <div className="flex gap-[30px] ">
          {collections?.slice(randomNo, randomNo + 3).map((data, i) => {
            return (
              <div key={i} className="">
                <TrendingCard
                  item={data}
                  key={i}
                  view={i < 2 ? "md:flex lg:hidden" : "md:hidden lg:flex"}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrandingSection;
