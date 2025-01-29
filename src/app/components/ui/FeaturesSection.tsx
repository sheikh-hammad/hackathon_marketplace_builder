import  {Features}  from "../data/types";
import React from 'react'
import Image from "next/image"

const FeaturesSection = () => {
  return (
    <div className="bg-[rgb(244,244,244)] flex xs:flex-row flex-col flex-wrap px-[60px] gap-10 lg:gap-10  lg:px-[55px] py-[80px] lg:py-[100px] lg:justify-between justify-center">
    {Features.map((feature, index) => (
      <div
        key={index}
        className="flex items-center gap-[10px]  text-[#242424] flex-col xl:flex-row"
      >
        <Image
          src={feature.src}
          alt=""
          className="lg:w-[54px] lg:h-[60px] w-[46px] h-[52px]"
          width={50}
          height={5}
        />
        <div className="flex flex-col gap-[2px] xl:items-start items-center">
          <h3 className="font-poppins font-semibold text-[17px]  2xl:text-[21px] 3xl:text-[25px] leading-150 xl:text-left text-center">
            {feature.heading}
          </h3>
          <p className="text-[#898989] leading-150 font-poppins font-medium text-[16px] 2xl:text-[18px] 3xl:text-[20px] xl:text-left text-center">
            {feature.text}{" "}
          </p>
        </div>
      </div>
    ))}
  </div>  )
}

export default FeaturesSection