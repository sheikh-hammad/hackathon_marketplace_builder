import React from "react";
import CartLeft from "../components/ui/CartLeft";
import CartRight from "../components/ui/CartRight";

const page = () => {
  return (
    <>
      <div className="flex flex-wrap lg:flex-row flex-col justify-between px-16 sm:px-[50px] md:px-[120px] 2xl:px-60 3xl:px-[300px] xl:px-[150px] lg:px-[100px]  gap-4 lg:gap-[132px] py-20">
        <CartLeft />
        <CartRight />
      </div>
    </>
  );
};

export default page;
