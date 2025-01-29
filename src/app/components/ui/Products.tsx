import React from "react";
import Product from "./Product"; 
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { getProductData } from "@/app/sanity";
import {IProduct} from "../../sanity/index"

const Products = async () => {
  const products:IProduct[] = await getProductData();

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-[84px]">
      {products.map((product) => (
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
  );
};

export default Products;
