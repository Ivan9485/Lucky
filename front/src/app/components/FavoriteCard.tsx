'use client'
import { ProductInterface } from "../utils/inventory.interface";
import Image from "next/image";


const MenuFavoriteCard: React.FC<{product:ProductInterface, key:number}> = ({product, key}) => {
  return (
    <div
      key={key}
      className="flex flex-col content-center rounded-md shadow-md bg-white h-[170px] min-w-52 relative"
      onClick={() => console.log("Product clicked")}
    >
      <Image
        src={product.image}
        alt={product.ImgAltText || "Product Image"}
        width={400}
        height={400}
        className="w-full h-full object-cover absolute rounded-lg"
      />
      <p className="text-center absolute bottom-0 ml-4 mb-4">{product.name}</p>
    </div>
  );
};

export default MenuFavoriteCard;
