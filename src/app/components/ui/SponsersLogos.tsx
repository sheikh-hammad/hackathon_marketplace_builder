import { Logos } from "../data/types";
import Image from "next/image";
import React from "react";

const SponsersLogos = () => {
  return (
    <div className=" px-6 xs:px-[55px] md:px-[120px] 2xl:px-60 3xl:px-[300px] xl:px-[150px] lg:px-[100px] pt-[53px]">
      <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7  place-items-center gap-y-[20px] gap-x-[70px] xs:gap-x-[90px] md:gap-x-[106px]">
        {Logos.map((logo, index) => (
          <div key={index} className="">
            <Image
              src={logo.img}
              alt=""
              width={logo.width}
              height={logo.height}
              
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsersLogos;
