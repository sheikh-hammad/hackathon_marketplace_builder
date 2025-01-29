import React from "react";
import FaqHeading from "../components/ui/FaqHeading";
import FaqComponent from "../components/ui/FaqComponent";

const page = () => {
  return (
    <div className=" flex flex-col gap-[72px] px-14 sm:px-[25px] md:px-[120px] 2xl:px-60 3xl:px-[300px] xl:px-[150px] lg:px-[100px] py-14  md:pb-[130px] md:pt-[82px] ">
      <FaqHeading />
       <FaqComponent/>
    </div>
  );
};

export default page;
