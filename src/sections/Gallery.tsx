import ImageGallery from "@/components/ImageGallery";
import Link from "next/link";
import React from "react";

const GallerySection = (): JSX.Element => {
  return (
    <>
      <div className="mx-auto  max-w-7xl px-3 py-10 text-center">
        <h2 className=" mx-4 mb-8 mt-4 text-center ">Gallery</h2>

        <ImageGallery
          images={[
            "/images/ambi/ambi22.jpg",
            "/images/pool/pool4.jpg",
            "/images/ambi/ambi4.jpg",
          ]}
        />
        <Link href={"/gallery"}>
          <button className="mt-5 px-20">View More </button>
        </Link>
      </div>
    </>
  );
};

export default GallerySection;
