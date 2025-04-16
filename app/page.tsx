import FooterBar from "@/components/footer-bar/FooterBar";
import NavigationBar from "@/components/navigation-bar/NavigationBar";
import React from "react";
import HeroBlock from "./blocks/hero-block/HeroBlock";
import FeatureBlock from "./blocks/feature-block/FeatureBlock";

const rootPage = () => {
  return (
    <div className="flex flex-col items-stretch ">
      <div className="sticky top-0 container bg-base-100/50 mx-auto py-6 backdrop-blur-xl z-50">
        <NavigationBar />
      </div>
      <div className="container mx-auto p-24">
        <HeroBlock />
      </div>
      <div className="container mx-auto p-24">
        <FeatureBlock />
      </div>
      <FooterBar />
    </div>
  );
};

export default rootPage;
