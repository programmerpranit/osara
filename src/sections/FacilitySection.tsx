import React from "react";
import { RiHomeWifiLine } from "react-icons/ri";
import { FaCoffee, FaBath } from "react-icons/fa";
import { IoMdAlarm } from "react-icons/io";
function FacilitySection(): JSX.Element {
  return (
    <>
      {" "}
      <div className="mb-10 flex flex-col items-center justify-center p-6 py-20">
        <h5>HOTEL FACILITIES</h5>
        <h2 className=" mx-4 mb-8 mt-4 text-center ">
          Finest And Luxurious Hotel In The Town
        </h2>
        <p className="text-center">
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart.
        </p>
        <div className="m-auto my-12 flex flex-col justify-around gap-5 md:w-11/12   md:flex-row ">
          <div className=" flex flex-col  items-center justify-center rounded-sm border-2 border-secondary bg-secondary p-12 transition-all hover:border-2 hover:border-primary hover:bg-white  md:w-1/6 ">
            <IoMdAlarm color={"#be8746"} size={60} />

            <h3 className="mt-4">Parking</h3>
          </div>
          <div className=" flex flex-col  items-center justify-center rounded-sm border-2 border-secondary bg-secondary p-12 transition-all hover:border-2 hover:border-primary hover:bg-white  md:w-1/6 ">
            <FaCoffee color={"#be8746"} size={60} />

            <h3 className="mt-4">Coffee</h3>
          </div>
          <div className="flex flex-col  items-center justify-center rounded-sm border-2 border-secondary bg-secondary p-12 transition-all hover:border-2 hover:border-primary hover:bg-white  md:w-1/6 ">
            <FaBath color={"#be8746"} size={60} />

            <h3 className="mt-4">Bath</h3>
          </div>
          <div className=" flex flex-col  items-center justify-center rounded-sm border-2 border-secondary bg-secondary p-12 transition-all hover:border-2 hover:border-primary hover:bg-white  md:w-1/6 ">
            <RiHomeWifiLine color={"#be8746"} size={60} />

            <h3 className="mt-4">Wifi</h3>
          </div>
          <div className="flex flex-col  items-center justify-center rounded-sm border-2 border-secondary bg-secondary p-12 transition-all hover:border-2 hover:border-primary hover:bg-white  md:w-1/6 ">
            <IoMdAlarm color={"#be8746"} size={60} />

            <h3 className="mt-4">Parking</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default FacilitySection;
