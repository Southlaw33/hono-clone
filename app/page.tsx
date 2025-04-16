import FooterBar from "@/components/footer-bar/FooterBar";
import NavigationBar from "@/components/navigation-bar/NavigationBar";
import React from "react";
import HeroBlock from "./blocks/hero-block/HeroBlock";

const rootPage = () => {
  return (
    <div className="flex flex-col items-stretch">
      <NavigationBar />
      <div className="container mx-auto p-24">
        <HeroBlock />
      </div>
      <div className="h-48 bg-purple-500" />
      <FooterBar />
    </div>
  );
};

export default rootPage;
