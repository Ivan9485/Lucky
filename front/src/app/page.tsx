import Image from "next/image";
import Menu from "../app/components/Menu"

export default function Home() {
  return (
   <div className="h-screen w-full bg-green-200 flex flex-col">
    <div className="text-center my-10 ">
      <h1 className="">
        Lucky bakery :3
      </h1>
    </div>
    <div className="">
    <Menu />
    </div>
   </div>
  );
}
