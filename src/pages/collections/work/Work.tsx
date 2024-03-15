import React from "react";
import { work } from "../../../assets/constant/constants";
import { work_img } from "../../../assets/constant/constants";
import { work_image } from "../../../assets/constant/constants";
const Work = () => {
  const data = [
    {
      img: work,
      name: "Set up Your wallet",
      description:
        "Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.",
    },
    {
      img: work_image,
      name: "Create Collection",
      description:
        "Upload your work and setup your collection. Add a description, social links and floor price.",
    },
    {
      img: work_img,
      name: "Start Earning",
      description:
        "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    },
  ];
  return (
    <>
      <div className="w-[375px] h-[685px] px-[40px] py-[80px] gap-[40px] md:w-[834px] md:h-[528px] md:px-[115px] md:py-[40px] lg:w-[1280px] lg:h-[738px] lg:py-[80px] lg:px-[115px]">
        <div className="w-[315px] h-[71px] md:w-[690px] md:h-[71px] lg:w-[1050px] lg:h-[91px] gap-[10px]">
          <h1 className="font-worksens text-[28px] font-semibold lg:text-[38px] leading-[45px]">
            How It Works
          </h1>
          <p className="font-worksens text-[16px] lg:text-[22px]">
            Find out how to get start
          </p>
        </div>
        <div className="w-[315px] h-[494px] md:w-[690px] md:h-[337px] lg:w-[1050px] lg:h-[439px] gap-[20px] md:gap-[30px]">
          <div className="w-[315px] h-[157px] md:w-[210px] md:h-[337px] rounded-[20px] lg:w-[1050px] lg:h-[439px] md:flex md:gap-[30px]">
            {data.map((item) => {
              return (
                <div className="flex justify-between bg-[#3B3B3B] w-[315px] h-[157px] md:w-[210px] lg:w-[330px] lg:h-[439px] lg:pt-[10px] lg:py-[30px] md:px-[20px] md:block md:py-[30px] md:h-[337px] rounded-[20px] p-[20px] my-4">
                  <div>
                    <img
                      src={item.img}
                      alt=""
                      className="w-[100px] h-[100px] md:w-[160px] md:h-[160px] lg:w-[250px] lg:h-[250px]"
                    />
                  </div>
                  <div className="w-[155px] h-[117px] md:w-[170px] md:h-[100px] lg:w-[270px] lg:h-[107px] md:gap-[10px]">
                    <h2 className="font-worksens font-semibold mb-3 md:text-center lg:text-[22px] lg:text-center">
                      {item.name}
                    </h2>
                    <p className="text-[12px] font-[400] font-worksens md:text-center lg:text-[16px] lg:text-center">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
