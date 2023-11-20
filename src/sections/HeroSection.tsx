import Image from "next/image";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { RiGlobalLine } from "react-icons/ri";
import { FaUniversity } from "react-icons/fa";
function HeroSection(): JSX.Element {
  return (
    <>
      <div className="m-auto flex min-h-screen max-w-7xl flex-col items-center  justify-around px-6 py-20 md:flex-row ">
        <div className="flex  p-14 md:w-1/2">
          <div className="w-1/2 p-2">
            <Image
              src="/aamraa-vertical.jpg"
              height={300}
              width={300}
              className="object-contain"
              alt={""}
            />
          </div>
          <div className="w-1/2 p-2">
            <br />
            <br />
            <br />
            <Image
              src="/aamraa-vertical.jpg"
              height={300}
              width={300}
              className="object-contain"
              alt={""}
            />
          </div>
        </div>

        <div className=" flex flex-col max-md:pt-10 md:w-1/2 ">
          <h5 className="my-4 text-primary">The Best Luxury Resort </h5>
          <h2 className="font-semibold  ">
            Indulge in an extraordinary staycation experience at Aamraa Resort
          </h2>
          <p className=" my-6">
            a sanctuary of opulence and serenity nestled in the heart of Junnar.
            We are delighted to present you with three enchanting room
            categories, each promising a unique escape that redefines your idea
            of relaxation.
          </p>
          <div className="mb-6 flex items-start justify-start border  p-5 ">
            <RiGlobalLine color={"#be8746"} className="mr-8" size={80} />
            <div>
              <h4 className="font-secondary mb-2 ">Tailored Perfection</h4>
              <p>
                Our team of seasoned experts is committed to ensuring every
                detail aligns with your vision.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-start border  p-5  ">
            <FaUniversity color={"#be8746"} className="mr-8" size={80} />
            <div>
              <h4 className="font-secondary mb-2 ">
                Celebrating Moments Extraordinaire
              </h4>
              <p>
                Your special moments deserve to be elevated, and thats precisely
                what we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
