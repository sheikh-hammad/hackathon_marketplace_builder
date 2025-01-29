import React from "react";

const CartRight = () => {
  return (
    <div className="flex-shrink-0 lg:w-[30%]">
      <h2 className="sm:text-[22px] text-[18px] font-medium leading-[33px] text-[#111] mb-6">
        Summary
      </h2>
      <div className="flex justify-between mb-2">
        <p className="sm:text-[15px] text-[13px] leading-[28px] text-[#111]">
          Subtotal
        </p>
        <p className="font-medium text-[12px] sm:text-[14px] leading-[24px] text-[#111]">
          $198.00
        </p>
      </div>
      <div className="flex justify-between mb-5 ">
        <p className="sm:ext-[15px] text-[13px] leading-[28px] text-[#111]">
          Estimated Delivery & Handling
        </p>
        <p className="sm:ext-[15px] text-[13px] leading-[28px] text-[#111]">
          Free
        </p>
      </div>
      <hr />
      <div className="flex justify-between py-[17px] ">
        <p className="sm:ext-[15px] text-[13px] leading-[28px] text-[#111]">
          Total
        </p>
        <p className="font-medium sm:ext-[14px] text-[12px] leading-[24px] text-[#111]">
          $198.00
        </p>
      </div>
      <hr className="mb-8" />
      <button className="w-full font-medium text-[15px] leading-6 text-white bg-[#029FAE] py-[18px] rounded-[30px]">
        Member Checkout
      </button>
    </div>
  );
};

export default CartRight;
