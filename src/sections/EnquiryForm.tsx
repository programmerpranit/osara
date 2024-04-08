import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

function EnquiryForm(): JSX.Element {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [peoples, setPeoples] = useState("1");
  // const [child, setChild] = useState("0");
  const [name, setName] = useState("");
  const [room, setRoom] = useState("1");
  const [phone, setPhone] = useState("");

  const submitForm = async (): Promise<void> => {
    console.log(checkIn);
    console.log(checkOut);
    console.log(peoples);
    console.log(room);
    console.log(name);
    console.log(phone);

    try {
      const url = "https://aamraaresort.com/api/sendmail";
      await axios.post(url, {
        checkIn,
        checkOut,
        peoples,
        room,
        name,
        phone,
      });
      toast.success("Enquiry sent successfully");
    } catch (error) {
      console.log(error);
      toast.error("Unkonwn Error occured");
    }
  };

  return (
    <>
      <div className="mx-auto bg-secondary md:px-10">
        <div className=" flex  flex-col items-start justify-between gap-2  self-center  px-10 pt-10 md:flex-row  md:items-center ">
          <div className="flex-1 max-md:w-full ">
            <h4 className="font-secondary mb-2 ">Check In</h4>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => {
                setCheckIn(e.target.value);
              }}
              className="mb-6 flex w-full items-center justify-center  border p-3 px-6  outline-none  focus:border-primary"
            />
          </div>
          <div className="flex-1 max-md:w-full">
            <h4 className="font-secondary mb-2 ">Check Out</h4>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => {
                setCheckOut(e.target.value);
              }}
              className="mb-6 flex w-full items-center justify-center  border p-3 px-6  outline-none  focus:border-primary"
            />
          </div>
          <div className="flex-1 max-md:w-full">
            <h4 className="font-secondary mb-2 ">Adult</h4>
            <select
              value={peoples}
              onChange={(e) => {
                setPeoples(e.target.value);
              }}
              className="mb-6 block w-full border bg-white px-3 py-3 outline-none focus:border-primary"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="flex-1 max-md:w-full">
            <h4 className="font-secondary mb-2 ">Room</h4>
            <select
              id="countries"
              value={room}
              onChange={(e) => {
                setRoom(e.target.value);
              }}
              className="mb-6 block w-full border bg-white px-3 py-3 outline-none focus:border-primary"
            >
              <option value="Mangiferal">Mangiferal</option>
              <option value="Cosmo Capsule">Cosmo Capsule</option>
              <option value="Loft">Loft</option>
            </select>
          </div>
          <div className=" flex-1 max-md:w-full">
            <h4 className="font-secondary mb-2 ">Name</h4>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="mb-6 flex w-full items-center justify-center  border p-3 px-6  outline-none  focus:border-primary"
            />
          </div>

          <div className="flex-1 max-md:w-full">
            <h4 className="font-secondary mb-2 ">Phone Number</h4>
            <input
              type="text"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              className="mb-6 flex w-full items-center justify-center  border p-3 px-6  outline-none  focus:border-primary"
            />
          </div>
        </div>
        <div className="text-center ">
          <button
            onClick={() => {
              void submitForm();
            }}
            className=" mx-auto mb-5 w-4/5 py-4 md:w-1/3"
          >
            Check Availability
          </button>
        </div>
      </div>
    </>
  );
}

export default EnquiryForm;
