import Image from "next/image";
import React from "react";
import ImageGallery from "./ImageGallery";

interface IRoomDetails {
  name: string;
  subtitle: string;
  featured: string;
  description: string;
  images: string[];
}

const RoomDetail = ({
  name,
  featured,
  subtitle,
  images,
  description,
}: IRoomDetails): JSX.Element => {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-10">
        <h1 className="py-20 text-center">{name}</h1>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="p-5 md:w-1/2">
            <h2>{subtitle}</h2>
            <br />
            <p>{description}</p>
          </div>
          <Image
            className="p-5 md:w-1/2"
            src={featured}
            alt=""
            width={800}
            height={800}
          />
        </div>

        <ImageGallery images={images} />
      </div>
    </>
  );
};

export default RoomDetail;
