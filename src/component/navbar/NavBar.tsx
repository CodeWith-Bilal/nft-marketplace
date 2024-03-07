// import { nft } from "../assets/constant/constants"
import { logo } from "../../assets/constant/constants";
import { user } from "../../assets/constant/constants";
const NavBar = () => {
  return (
    <header className="self-stretch bg-background flex flex-row items-center justify-between py-5 px-[50px] box-border max-w-full gap-[20px] text-center text-base text-text font-caption-work-sans mq750:pl-[25px] mq750:pr-[25px] mq750:box-border">
      <div className="w-[243px] flex flex-row items-center justify-center cursor-pointer">
        <div className="flex-1 flex flex-row items-center justify-start gap-[12px]">
          <img className="h-8 w-8 relative" alt="" src={logo} />
          <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            {/* <img
            className="self-stretch h-[19.8px] relative max-w-full overflow-hidden shrink-0"
            alt="" src={nft}
          /> */}
            <h1 className="font-spance_mono font-semibold text-xl">
              NFT Marketplace
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[0px_10px] max-w-full">
        <div className="w-[139px] rounded-xl flex flex-row items-center justify-center p-3 box-border gap-[0px_12px] cursor-pointer">
          <div className="relative leading-[140%] font-semibold font-worksens text-lg ">
            Marketplace
          </div>
        </div>
        <div className="w-28 rounded-xl flex flex-row items-center justify-center p-3 box-border gap-[0px_12px]">
          <div className="relative leading-[140%] font-semibold font-worksens text-lg">
            Rankings
          </div>
        </div>
        <div className="rounded-xl flex flex-row items-center justify-center py-3 pr-4 pl-5 gap-[0px_12px]">
          <div className="relative leading-[140%] font-semibold whitespace-nowrap font-worksens text-lg">
            Connect a wallet
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-[15px] pr-[26px] pl-[26px] bg-[#A259FF] rounded-2xl flex flex-row items-center justify-start gap-[0px_12px] whitespace-nowrap">
          <img className="h-5 w-5 relative" alt="" src={user} />
          <div className="relative text-lg leading-[140%] font-semibold text-text text-center font-worksens">
            Sign Up
          </div>
        </button>
      </div>
    </header>
  );
};

export default NavBar;
