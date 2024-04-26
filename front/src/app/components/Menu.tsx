import inventory from "@/app/data/inventory.json";
import { ProductInterface } from "../utils/inventory.interface";
import Image from "next/image";
import MenuFavoriteCard from "./MenuFavoriteCard";
import MenuTabs from "./MenuTabs";
import MenuGrid from "./MenuGrid";

// componente
const Menu = () => {

  return (
    <div className=" w-full h-screen bg-white ">
      {/* Favorites Section */}
      <div className="h-[250px] bg-yellow-100 flex flex-col ">
        {/* Title */}
        <div className="text-lg text-left ml-10 my-2"> Favoritos </div>
        {/* Grid */}
        <div className="flex w-full h-full overflow-x-auto whitespace-nowrap gap-3 flex-row ml-10">
          {inventory.inventory
            .filter((product: ProductInterface) => product.tags.includes("fav"))
            .map((product: ProductInterface, index: number) => (
              <MenuFavoriteCard key={index} product={product} />
            ))}
        </div>
      </div>

      {/* Products Section*/}

      {/* Tabs */}
      <MenuTabs />
          
      {/* Grid */}
      <MenuGrid />
      
    </div>
  );
};
export default Menu;
