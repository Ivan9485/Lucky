"use client";
import MenuGrid from "./MenuGrid";
import inventory from "@/app/data/inventory.json";
import { useState, useEffect } from "react";
import { ProductInterface } from "../utils/inventory.interface";

const MenuTabs = () => {
  const [active, setActive] = useState("todos");
  const [products, setProducts] = useState(inventory.inventory);

  useEffect(() => {
    switch (active) {
      case "todos":
        setProducts(inventory.inventory);
        
        break;
      case "galletas":
        setProducts(
          inventory.inventory.filter((product: ProductInterface) =>
            product.tags.includes("galletas")
          )
        );
        break;
      case "pasteles":
        setProducts(
          inventory.inventory.filter((product: ProductInterface) =>
            product.tags.includes("pasteles")
          )
        );
        break;
      case "veganos":
        setProducts(
          inventory.inventory.filter((product: ProductInterface) =>
            product.tags.includes("veganos")
          )
        );
        break;
      default:
        break;
    }
  }, [active]);

  return (
    <div className="bg-pampas">
      {/* Tabs */}
      <div className="flex flex-row gap-1 text-lg justify-center pt-4 ">
        <div
          onClick={() => setActive("todos")}
          className={
            active === "todos"
              ? `hover:cursor-pointer bg-cerulean px-3 rounded-full text-white`
              : `hover:cursor-pointer px-3 rounded-full`
          }
        >
          Todos
        </div>

        <div
          onClick={() => setActive("galletas")}
          className={
            active === "galletas"
              ? `hover:cursor-pointer bg-cerulean px-3 rounded-full text-white`
              : `hover:cursor-pointer px-3 rounded-full`
          }
        >
          Galletas
        </div>
        <div
          onClick={() => setActive("pasteles")}
          className={
            active === "pasteles"
              ? `hover:cursor-pointer bg-cerulean px-3 rounded-full text-white`
              : `hover:cursor-pointer px-3 rounded-full`
          }
        >
          Pasteles
        </div>
        <div
          onClick={() => setActive("veganos")}
          className={
            active === "veganos"
              ? `hover:cursor-pointer bg-cerulean px-3 rounded-full text-white`
              : `hover:cursor-pointer px-3 rounded-full`
          }
        >
          Veganos
        </div>
      </div>
      {/* Grid */}
      <MenuGrid products={products} />
    </div>
  );
};
export default MenuTabs;
