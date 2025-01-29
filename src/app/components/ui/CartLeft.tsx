import React from "react";
import { Cart } from "../data/types";
import Image from "next/image";


const CartLeft = () => {
  return (
    <div className="flex-1">
      <h2 className="text-[18px] sm:text-[22px] font-medium leading-[33px] text-[#111]">
        Bag
      </h2>
      <div className="flex flex-row sm:flex-col flex-wrap gap-5 sm:gap-0 justify-center xs:justify-between ">
        {Cart.map((cart, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-[30px]  pt-6 pb-[37px]"
          >
            <div className="flex-shrink-0">
              <Image
                alt="Product Image"
                src={cart.src}
                width={150}
                height={150}
                className="h-[300px] w-[300px] xs:h-[150px] xs:w-[150px]"
              />
            </div>

            <div className="flex-1">
              <p className="text-[#272343] text-[16px] xs:text-[14px] sm:text-[16px] leading-130 mb-4 sm:mb-[28px]">
                {cart.name}{" "}
              </p>
              <p className="text-[#757575] text-[15px] xs:text-[13px]  sm:text-[15px] leading-[28px]">
                {cart.subText}{" "}
              </p>
              <div className="flex gap-8 mb-4 sm:mb-6">
                <div className="flex text-[#757575] items-center gap-2">
                  <p className="sm:text-[15px] xs:text-[13px] text-[15px] leading-[28px]">
                    {cart.size}
                  </p>
                  <p className="text-[14px] sx:text-[12px] sm:text-[14px] leading-none">
                    {cart.sizeNumber}
                  </p>
                </div>
                <div className="flex text-[#757575] items-center gap-2">
                  <p className="sm:text-[15px] xs:text-[13px] text-[15px] leading-[28px]">
                    {cart.quantity}
                  </p>
                  <p className="text-[14px] xs:text-[12px] sm:text-[14px] leading-none">
                    {cart.quantityNumber}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6">
                  <button className="size-6">{<cart.icon1 />}</button>
                </div>
                <div className="w-6 h-6">
                  <button className="size-6">{<cart.icon2 />}</button>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 flex items-start justify-start sm:justify-end">
              <p className="text-[#111] text-[17px] sm:text-[15px] leading-[28px]">
                {cart.price}{" "}
              </p>
            </div>
          </div>
        ))}
        <hr className="mb-2" />
      </div>
    </div>
  );
};

export default CartLeft;
