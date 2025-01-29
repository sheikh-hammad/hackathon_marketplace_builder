import { Blocks } from "../data/types";
import React from "react";
import Image from"next/image"

const Brands = () => {
  return (
    <div className="md:mb-[132px] sm:p-[auto] p-5 my-16 md:mt-[132px]">
      <p className="font-semibold leading-[110%] text-[32px] text-[#272343] text-center mb-12 ">
        What makes our Brand Different
      </p>
      <div className="grid-cols-1 grid sm:grid-cols-2 xl:grid-cols-4 gap-[27px]">
        {Blocks.map((blocks, index) => (
          <div
            key={index}
            className=" text-[#007580] flex flex-col gap-3 bg-[#F9F9F9] p-8 2xl:p-8 3xl:p-12 flex-1"
          >
            <div>
              <Image src={blocks.image} alt="" width={24} height={24} />
            </div>
            <p className="text-[18px] 2xl:text-[20px] 3xl:text-[20px] leading-[140%]">
              {blocks.blockHeading}
            </p>
            <p className="text-[14px] 2xl:text-[18px] 3xl:text-[16px] leading-[150%]">
              {blocks.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
