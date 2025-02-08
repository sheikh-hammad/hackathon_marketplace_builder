import {Image} from 'sanity'
import {client} from "../../sanity/lib/client"


export const getProductData = async () => {
    const res = await client.fetch(`*[_type=='products']{
      title,
      _id,
      badge, 
      priceWithoutDiscount,
      price,
      description,
      image
  }`)
  return res
    }

 export interface IProduct {
    title: string;
    desc: string;
    image: Image;
    badge: string;
    price: string;
    _id: string;
    priceWithoutDiscount: string;
    tagClass?: string,
    cartClass?: string,
    priceClass?: string,
    nameClass?: string,
  }
  

  export const getCategoriesData = async () => {
    const res = await client.fetch(`*[_type=='categories']{
  title,
    image,
    _id
}
`)
  return res
    }

 export interface ICategories {
    title: string;
    image: Image;
    _id: string;
 }
  