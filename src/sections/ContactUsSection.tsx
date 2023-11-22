import React from "react";
import { MdLocalPhone } from "react-icons/md";

function ContactUsSection(): JSX.Element {
  return (
    <>
      <div className="flex  min-h-screen w-screen flex-col items-center justify-center bg-[url('/ContactUsBg.jpg')]  bg-cover p-6  md:flex-row">
        <div className="flex flex-col  items-start justify-center md:w-1/3 ">
          <h1 className="mb-8 text-white ">Call us, it&apos;s toll-free</h1>
          <p className="text-white">
            Each of our guest rooms feature a private bath, wi-fi, cable
            television and include full breakfast. And also have awesome swing
            system in the ponds
          </p>
          <div className="my-10 flex items-center justify-center">
            <MdLocalPhone size={80} color={"#DBA765"} />
            <div>
              <h4 className=" text-primary ">880 987 654 765</h4>
              <h4 className="text-white">For More Information</h4>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center  bg-white p-8 md:m-10 md:w-2/5 md:p-14 ">
          <h5 className="self-start text-primary ">ROOMS AND SUITS</h5>
          <h2 className="my-6">Hotel Booking Form</h2>
          <div className="flex w-full flex-col md:flex-row md:space-x-6  ">
            <div className="w-full">
              <h4 className="mb-2 font-bold">Check In</h4>
              <input
                className="mb-6  border p-3  px-6  focus:border-primary"
                type="date"
              />
            </div>
            <div className="w-full">
              <h4 className="mb-2 font-bold">Check Out</h4>
              <input
                className="mb-6  border p-3  px-6  focus:border-primary"
                type="date"
              />
            </div>
          </div>
          <div className="flex space-x-6 ">
            <div className="w-full">
              <h4 className="mb-2 font-bold">Adult</h4>
              <select
                id="countries"
                className="mb-6 block w-full border bg-white px-3 py-3"
              >
                <option selected>1</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </div>
            <div className="w-full">
              <h4 className="mb-2 font-bold">Children</h4>
              <select
                id="countries"
                className="mb-6 block w-full border bg-white px-3 py-3"
              >
                <option selected>1</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </div>
          </div>
          <div className="w-1/2">
            <h4 className="mb-2 font-bold">Room</h4>
            <select
              id="countries"
              className="mb-6 block w-full border bg-white px-3 py-3"
            >
              <option selected>1</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </div>
          <button className="py-4 ">Check Availability</button>
        </div>
      </div>
    </>
  );
}

export default ContactUsSection;
