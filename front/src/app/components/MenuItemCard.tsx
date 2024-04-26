import { ProductInterface } from "../utils/inventory.interface"

interface ItemCardProps {
  index: number,
  product: ProductInterface
}
const MenuItemCard: React.FC<ProductInterface> = ({product, index}) => {
  

  return (
    <div key={index}>
      <div>{product.name}</div>
    </div>
  )
}
export default MenuItemCard