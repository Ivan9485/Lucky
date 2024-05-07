'use client'
import { ProductInterface } from "../utils/inventory.interface"
import ItemCard from "./ItemCard"
import Modal from "./Modal";
import { useState } from "react";
import Image from "next/image";


interface MenuGridProps {
  products: ProductInterface[];
  selectedTab: string;
}



const MenuGrid = ({products,selectedTab}:MenuGridProps) => {
  const [open, setOpen] = useState(false)
  

  const [selectedProduct, setSelectedProduct] = useState<ProductInterface>(products[0])

  return (
    <div className="flex w-full justify-center">
    <div className="grid grid-cols-2 w-[500px] h-full pt-8 overflow-y-scroll ml-3 ">
      <div onClick={()=>{setOpen(true);}}>
        <div className="h-10 text-3xl m-3">{selectedTab}</div>
        {
          products.map((product: ProductInterface, index: number) => (
            index % 2 === 0 && <ItemCard product={product} key={index} onClick={() => {setOpen(true); setSelectedProduct(product);}} />
          ))
        }
      </div>
      <div>
        {
          products.map((product: ProductInterface, index: number) => (
            index % 2 !== 0 && <ItemCard product={product} key={index} onClick={() => {setOpen(true); setSelectedProduct(product);}}/>
          ))
        }
      </div>
    </div>
    {/* Detalle o Modal */}
    <Modal open={open} onClose={()=>setOpen(false)}>
        <div>
        <Image
        src={selectedProduct?.image }
        alt={selectedProduct?.ImgAltText || "Product Image"}
        width={400}
        height={400}
        className="w-[200px] h-36 object-cover rounded-lg border-2 border-black "
      />
      <div className="flex justify-between py-2">
          <h1>{selectedProduct?.name}</h1>
          <h1>${selectedProduct.price}</h1>
          </div>
          <p>{selectedProduct.description}</p>
        </div>
    </Modal>
    </div>
  )
}
export default MenuGrid