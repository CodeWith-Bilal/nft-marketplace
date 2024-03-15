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
            className="w-[375px] h-[645px] px-[40px] py-[80px] gap-[10px] md:w-[834px] md:h-[480px] md:px-[115px] md:py-[80px] lg:w-[1280px] lg:px-[115px] lg:py-[0]"
          >
            <div className="w-[315px] h-[565px] md:w-[690px] md:h-[360px] rounded-[20px] gap-[30px] md:px-[40px] md:py-[30px] md:bg-[#3B3B3B] md:flex lg:w-[1050px] lg:h-[430px] lg:p-[60px] lg:gap-[80px]">
              <div>
                <img
                  src={item.image_url}
                  alt=""
                  className="w-[315px] h-[255px] rounded-[20px] md:w-[300px] md:h-[280px] object-cover lg:w-[425px] lg:h-[310px]"
                />
              </div>
              <div className="w-[315px] h-[280px] gap-[40px] md:w-[300px] md:h-[280px] lg:w-[425px] lg:h-[272px]">
                <div className="w-[315px] h-[132px] gap-[10px] py-5 md:w-[300px] md:h-[132px] lg:w-[425px] lg:h-[172px]">
                  <h1 className="font-worksens font-semibold text-[28px] leading-[39px] lg:text-[38px]">
                    Join Our Weekly Digest
                  </h1>
                  <p className="font-[400] text-[16px] font-worksens mt-3 lg:text-[22px]">
                    Get exculsive promotiona & updates straight to your inbox.
                  </p>
                </div>
                <div className="w-[315px] h-[108px] gap-[16px] mt-10 md:w-[300px] md:h-[108px] lg:w-[425px] lg:h-[60px] lg:flex lg:relative">
                  <input
                    type="text"
                    placeholder="Enter Your Email Address"
                    className="w-[315px] h-[46px] rounded-[20px] border-[1px] px-[16px] py-[20px] gap-[20px] font-worksens md:w-[300px] md:h-[46px] lg:h-[60px] lg:w-[240px] lg:text-[16px] lg:font-[400] outline-none text-[14px] placeholder-[#2B2B2B]"
                  />

                  <button className="w-[315px] h-[46px] rounded-[20px] border-[1px] px-[16px] py-[20px] gap-[20px] bg-[#A259FF] flex justify-center items-center font-worksens font-semibold mt-4 md:w-[300px] md:h-[46px] lg:absolute lg:w-[188px] lg:h-[60px] lg:bottom-0 lg:right-6 lg:py-[20px] lg:gap-2">
                    <img src={envelope} alt="" className="w-[18px] h-[18px]" />
                    Subscribe
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
