import inventory from "@/app/data/inventory.json"

// componente

const Menu = () => {
  return (
    <div className=" w-full h-56 bg-white ">  
      {/* Favorites Section */}
      <div className=" flex flex-col">
        {/* Title */}
        <div className="text-lg"> Favoritos </div>
        {/* Grid */}
        <div className="grid-flow-row">
        {
          inventory.map((item, index)=>{
            return (
              <div key={index}>
                <div className="text-lg">{item.name}</div>
                <div className="text-sm">{item.description}</div>
                <div className="text-sm">{item.price}</div>
              </div>
            )
          }) 
        }
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