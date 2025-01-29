import React from 'react'

const AboutText = () => {
  return (
    <div className="flex-1 gap-[143px] bg-[#007580] text-[#fff] p-10 xs:p-16 flex flex-col">
    <div>
      <p className="text-[32px] 3xl:text-[30px] font-bold leading-[1.2] mb-4">
        About Us - Comforty
      </p>
      <p className="text-[18px] 3xl:text-[16px] leading-[1.6] mb-8 md:mb-12 ">
        At Comforty, we believe that the right chair can transform your
        space and elevate your comfort. Specializing in ergonomic
        design, premium materials, and modern aesthetics, we craft
        chairs that seamlessly blend style with functionality.
      </p>
    </div>
    <div className="mt-auto">
      <button className="text-[16px] leading-[150%] px-8 py-4 bg-[#F9F9F9]/15 align-bottom">
        View collection
      </button>
    </div>
  </div>  )
}

export default AboutText