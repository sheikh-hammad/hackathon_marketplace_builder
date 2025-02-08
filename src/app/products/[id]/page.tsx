import { notFound } from "next/navigation";
import { Image } from "sanity";
import { Prods } from "../../components/data/types";
import { client } from "../../../sanity/lib/client";
import Click from "@/app/components/ui/Click";
import FeatureComponent from "@/app/components/ui/FeatureComponent";
import { urlFor } from "@/sanity/lib/image";

interface Params {
  params: {
    id: string;
  };
}

interface IProduct {
  title: string;
  desc: string;
  image: Image;
  tags: string;
  price: string;
  _id: string;
  priceWithoutDiscount: string;
  tagClass?: string;
  cartClass?: string;
  priceClass?: string;
  nameClass?: string;
}

export async function generateStaticParams() {
  return Prods.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPages({ params }: Params) {
  const getProductData = async () => {
    return await client.fetch(`*[_type=='products']{
      title,
      _id,
      badge, 
      priceWithoutDiscount,
      category,
      price,
      description,
      tags -> ,
      image
    }`);
  };

  const products: IProduct[] = await getProductData();
  const product = products.find((prod) => prod._id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="pt-[57px] pb-[173px] px-4 sm:px-[25px] md:px-[120px] 2xl:px-60 3xl:px-[265px] xl:px-[150px] lg:px-[100px]">
      <Click
        name={product.title}
        price={product.price}
        src={urlFor(product.image).width(500).url()}
      />
      <FeatureComponent />
    </div>
  );
}
