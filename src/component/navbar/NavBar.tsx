// import { nft } from "../assets/constant/constants"
import { logo } from "../../assets/constant/constants";
import { user } from "../../assets/constant/constants";
const NavBar = () => {
  return (
    <header className="self-stretch bg-background flex flex-row items-center justify-between py-5 px-[30px] gap-[10px]  font-caption-work-sans">
      <div className="w-[243px] flex flex-row items-center justify-center cursor-pointer">
        <div className="flex-1 flex flex-row items-center justify-start gap-[12px]">
          <img className="h-8 w-8 relative" alt="" src={logo} />
          <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <h1 className="font-spance_mono font-semibold text-base w-full">
              NFT Marketplace
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
