import Image from "next/image";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { RiGlobalLine } from "react-icons/ri";
import { FaUniversity } from "react-icons/fa";
function HeroSection(): JSX.Element {
  return (
    <>
      <div className="m-auto flex min-h-screen max-w-6xl flex-col items-center  justify-around px-6 py-20 md:flex-row ">
        <div className="md:w-1/2">
          <Image
            src="/RoomsIMage.png"
            height={500}
            width={500}
            className=""
            alt={""}
          />
        </div>

        <div className=" flex flex-col max-md:pt-10 md:w-1/2 ">
          <h5 className="my-4 text-primary">THE BEST LUXURY HOTEL</h5>
          <h2 className="font-semibold  ">
            Find the right Apartment Hotel and Resort for You
          </h2>
          <p className=" my-6">
            Over 39,000 people work for us in more than 70 countries all over
            This breadth of global coverage combined with specialist services
          </p>
          <div className="mb-6 flex items-start justify-start border  p-5 ">
            <RiGlobalLine color={"#be8746"} className="mr-8" size={80} />
            <div>
              <h4 className="font-secondary mb-2 ">5 Star Hotel In World</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae voluptatum
              </p>
            </div>
          </div>
          <div className="flex items-start justify-start border  p-5  ">
            <FaUniversity color={"#be8746"} className="mr-8" size={80} />
            <div>
              <h4 className="font-secondary mb-2 ">Best Environment</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae voluptatum
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
