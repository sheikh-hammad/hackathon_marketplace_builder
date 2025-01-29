import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center gap-[120px] lg:gap-[150px] pt-[85px] pb-[121px] lg:pt-[65px] lg:pb-[65px] xl:pt-[115px] xl:pb-[151px]  px-[35px] lg:px-[35px] xl:pl-[70px] rounded-bl-3xl  xl:pr-[70px]  bg-[#F0F2F3] 2xl:mx-60 3xl:ml-[300px] 3xl:mr-[299px] xl:mx-[150px] lg:mx-[100px]">
      <div className="flex flex-col items-center lg:items-start lg:w-[auto] xs:w-[400px] md:w-[600px] lg:text-left  text-center">
        <p className="text-[#272343] text-[20px] lg:text-[14px] [line-height:100%] [letter-spacing:0.168rem] uppercase mb-6">
          Welcome to chairy
        </p>
        <h2 className="text-[#272343] text-[40px] xs:text-[60px] lg:text-[50px] 2xl:text-[60px]  [line-height:110%] font-bold mb-[49px] font-poppins">
          Best Furniture Collection for your interior.
        </h2>
        <Link href="/products">
        <div className="flex gap-[20px] items-center bg-[#029FAE]  w-fit py-[17px] pr-[21.5px] pl-[24px] rounded-lg">
          <p className="capitalize font-semibold [line-height:110%] text-[22px] lg:text-[16px] text-white">
            Show now
          </p>
          <Image src="/asset/Line.png" alt="" width={16} height={9} />
        </div>
        </Link>
      </div>
      <div className="flex-shrink-0 md:w-[434px] lg:w-[332px] xl:w-[367px] 2xl:w-[400px] 3xl:w-[434px]">
        <Image
          src="/asset/Product Image (1).png"
          alt=""
          width={498}
          height={584}
        />
      </div>
    </div>
  );
};

export default Hero;
