import { useDispatch } from "react-redux";
// import BrowseCategories from "./browseSection/BrowseSection";
import HeroSection from "./heroSection/HeroSection";
import TrandingSection from "./trendingSection/TrandingSection";
import { AppDispatch } from "../../store/store";
import { useEffect } from "react";
import { collectionsPics } from "../../store/slices/collections";
// import DiscoverSection from "./discoverSection/DiscoverSection";

export default function Index() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(collectionsPics());
  }, [dispatch]);

  return (
    <>
      <HeroSection />
      <TrandingSection />
      {/* <BrowseCategories /> */}
      {/* <DiscoverSection /> */}
    </>
  );
}
