import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

const Slider = (): JSX.Element => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="relative h-screen w-screen"
      >
        <SwiperSlide className="relative h-screen w-screen">
          <Image
            src={"/images/ambi/ambi29.jpg"}
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute top-0 flex h-screen w-screen flex-col items-center justify-center bg-black bg-opacity-50 py-10">
            <h5 className=" mx-4 mt-4 text-center text-base text-primary md:mb-6  md:text-xl">
              Where Dreams Meet Destination
            </h5>
            <h1 className=" mb-6 text-center  text-white max-md:text-3xl ">
              AAMARA RESORT
            </h1>
            <hr className="mb-8 w-[20%]  border border-primary" />
            <p className="mx-4 mb-6 text-center text-lg font-light text-white md:w-[60%]">
              At Aamraa Resort, we&apos;re not just about providing a place to
              stay; we&apos;re about crafting unforgettable experiences in the
              heart of Junnar, near Bankarphata.
            </p>
            <Link className=" md:w-1/6" href={"/rooms"}>
              <button className="w-full py-4">Explore</button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative h-screen w-screen">
          <Image
            src={"/images/ambi/ambi2.jpg"}
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute top-0 flex h-screen w-screen flex-col items-center justify-center bg-black bg-opacity-50 py-10">
            <h5 className=" mx-4 mt-4 text-center text-base text-primary md:mb-6  md:text-xl">
              Your Gateway to Junnar&apos;s Wonders, Your Home Away from Home.
            </h5>
            <h1 className=" mb-6 text-center  text-white max-md:text-3xl ">
              AAMARA RESORT
            </h1>
            <hr className="mb-8 w-[20%]  border border-primary" />
            <p className="mx-4 mb-6 text-center text-lg font-light text-white md:w-[60%]">
              Welcome to Aamraa Resort, where dreams meet destination, and where
              your journey is our passion. We look forward to being a part of
              your adventures and helping you create memories that last a
              lifetime.
            </p>
            <Link className="py-4 md:w-1/6" href={"/rooms"}>
              <button className="w-full py-4">Explore</button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
