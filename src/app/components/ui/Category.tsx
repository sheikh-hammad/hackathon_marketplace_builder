import React from "react";
import Image from "next/image";
import { ProductCard } from "../data/types";

const Category = ({ image, title, products }: ProductCard) => {
  return (
    <>
      <div className=" mt-7 mb-5" id="btn_div">
        <div className="relative w-full">
            <Image
              className="w-full rounded-[10px]"
              src={image}
              alt=""
              width={424}
              height={424}
            />
            <div className="absolute bottom-0 p-4 2.5xl:p-5 opacity-70 bg-black flex flex-col gap-2 w-full rounded-b-[10px]">
              <p className="text-white font-semibold text-[20px]">{title}</p>
              <p className="text-[14px] font-normal leading-110 text-white opacity-70">
                {products}
              </p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Category;
