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
      <div className="w-full lg:py-[80px] lg:px-[115px] md:w-[834px] md:h-[541px] md:py-[40px] md:px-[60px]">
        <div className="lg:w-[1050px] md:w-[834px]">
          <div className="flex lg:w-[1050px] md:w-[830px]">
            <div className="lg:w-[510px] md:w-[330px]">
              <div className="">
                <h1 className="m-0 font-worksens lg:text-[38px] font-semibold md:text-[28px] md:w-[690px] lg:w-[510px]">
                  Browse Categories
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-[30px]">
            {collections?.slice(randomNo, randomNo + 8).map((data, i) => {
              return (
                <div key={i} className="lg:w-[1050px] md:w-[834px]">
                  <BrowseCard item={data} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* <div className={`${view} flex flex-col gap-[30px]`}>
        <div className=" lg:w-[330px] lg:h-[330px] md:w-[330px] md:h-[330px]">
          <img
            src={item.image_url}
            alt={item.name}
            className="lg:w-[330px] md:w-[330px] object-cover lg:h-[330px] md:h-[330px] rounded-2xl"
          />
        </div>
        <div className="flex gap-[15px]">
          <img
            src={item.image_url}
            alt={item.name}
            className="lg:w-[100px] md:w-[330px] object-cover lg:h-[100px] md:h-[250px] rounded-2xl"
          />
          <img
            src={item.image_url}
            alt={item.name}
            className="lg:w-[100px] md:w-[330px] object-cover lg:h-[100px] md:h-[250px] rounded-2xl"
          />
          <div className="flex justify-center items-center lg:w-[100px] lg:h-[100px] bg-[#A259FF] rounded-2xl">
            <div className="font-spance_mono text-[22px] font-bold">1025+</div>
          </div>
        </div>
        <div className="">
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
      </div> */}
    </>
  );
};

export default BrowseCategories;
