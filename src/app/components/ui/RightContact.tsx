import React from "react";

const RightContact = () => {
  return (
    <div className="flex flex-col justify-start gap-[22px] w-full lg:w-1/2 xl:w-[635px] lg:px-0  px-12">
      <div>
        <p className="text-[16px] font-poppins font-medium mb-[22px]">
          Your name
        </p>
        <input
          type="text"
          placeholder="Abc"
          className="text-[16px] font-poppins border border-[#9F9F9F] rounded-[10px] py-5 px-[30px] w-full"
        />
      </div>
      <div>
        <p className="text-[16px] font-poppins font-medium mb-[22px]">
          Email address
        </p>
        <input
          type="email"
          placeholder="Abc@def.com"
          className="text-[16px] font-poppins border border-[#9F9F9F] rounded-[10px] py-5 px-[30px] w-full"
        />
      </div>
      <div>
        <p className="text-[16px] font-poppins font-medium mb-[22px]">
          Subject
        </p>
        <input
          type="email"
          placeholder="This is an optional"
          className="text-[16px] font-poppins border border-[#9F9F9F] rounded-[10px] py-5 px-[30px] w-full"
        />
      </div>

      <div>
        <p className="text-[16px] font-poppins font-medium mb-[22px]">
          Message
        </p>
        <textarea
          placeholder="Hi! i’d like to ask about"
          className="text-[16px] font-poppins border border-[#9F9F9F] rounded-[10px] pt-[26px] pb-[70px] px-[30px] w-full h-[150px] resize-none"
        ></textarea>
      </div>
      <button className=" px-[90px] bg-[#029FAE] py-[13.75px] text-white font-poppins self-auto lg:self-start">
        Submit
      </button>
    </div>
  );
};

export default RightContact;
