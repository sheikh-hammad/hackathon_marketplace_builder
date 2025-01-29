import { IoCartOutline } from "react-icons/io5";
import Image from "next/image";
interface Params {
  params: {
    id: string;
  };
}

interface Prop {
  name: string;
  src: string
  price: string
}
export const Click = function ({ name, price, src }: Prop) {
  //   const product = Prods.find((prod) => prod.id === parseInt(params.id));
  return (
    <div className="flex flex-col md:flex-row gap-8 lg:gap-[109px] items-center mb-[123px]">
      <div className="flex-1 w-full">
        <Image
        src={src}
        alt={name}
        width={675}
        height={607}
        className="min-w-[350px] w-full lg:w-[675px] h-full"
        />
      </div>
      <div className="flex-1 flex flex-col items-center md:items-start">
        <div className="flex flex-col gap-4 lg:gap-6 pb-[24px] lg:pb-[30px] xl:pb-[37px]">
          <h2 className="text-[#272343] font-bold md:text-[32px] lg:text-[36px] 2xl:text-[60px] leading-tight text-center xl:w-[541px] 2xl:w-[auto] 3xl:w-[541px] md:text-left">
            {name}
          </h2>
          <div className="flex justify-center md:justify-start">
            <button className="w-fit font-semibold text-[16px] md:text-[16px] lg:text-[20px] [line-height:110%] text-white bg-[#029FAE] rounded-[100px] px-[13px] py-[12px]">
              {price}.00 USD
            </button>
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex flex-col gap-4 lg:gap-6 pt-[24px] lg:pt-[30px] xl:pt-[37px]">
          <p className="text-[#272343] text-center md:text-left leading-150 text-[18px] md:text-[18px] 2xl:text-[22px] opacity-60 max-w-[90%] lg:max-w-[560px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing.
          </p>
          <div className="flex bg-[#029FAE] self-center md:self-start text-white px-6 py-[14px] rounded-lg items-center gap-[9px]">
            <IoCartOutline size={24} />
            <p className="text-[16px] md:text-[16px] lg:text-[20px] [line-height:110%] font-semibold">
              Add To Cart
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Click;
