

const MenuTabs = () => {
  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-row gap-4 text-lg justify-center pt-4">
        <div className="hover:cursor-pointer bg-orange-400 px-3 rounded-full ">
          Todos
        </div>
        <div className="hover:cursor-pointer  px-3 rounded-full ">Galletas</div>
        <div className="hover:cursor-pointer  px-3 rounded-full ">Pasteles</div>
        <div className="hover:cursor-pointer  px-3 rounded-full ">Veganos</div>
      </div>
    </div>
  );
}
export default MenuTabs