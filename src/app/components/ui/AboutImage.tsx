import React from "react";
import Image from "next/image";

const AboutImage = () => {
  return (
    <Image
      src="/asset/Image Block.png"
      alt="Random Unsplash"
      className="xl:max-w-[50%] flex-1 object-cover xl:block hidden"
      priority
      width={500}
      height={500}
    />
  );
};

export default AboutImage;
