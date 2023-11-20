import React from "react";

function TopSection(): JSX.Element {
  return (
    <>
      <div className="flex min-h-screen w-screen flex-col items-center justify-center bg-[url('/HeroBg.jpg')] bg-cover py-10">
        <h5 className=" mx-4 mt-4 text-center text-base text-primary md:mb-6  md:text-xl">
          Where Dreams Meet Destination
        </h5>
        <h1 className=" mb-6 text-center  text-white max-md:text-3xl ">
          AAMARA RESORT
        </h1>
        <hr className="mb-8 w-[20%]  border border-primary" />
        <p className="mx-4 mb-6 text-center text-lg font-light text-white md:w-[60%]">
          At Aamraa Resort, we&apos;re not just about providing a place to stay;
          we&apos;re about crafting unforgettable experiences in the heart of
          Junnar, near Bankarphata.
        </p>
        <button className="py-4 md:w-1/6">Rooms and Suits</button>
      </div>
    </>
  );
}

export default TopSection;
