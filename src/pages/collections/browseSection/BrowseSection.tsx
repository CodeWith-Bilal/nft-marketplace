import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useMemo } from "react";
import BrowseCard from "../../../component/browseCard/BrowseCard";

const BrowseCategories = () => {
  const collections = useSelector((state: RootState) => state.collections.data);
  const randomNo = useMemo(() => {
    return Math.floor(Math.random() * collections?.length - 8);
  }, [collections?.length]);
  return (
    <>
      <div className="w-[375px] h-[1084px] px-[40px] gap-[40px] md:w-[834px] md:h-[629px] md:px-[115px] md:gap-[40px] lg:w-[1280px] lg:h-[928px] lg:px-[115px] lg:py-[80px] lg:gap-[60px]">
        <div className="w-[315px] h-[46px] gap-[10px] md:w-[690px] lg:w-[1050px]">
          <h1 className="text-[28px] font-worksens font-semibold lg:text-[38px]">
            Browse Category
          </h1>
        </div>
        <div className="flex flex-wrap w-[315px] h-[918px] gap-[20px] mt-[30px] lg:mt-[50px] md:w-[690px] md:h-[470px] md:gap-[30px] lg:w-[1050px] lg:h-[662px] lg:gap-[30px]">
          {collections?.slice(randomNo, randomNo + 8).map((data, i) => {
            return (
              <div key={i} className="">
                <BrowseCard item={data} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BrowseCategories;
