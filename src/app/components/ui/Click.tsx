import { IoCartOutline } from "react-icons/io5";
import Image from "next/image";
import { Star, ShoppingCart, Heart, Check } from "lucide-react";
import AddToCartButton from "./AddToCartButton";
import useState from "react";
interface Params {
  params: {
    id: string;
  };
}

interface Prop {
  name: string;
  src: string;
  price: string;
  label?: string;
}
export const Click = function ({ name, price, src }: Prop) {
  //   const product = Prods.find((prod) => prod.id === parseInt(params.id));
  return (
    <div className="flex flex-col md:flex-row gap-8 lg:gap-[109px] items-start mb-[123px]">
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
        <div className="flex flex-col gap-4 lg:gap-3 pb-[24px] lg:pb-[30px] xl:pb-[37px]">
          <h2 className="text-[#272343] font-bold md:text-[32px] lg:text-[36px] 2xl:text-[60px] leading-tight text-center xl:w-[541px] 2xl:w-[auto] 3xl:w-[541px] md:text-left">
            {name}
          </h2>
          <h3 className="text-[#272343] font-bold md:text-[26px] lg:text-[20px] 2xl:text-[54px] leading-tight text-center xl:w-[541px] 2xl:w-[auto] 3xl:w-[541px] md:text-left">
            Category
          </h3>
          <div className="flex gap-2.5">
            <div className="flex gap-2">
              <Star className="stroke-0 text-yellow-500 fill-yellow-500" />
              <Star className="stroke-0 text-yellow-500 fill-yellow-500" />
              <Star className="stroke-0 text-yellow-500 fill-yellow-500" />
              <Star className="stroke-0 text-yellow-500 fill-yellow-500" />
              <Star className="stroke-0 text-gray-300 fill-gray-300" />
            </div>
            <span>(10 Reviews)</span>
          </div>
          <div className="flex justify-center md:justify-start gap-4">
            <p className="text-green-900 font-bold text-lg">${price}</p>
            <p className="text-gray-400 line-through font-bold text-lg">
              ${price}
            </p>
          </div>
          <div className="flex justify-center md:justify-start gap-4">
            <p className="text-slate-600 text-[8px] font-bold text-lg">
              Availability:
            </p>
            <p className="text-green-900  font-bold text-lg">In Stock</p>
          </div>
          <p className="text-[#272343] text-center md:text-left leading-150 text-[18px] md:text-[16px] 2xl:text-[18px] opacity-60 max-w-[90%] lg:max-w-[560px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing.
          </p>
          <div className="flex flex-col gap-2">
            <h4>Color Family:</h4>
            <div className="flex gap-2">
              <div className="rounded-full w-6 h-6 bg-orange-700"></div>
              <div className="rounded-full w-6 h-6 bg-blue-700"></div>
              <div className="rounded-full w-6 h-6 bg-green-700"></div>
              <div className="rounded-full w-6 h-6 bg-yellow-700"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4>Size Family:</h4>
            <div className="flex gap-2">
              <div className="px-3 py-1 text-slate-600 text-[9px] outline-[0.5px] outline bg-slate-100">
                XS
              </div>
              <div className="px-3 py-1 text-slate-600 text-[9px] outline-[0.5px] outline bg-slate-100">
                SM
              </div>
              <div className="px-3 py-1 text-slate-600 text-[9px] outline-[0.5px] outline bg-slate-100">
                MD
              </div>
              <div className="px-3 py-1 text-slate-600 text-[9px] outline-[0.5px] outline bg-slate-100">
                LG
              </div>
              <div className="px-3 py-1 text-slate-600 text-[9px] outline-[0.5px] outline bg-slate-100">
                XL
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <AddToCartButton
              label="Add to cart"
              icon={<ShoppingCart size={20}/>}
              addLabel="Added to cart"
              tickIcon={<Check size={20} />}
            />
            <AddToCartButton
              label="Add to wishlist"
              icon={<Heart size={20} />}
              addLabel="Added to wishlist"
              tickIcon={<Check size={20}/>}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Click;
