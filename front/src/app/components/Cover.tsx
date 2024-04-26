import Image from "next/image";

const Cover = () => {
  return (
    <header className="min-h-screen">
      <div className="relative -top-32">
        <Image
          src="/assets/img/cookie.png"
          alt=""
          width={430}
          height={430}
          className="m-auto"
        ></Image>{" "}
        {/*cambiar imágenes a las reales*/}
      </div>
      <div>
        <Image
          src="/assets/img/lucky-bakehouse.png"
          alt=""
          width={275}
          height={105}
          className="m-auto"
        ></Image>
      </div>
    </header>
  );
};

export default Cover;
