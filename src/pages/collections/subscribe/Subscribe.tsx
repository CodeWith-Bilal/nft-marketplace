import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { envelope } from "../../../assets/constant/constants";

const Subscribe = () => {
  const collections = useSelector((state: RootState) => state.collections.data);

  return (
    <div>
      {collections.slice(2, 3)?.map((item, i) => {
        return (
          <div
            key={i}
            className="w-full h-[645px] md:h-[480px] lg:h-[550px] lg:px-[195px] py-[40px] gap-[10px] flex justify-center items-center bg-[#2B2B2B]"
          >
            <div className="flex flex-col md:flex-row lg:flex-row w-[315px] h-[565px] md:w-[690px] md:h-[360px] lg:w-full lg:h-[390px] rounded-[20px] md:py-[40px] md:px-[30px] lg:p-[40px] gap-[30px] lg:gap-[50px] bg-[#2B2B2B] md:bg-[#3B3B3B] ">
              <div className="w-[315px] h-[255px] md:w-[300px] md:h-[280px] lg:w-[425px] lg:h-[310px] rounded-[20px] ">
                <a href="/">
                  <img
                    src={item.image_url}
                    alt={item.collection}
                    className="w-[315px] h-[255px] md:w-[300px] md:h-[280px] lg:w-[425px] lg:h-[310px] rounded-[20px] object-cover"
                  />
                </a>
              </div>
              <div className="w-[315px] h-[280px] md:w-[300px] md:h-[280px] lg:w-[425px] lg:h-[272px] gap-[10px] ">
                <div className="w-[315px] h-[132px] md:w-[300px] md:h-[132px] lg:w-[425px] lg:h-[172px] gap-[10px] lg:gap-[20px] ">
                  <div className="text-white text-[28px] md:text-[34px] lg:text-[42px] font-semibold font-work-sans msc:leading-[39.2px] lg:leading-[45.6px] ">
                    Join Our Weekly Digest
                  </div>
                  <div className="text-white text-[16px] lg:text-[22px] font-normal font-work-sans lg:leading-[35.2px] md:my-[15px]">
                    Get exclusive promotions & updates straight to your inbox.
                  </div>
                </div>
                <div className="flex flex-col md:flex-col lg:flex-row text-white w-[315px] lg:flex-nowrap h-[108px] md:w-[300px] md:h-[108px] lg:w-[425px] lg:h-[60px] mt-[20px] md:mt-[30px] lg:py-[16px] gap-[16px] lg:gap-0 ">
                  <div className="flex justify-center bg-white rounded-[20px] w-[315px] h-[46px] md:w-[300px] md:h-[46px] lg:w-[425px] lg:h-[60px] md:px-[20px] md:py-[16px] lg:ps-[1px] gap-[12px]">
                    <input
                      className="font-normal outline-none text-[16px] placeholder-[#2B2B2B]"
                      type="email"
                      placeholder="Enter Your Email Address"
                    />
                  </div>
                  <button
                    className="flex justify-center items-center bg-[#A259FF] w-[315px] h-[46px] lg:ms-[-45px] md:w-[300px] md:h-[46px] lg:w-[211px] lg:h-[60px] rounded-[20px] msc:py-0 px-[50px] lg:px-[50px] gap-[12px] "
                    type="button"
                    title="Subscribe"
                  >
                    <div className="w-5 h-5">
                      <img src={envelope} alt="" className="w-5 h-5 relative" />
                    </div>
                    <div className="text-white font-semibold text-[16px] font-work-sans ">
                      Subscribe
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Subscribe;
