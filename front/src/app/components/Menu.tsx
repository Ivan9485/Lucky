import inventory from "@/app/data/inventory.json";
import { ProductInterface } from "../utils/inventory.interface";
import Image from "next/image";
import FavoriteCard from "./FavoriteCard";
import MenuTabs from "./MenuTabs";
import MenuGrid from "./MenuGrid";

// componente
const Menu = () => {
  return (
    <div className=" w-full h-screen bg-white ">
      {/* Menu Banner */}
      <div className="bg-cerulean w-full h-20 relative">
        <h1 className="absolute bottom-0 text-4xl ml-10 mb-3 font-bold text-white">
          Menú
        </h1>
      </div>

      {/* Favorites Section */}
      <div className="h-[250px] bg-pampas flex flex-col pt-3">
        {/* Title */}
        <div className="text-lg text-left ml-10 my-2 font-bold text-cerulean">
          {" "}
          Favoritos{" "}
        </div>
        {/* Grid */}
        <div className="flex w-full h-full overflow-scroll gap-3 flex-row pl-10">
          {inventory.inventory
            .filter((product: ProductInterface) => product.tags.includes("fav"))
            .map((product: ProductInterface, index: number) => (
              <FavoriteCard key={index} product={product} />
            ))}
        </div>
      </div>

      {/* Products Section*/}

      {/* Tabs */}
      <MenuTabs />
    </div>
  );
};
export default Menu;
