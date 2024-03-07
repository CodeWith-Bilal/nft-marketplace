import { useSelector } from "react-redux";
import { rocket } from "../../../assets/constant/constants";
import { RootState } from "../../../store/store";
const HeroSection = () => {
  const collections = useSelector((state: RootState) => state.collections.data);

  return (
    <div className="w-full lg:h-[704px] lg:py-[80px] lg:px-[115px] gap-[30px] md:h-[541px] md:py-[40px] md:px-[60px]">
      <div className="lg-w-[1050px] m-auto gap-[30px] md-w-[834px]">
        <div className="flex gap-[30px] lg:w-[1050px] md:w-[830px]">
          <div className="lg:w-[510px] md:w-[330px]">
            <div className="lg:w-[510px] lg:h-[222px]">
              <h1 className="font-worksens lg:text-7xl font-semibold md:text-[38px] md:w-[330px] lg:w-[510px]">
                Discover Digital Art & Collect NFTs
              </h1>
              <p className="font-worksens lg:text-[22px] font-[400] lg:my-7 md:text-[16px] md:my-5 md:w-[330px] lg:w-[510px]">
                NFT marketplace UI created with Anima for Figma. Collect, buy
                and sell art from more than 20k NFT artists.
              </p>
              <div className="mb-7">
                <button className=" cursor-pointer [border:none] py-[19px] pr-[30px] pl-[30px] bg-[#A259FF] rounded-2xl flex flex-row items-center justify-start gap-[0px_12px] whitespace-nowrap">
                  <div className="h-5 w-5">
                    <img className="h-5 w-5 relative" alt="" src={rocket} />
                  </div>
                  <div className="relative text-base leading-[140%] font-semibold text-text text-center font-worksens">
                    Get Started
                  </div>
                </button>
              </div>
              <div className="flex justify-between md:w-[330px] lg:w-[510px]">
                <div>
                  <p className="font-spance_mono font-[700] lg:text-[28px] md:text-[22px]">
                    240k+
                  </p>
                  <p className="font-worksens font-[400] lg:text-[24px] md:text-[16px]">
                    Total Sale
                  </p>
                </div>
                <div>
                  <p className="font-spance_mono font-[700] lg:text-[28px] md:text-[22px]">
                    100k+
                  </p>
                  <p className="font-worksens font-[400] text-[24px] lg:text-[24px] md:text-[16px]">
                    Auctions
                  </p>
                </div>
                <div>
                  <p className="font-spance_mono font-[700] lg:text-[28px] md:text-[22px]">
                    240k+
                  </p>
                  <p className="font-worksens font-[400] text-[24px] lg:text-[24px] md:text-[16px]">
                    Artists
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[510px] md:w-[330px] md:h-[330px]">
            {/* <HeroCard /> */}
            <div>
              {collections?.slice(0, 1).map((item, i) => {
                // Check if the object has a itemid image_url
                if (item.image_url) {
                  return (
                    <div key={i} className="">
                      <div
                        key={item.id}
                        className="bg-[#3b3b3b] rounded-3xl md:w-[330px] md:h-[330px] lg:w-[510px] lg:h-[510px]"
                      >
                        <img
                          src={item.image_url}
                          alt={item.name}
                          className="lg:w-[510px] md:w-[330px] object-cover lg:h-[401px] md:h-[250px] rounded-t-3xl"
                        />
                        <div className="py-7 pl-5 md:py-4 lg:py-7">
                          <h2 className="font-worksens lg:text-2xl md:text-[22px] font-semibold">
                            {item.name}
                          </h2>
                          <div className="flex ">
                            <img
                              src={item.image_url}
                              alt=""
                              className="lg:w-[30px] md:w-[24px] rounded-full object-cover"
                            />
                            <p className="flex justify-center items-center pl-4 md:text-[16px]">
                              {item.collection.slice(0, 10)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null; // Skip rendering if there is no image_url
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
