import inventory from "@/app/data/inventory.json"
import { ProductInterface } from "../utils/inventory.interface"
import Image from "next/image"
import FavoriteCard from "./FavoriteCard"

// componente

const Menu = () => {
  return (
    <div className=" w-full h-screen bg-white ">  
      {/* Favorites Section */}
      <div className="h-[500px] bg-yellow-100 flex flex-col">
        {/* Title */}
        <div className="text-lg text-left ml-10 my-2"> Favoritos </div>
        {/* Grid */}
        <div className="flex w-full h-full overflow-x-auto whitespace-nowrap gap-3 flex-row">
        {inventory.inventory.map((product: ProductInterface, index: number) => (
            <FavoriteCard key={index} product={product}/>
          ))}
      

       
        </div>
      </div>
      {/* Whole menu Section*/}
      <div className="">
        {/* Tabs */}
        <div></div>
        {/* Grid */}
        <div>

        </div>
      </div>
    </div>
  )
}
export default Menu
