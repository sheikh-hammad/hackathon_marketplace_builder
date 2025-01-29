import { PopProducts } from "../data/types";
import React from "react";
import Image from "next/image"

const PopularProducts = () => {
  return (
    <div className="px-5">
      <p className="leading-[110%] font-semibold text-[32px] text-[#272343] mb-[43px]">
        Our Popular Products
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        <div className=" col-span-2 flex flex-col gap-5">
          <Image src="/asset/Large.png" alt="" width={630} height={462} />
          <div className="flex flex-col gap-2 text-[#2A254B]">
            <p className="leading-[140%] text-[20px]">The Poplar suede sofa</p>
            <p className="leading-[150%] text-[19px]">$99.00</p>
          </div>
        </div>
        {PopProducts.map((product, index) => (
          <div key={index} className="col-span-1 flex flex-col gap-5">
            <Image src={product.image} alt="" width={305} height={462} />
            <div className="flex flex-col gap-2 text-[#2A254B]">
              <p className="leading-[140%] text-[20px]">{product.mainText}</p>
              <p className="leading-[150%] text-[19px]">{product.subText}</p>
            </div>
          </div>
        ))}

     
      </div>
    </div>
  );
};

export default PopularProducts;
