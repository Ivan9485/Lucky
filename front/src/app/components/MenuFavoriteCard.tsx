import { ProductInterface } from "../utils/inventory.interface";
import Image from "next/image";

interface FavoriteCardProps {
  index: number;
  product: ProductInterface;
}

const MenuFavoriteCard: React.FC<FavoriteCardProps> = ({ product, index }) => {
  return (
    <div
      key={index}
      className="flex flex-col content-center rounded-md shadow-md bg-white h-[170px] min-w-52 relative"
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
