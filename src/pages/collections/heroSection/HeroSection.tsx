import { useSelector } from "react-redux";
import { rocket } from "../../../assets/constant/constants";
import { RootState } from "../../../store/store";
const HeroSection = () => {
  const collections = useSelector((state: RootState) => state.collections.data);

  return (
    <>
      <div className="w-[375px] h-[786px] gap-[40px] px-[40px] md:w-[834px] md:h-[541px] md:pt-[40px] md:pb-[80px] md:gap-[30px] lg:w-[1280px] lg:h-[704px] lg:px-[115px] lg:py-[80px] lg:gap-[30px]">
        <div className="w-[315px] h-[706px] md:w-[690px] md:h-[381px] lg:w-[1050px] lg:h-[544px] gap-[30px] lg:gap-[30px]">
          <div className="md:flex md:gap-[30px] lg:flex lg:gap-[30px]">
            <div className="">
              <h1 className="text-[28px] md:leading-[45px] lg:leading-[73px] md:text-[38px] lg:text-[67px] font-worksens font-semibold w-[315px] md:w-[330px] lg:w-[510px] lg:h-[222px] h-[78px]">
                Discover Digital Art & Collect NFTs
              </h1>
              <p className="text-[16px] font-worksens my-4 md:pt-[50px] lg:text-[22px] lg:w-[510px] lg:pt-[0px] lg:pb-4">
                NFT marketplace UI created with Anima for Figma. Collect, buy
                and sell art from more then 20k NFT artists.
              </p>
              <button className="hidden md:w-[224px] md:h-[60px] lg:w-[224px] lg:h-[60px] cursor-pointer [border:none] px-[40px] py-[0px] bg-[#A259FF] rounded-2xl md:flex lg:flex flex-row items-center justify-center whitespace-nowrap">
                <div className="h-5 w-5">
                  <img className="h-5 w-5 relative" alt="" src={rocket} />
                </div>
                <div className="text-[16px] relative text-base leading-[140%] font-semibold text-center font-worksens">
                  Get Started
                </div>
              </button>
            </div>
            <div className="md:w-[330px] md:h-[330px]">
              {collections.slice(0, 1).map((item, i: number) => {
                return (
                  <>
                    <div
                      key={i}
                      className="w-[315px] h-[315px] md:w-[330px] md:h-[330px] lg:w-[510px] lg:h-[510px] bg-[#3B3B3B] rounded-2xl md:rounded-2xl lg:rounded-2xl"
                    >
                      <div>
                        <img
                          src={item.image_url}
                          alt={item.name}
                          className="w-[315px] h-[206px] md:w-[330px] md:h-[221px] lg:w-[510px] lg:h-[401px] object-cover rounded-t-2xl md:rounded-t-2xl lg:rounded-t-2xl"
                        />
                      </div>
                      <div className=" p-[20px] gap-[10px] md:p-[20px] md:gap-[10px] w-[315px] h-[109px] md:w-[330px] md:h-[109px] lg:w-[510px] lg:h-[109px]">
                        <h1 className="text-[22px] md:test-[22px] font-semibold font-worksens">
                          {item.name.slice(0, 13)}
                        </h1>
                        <div className="w-[275px] h-[24px] gap-[12px] flex">
                          <img
                            src={item.image_url}
                            alt="img"
                            className="w-[24px] h-[24px] rounded-full"
                          />
                          <p className="text-[16px] font-worksens">
                            {item.collection.slice(0, 10)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="mt-[30px] md:m-0 md:p-0 lg:pt-[30px]">
            <div className="md:hidden">
              <button className="w-[315px] h-[60px] cursor-pointer [border:none] px-[50px] py-[10px] bg-[#A259FF] rounded-2xl flex flex-row items-center justify-center gap-[12px] whitespace-nowrap">
                <div className="h-5 w-5">
                  <img className="h-5 w-5 relative" alt="" src={rocket} />
                </div>
                <div className="text-[16px] relative text-base leading-[140%] font-semibold text-text text-center font-worksens">
                  Get Started
                </div>
              </button>
            </div>
            <div className="md:p-0 md:m-0 mt-[20px] flex justify-between w-[315px] h-[57px] gap-[30px] md:w-[330px] md:h-[57px] md:gap-[30px] lg:h-[77px] lg:w-[510px] lg:gap-[30px]">
              <div>
                <p className="text-[22px] font-spance_mono font-[700] lg:text-[28px] md:text-[22px]">
                  240k+
                </p>
                <p className="text-[16px] font-worksens font-[400] lg:text-[24px] md:text-[16px]">
                  Total Sale
                </p>
              </div>
              <div>
                <p className="text-[22px] font-spance_mono font-[700] lg:text-[28px] md:text-[22px]">
                  100k+
                </p>
                <p className="text-[16px] font-worksens font-[400] lg:text-[24px] md:text-[16px]">
                  Auctions
                </p>
              </div>
              <div>
                <p className="text-[22px] font-spance_mono font-[700] lg:text-[28px] md:text-[22px]">
                  240k+
                </p>
                <p className="text-[16px] font-worksens font-[400] lg:text-[24px] md:text-[16px]">
                  Artists
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
