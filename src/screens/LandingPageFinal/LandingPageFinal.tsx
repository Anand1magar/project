import React from "react";
import { DownloadAppSection } from "./sections/DownloadAppSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { ShowcaseSection } from "./sections/ShowcaseSection/ShowcaseSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";
// import { HeroSection2 } from "./sections/HeroSection2";

export const LandingPageFinal = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full overflow-x-hidden">
      <HeroSection />
      {/* <HeroSection2/> */}
      <FeaturesSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ShowcaseSection />
      <DownloadAppSection />
      <FooterSection />
    </main>
  );``
};
