import React from "react";
import LeftSection from "../components/ui/LeftContact";
import RightContact from "../components/ui/RightContact";
import FeaturesSection from "../components/ui/FeaturesSection";
import ContactHeading from "../components/ui/ContactHeading";
const page = () => {
  return (
    <div className="flex flex-col px-4 sm:px-[25px] md:px-[120px] 2xl:px-60 3xl:px-[300px] xl:px-[150px] lg:px-[100px]">
      <div className="pt-[38px] xl:pt-[98px] pb-[63px]">
        <ContactHeading />
        <div className="flex flex-col lg:flex-row justify-center gap-[90px]">
          <LeftSection />
          <RightContact />
        </div>
      </div>
      <FeaturesSection />
    </div>
  );
};

export default page;
