import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
const LeftContact = () => {
  return (
    <div className="flex flex-col justify-start gap-14 w-full lg:w-1/2 xl:w-[400px] lg:px-0 px-12">
    <div className="flex gap-[30px] items-center flex-shrink-0">
      <div>
        <FaLocationDot className="size-6" />
      </div>
      <div>
        <p className="font-medium font-poppins text-[24px]">Address</p>
        <p className="text-[16px]">
          236 5th SE Avenue, New York NY10000, United States
        </p>
      </div>
    </div>
    <div className="flex gap-[30px] items-center">
      <div>
        <FaPhone className="size-6" />
      </div>
      <div>
        <p className="font-medium font-poppins text-[24px]">Phone</p>
        <p className="text-[16px]">Mobile: +(84) 546-6789</p>
        <p className="text-[16px]">Hotline: +(84) 456-6789</p>
      </div>
    </div>
    <div className="flex gap-[30px] items-center">
      <div>
        <MdOutlineAccessTimeFilled className="size-6" />
      </div>
      <div>
        <p className="font-medium font-poppins text-[24px]">
          Working Hours
        </p>
        <p className="text-[16px]">Monday-Friday: 9:00 - 22:00</p>
        <p className="text-[16px]">Saturday-Sunday: 9:00 - 21:00</p>
      </div>
    </div>
  </div>  )
}

export default LeftContact