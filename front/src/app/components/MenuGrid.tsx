import { ProductInterface } from "../utils/inventory.interface"
import MenuItemCard from "./MenuItemCard"

const MenuGrid: React.FC<ProductInterface> = ({products}) => {
  return (
    <div className="flex w-full justify-center">
    <div className="grid grid-cols-2 w-[500px] h-full pt-8 overflow-y-scroll ml-3 ">
      <div>
        <div className="h-10 text-3xl m-3">Todos</div>
        {
          products.map((product: ProductInterface, index: number) => (
            index % 2 === 0 && <MenuItemCard product={product} key={product.id} />
          ))
        }
      </div>
      <div >
        {
          products.map((product: ProductInterface, index: number) => (
            index % 2 !== 0 && <MenuItemCard product={product} key={product.id}/>
          ))
        }
      </div>
    </div>
    </div>
  )
}
export default MenuGrid