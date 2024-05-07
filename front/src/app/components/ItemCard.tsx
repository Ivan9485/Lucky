'use client'
import { ProductInterface } from "../utils/inventory.interface";
import Image from 'next/image';
import { useState } from "react";

interface ItemCardProps {
  product: ProductInterface;
  key: number;
  onClick: () => void;
}

const ItemCard = ({product, key, onClick}: ItemCardProps) => {
  

  return (
    <div key={key} className="mb-6 shadow-xl bg-white h-60 w-[165px] rounded-md flex justify-center flex-col" onClick={onClick}>
      <Image
        src={product.image}
        alt={product.ImgAltText || "Product Image"}
        width={400}
        height={400}
        className="w-[200px] h-36 object-cover rounded-lg "
      />
      
      <p className="text-cerulean ml-3 text-base ">{product.name}</p>
      <p className="text-cerulean ml-3 text-lg">${product.price}</p>
    </div>
  )
}
export default ItemCard