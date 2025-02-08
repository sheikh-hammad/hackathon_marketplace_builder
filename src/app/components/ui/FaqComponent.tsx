import React from "react";
import Image from "next/image";
import { Faq } from "../data/types";

const FaqComponent = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
      {Faq.map((faq, index) => (
        <div key={index} className="bg-[#f7f7f7] rounded-lg p-5 xl:p-6 ">
          <div className="gap-4 xl:gap-6 flex flex-col">
            <div className="flex justify-between items-center">
              <p className="text-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] font-bold leading-[26px]">{faq.ques}</p>
              <div>
                <Image src={faq.icon} alt="" width={24} height={24} />
              </div>
            </div>
            <p className="text-[16px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] leading-6 text-[#4F4F4F]">{faq.ans}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqComponent;
