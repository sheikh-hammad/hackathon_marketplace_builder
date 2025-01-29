import React from 'react'

const Newsletter = () => {
  return (
  <div className="flex flex-col items-center ">
          <h2 className="text-[33px] md:text-[40px] 2xl:text-[42px]  3xl:text-[50px]  font-roboto text-center font-medium mb-[54px]  md:mb-[74px]">
            Or Subscribe To The Newsletter
          </h2>
          <div className="flex w-full mx-auto items-center justify-center gap-[26px]">
            <div className="md:w-[643px] sm:w-[350px] w-[200px]">
              <input
                type="email"
                placeholder="Email Address..."
                className="w-full mb-[13px] px-[15px] font-roboto font-semibold text-[16px]  text-[#1E2832]/50 focus:outline-none focus:ring-0 bg-transparent"
              />
              <hr className="bg-[#1E2832] h-[2px] border-none" />
            </div>
            <div className="w-[91px]">
              <button className="mb-[10px] px-4 font-openSans text-[16px] text-[#1E2832] focus:outline-none">
                SUBMIT
              </button>
              <hr className="bg-[#1E2832] h-[2px] border-none" />
            </div>
          </div>
        </div>  )
}

export default Newsletter