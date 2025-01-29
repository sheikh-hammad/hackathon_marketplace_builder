import React from "react";
import Image from "next/image";
import { ExplorerProducts } from "../data/types";

const ExplorePopular = () => {
  return (
    <div className="flex flex-col gap-6 lg:gap-0 px-6 lg:flex-row justify-center md:pl-[91px] md:pr-[97px] lg:pl-[71px] lg:pr-[77px] xl:pl-[121px] xl:pr-[127px] 2xl:pl-[211px] 2xl:pr-[217px] 3xl:pl-[271px] 3xl:pr-[277px]">
      <p className="lg:[writing-mode:vertical-lr] lg:rotate-180 text-[34px] lg:text-[22px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[34px] text-center uppercase font-roboto leading-[auto]">
        Explore new and popular styles
      </p>
      <div className="3xl:w-[643px] 3xl:h-[643px] self-center  ">
        <Image src="/asset/Frame.png" alt="" width={643} height={643} />
      </div>
      <div className="grid grid-cols-2 lg:ml-6 gap-6 self-center">
        {ExplorerProducts.slice(1).map((prod, index) => (
          <div key={index} className="2xl: 3xl:w-[312px] 3xl:h-[312px]">
            <Image
              src={prod.src}
              alt={prod.alt}
              width={prod.width}
              height={prod.height}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePopular;
