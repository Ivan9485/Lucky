import Image from "next/image";
import Menu from "./components/Menu";
import Cover from "./components/Cover";

export default function Home() {
  return (
    <div className="h-screen w-full bg-pampas flex flex-col">
      <Cover/>
      <div className="">
        <Menu />
      </div>
    </div>
  );
}
