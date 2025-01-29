import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { IoAlertCircleOutline } from "react-icons/io5";
import Link from "next/link"

const TopNav = () => {
  return (
    <>
      <div className="bg-[#272343] h-[32px] sm:h-[45px] flex items-center justify-between px-4 sm:px-[25px] md:px-[120px]   2xl:px-60 3xl:px-[300px] xl:px-[150px] lg:px-[100px]">
        <div className="flex items-center gap-1 sm:gap-2">
          <FaCheck className="text-white/70 h-2 w-2 sm:w-4 sm:h-4 " />
          <p className="text-[8px] sm:text-[13px]  text-white leading-[110%] text-white/70">
            Free shipping on all orders over $50
          </p>
        </div>
        <div className="flex gap-4 sm:gap-6 text-white items-center justify-center">
          <div className="flex gap-1 sm:gap-2 items-center cursor-pointer relative">
            <p className="sm:text-[13px] text-[8px] leading-[130%] text-white/70">
              Eng
            </p>
            <MdArrowDropDown className=" text-[#fff]/70 h-3 w-3 sm:w-4 sm:h-4" />
          </div>

          <Link
            className="sm:text-[13px] text-[8px] leading-[130%] text-white/70"
            href="/faq"
          >
            Faqs
          </Link>

          <Link className="flex gap-1 sm:gap-2 items-center" href="/">
            <IoAlertCircleOutline className="h-3 w-3 sm:w-4 sm:h-4 text-white/70" />
            <p className="sm:text-[13px] text-[8px] leading-[130%] text-white/70">
              Need Help
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopNav;
