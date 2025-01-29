import Product from "../ui/Product";
import React from "react";
import Link from "next/link";
import { getProductData } from "@/app/sanity";
import { urlFor } from "@/sanity/lib/image";
import {IProduct} from "../../sanity/index"

const FeaturedProducts = async () => {
    const products:IProduct[] = await getProductData();
  
  return (
    <section>
      <div className=" px-4 sm:px-[25px] md:px-[120px] 2xl:px-60 3xl:px-[300px] xl:px-[150px] lg:px-[100px] pt-6">
        <p className="text-[28px] text-center xs:text-left xs:text-[32px] leading-110 font-semibold mb-[40px] text-[#272343]">
          Featured Products
        </p>
        <div className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-4 gap-6 justify-center xl:justify-between">
          {products.slice(0, 4).map((product) => (
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
  );
};

export default FeaturedProducts;
