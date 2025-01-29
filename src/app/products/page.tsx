import React from "react";
import Newsletter from "../components/ui/Newsletter";
import InstaDiscount from "../components/ui/InstaDiscount";
import Products from "../components/ui/Products";

const page = () => {
  return (
    <>
      <div className="pt-[57px] pb-[173px]   flex flex-col px-4 sm:px-[25px] md:px-[120px]  gap-10 2xl:px-60 3xl:px-[300px] xl:px-[150px] lg:px-[100px]">
        <h2 className="text-[#272343] font-semibold leading-110 text-[32px]">
          All Products
        </h2>
        <Products />
      </div>
      <div className="py-[100px] bg-[#1E2832]/5  flex flex-col px-4 sm:px-[25px] md:px-[120px]  gap-[70px] 2xl:px-60 3xl:px-[300px] xl:px-[150px] lg:px-[100px]">
        <Newsletter />
        <InstaDiscount />
      </div>
    </>
  );
};

export default page;
