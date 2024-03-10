import Image from "next/image";
import React, { useState } from "react";

const ImageGallery = ({ images }: { images: string[] }): JSX.Element => {
  const [current, setCurrent] = useState("");

  return (
    <>
      {current !== "" && (
        <div
          onClick={() => {
            setCurrent("");
          }}
          className="fixed left-0 top-0 z-50 h-screen w-screen bg-black bg-opacity-60"
        >
          <Image src={current} alt="" fill className="object-contain " />
        </div>
      )}
      <div className="flex flex-wrap">
        {images.map((img, i) => (
          <div key={i} className="w-full p-3 md:w-1/4">
            <div
              onClick={() => {
                setCurrent(img);
              }}
              className="relative z-30 h-60 overflow-hidden "
            >
              <Image
                src={img}
                className="object-cover transition-all duration-300 hover:scale-110"
                alt=""
                fill
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageGallery;
