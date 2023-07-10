import Image from "next/image";
import React from "react";
import loaderImage from "../../../assets/loader.gif";

const Loader = () => {
  return (
    <div className="flex items-center justify-center absolute inset-0">
      <Image alt="loader" src={loaderImage} width={150} height={150} />
    </div>
  );
};

export default Loader;
