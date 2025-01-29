import React from "react";
import Image from "next/image";
import { ProdType } from "../data/types";
const Produc = ({ img, name, price }: ProdType) => {
  return (
    <div className="grid gap-y-[15px] gap-x-[20px]">
      <div className="col-span-1">
        <Image alt="" src={img} width={270} height={263} />
      </div>
      <div className="flex justify-between items-center">
        <p className="text-[#272343] leading-130">{name} </p>
        <p className="text-[14px] font-bold">{price}</p>
      </div>
    </div>
  );
};

export default Produc
