import React from "react";
import Brands from "../components/ui/Brands";
import PopularProducts from "../components/ui/PopularProducts";
import AboutImage from "../components/ui/AboutImage";
import AboutText from "../components/ui/AboutText";

const page = () => {
  return (
    <>
      <div className="px-4 sm:px-[80px] 2xl:px-60 3xl:px-[300px] md:px-[100px] xl:px-[150px] lg:px-[100px] py-6 sm:py-[100px]">
        <div className="flex gap-7 flex-col xl:flex-row   justify-between resize overflow-x-hidden overflow-y-auto">
          <AboutText />
          <AboutImage />
        </div>

        <Brands />
        <PopularProducts />
      </div>
    </>
  );
};

export default page;
