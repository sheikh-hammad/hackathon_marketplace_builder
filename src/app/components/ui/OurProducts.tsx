import React from "react";
import { Product } from "./Product";
import { Prods } from "../data/types";
import Link from "next/link";
import { getProductData } from "@/app/sanity";
import { urlFor } from "@/sanity/lib/image";
import { IProduct } from "../../sanity/index";

const OurProducts = async () => {
  const products: IProduct[] = await getProductData();

  return (
    <>
      <section>
        <div className="px-4 sm:px-[25px] md:px-[120px] 2xl:px-60 3xl:pr-[293] 3xl:pl-[307] xl:px-[150px] lg:px-[100px] pt-[100px] md:pt-[173px] pb-[100px] md:pb-[136px]">
          <p className="text-[#272343] text-[32px] font-semibold leading-[1.1] text-center mt-[16px] mb-[74px]">
            Our Products
          </p>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-[84px]">
            {products.slice(0, 8).map((product) => (
                    <Link key={product._id} href={`/products/${product._id}`} passHref>
                    <Product
                      title={product.title}
                      badge={product.badge}
                      price={product.priceWithoutDiscount}
                      discountedPrice={product.price}
                      src={urlFor(product.image).width(500).url()} 
                      tagClass={product.tagClass}
                      cartClass={product.cartClass}
                      priceClass={product.priceClass}
                      nameClass={product.nameClass}
                    />
                  </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProducts;
