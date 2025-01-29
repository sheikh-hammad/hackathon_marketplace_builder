import React from 'react'
import Image from "next/image"

const InstaDiscount = () => {
  return (
    <div>
    <p className="font-roboto  font-medium leading-[auto] text-center mb-[60px] text-[33px] sm:text-[40px] 2xl:text-[42px]  3xl:text-[50px] ">
      Follow products and discounts on Instagram
    </p>
    <div className="flex gap-6 2xl:justify-between justify-center flex-wrap">
      <div className="rounded-md">
        <Image
          src="/asset/Image (1).png"
          alt=""
          width={185}
          height={185}
          className="xs:h-[155px] xs:w-[155px] h-[300px] w-[300px] 2xl:w-[185px] 2xl:h-[185px]"
        />
      </div>
      <div className=" rounded-md">
        <Image
          src="/asset/Image (2).png"
          alt=""
          width={185}
          className="xs:h-[155px] xs:w-[155px] h-[300px] w-[300px] 2xl:w-[185px] 2xl:h-[185px]"
          height={185}
        />
      </div>
      <div className="rounded-md">
        <Image
          src="/asset/Image (3).png"
          alt=""
          width={185}
          className="xs:h-[155px] xs:w-[155px] h-[300px] w-[300px] 2xl:w-[185px] 2xl:h-[185px]"
          height={185}
        />
      </div>{" "}
      <div className="rounded-md">
        <Image
          src="/asset/Image (4).png"
          alt=""
          width={185}
          className="xs:h-[155px] xs:w-[155px] h-[300px] w-[300px] 2xl:w-[185px] 2xl:h-[185px]"
          height={185}
        />
      </div>{" "}
      <div className=" rounded-md">
        <Image
          src="/asset/Image (5).png"
          alt=""
          width={185}
          className="xs:h-[155px] xs:w-[155px] h-[300px] w-[300px] 2xl:w-[185px] 2xl:h-[185px]"
          height={185}
        />
      </div>
      <div className="rounded-md">
        <Image
          src="/asset/card.png"
          alt=""
          width={185}
          className="xs:h-[155px] xs:w-[155px] h-[300px] w-[300px] 2xl:w-[185px] 2xl:h-[185px]"
          height={185}
        />
      </div>
    </div>
  </div>  )
}

export default InstaDiscount