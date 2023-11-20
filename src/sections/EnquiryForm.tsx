import React from "react";

function EnquiryForm(): JSX.Element {
  return (
    <>
      <div className="mx-auto flex w-11/12 flex-col items-start justify-between  self-center bg-secondary px-10 py-10 md:flex-row  md:items-center md:space-x-4 ">
        <div className="w-full">
          <h4 className="mb-2 font-bold">Check In</h4>
          <input
            type="date"
            className="mb-6 flex w-full items-center justify-center  border p-3 px-6  outline-none  focus:border-primary"
          />
        </div>
        <div className="w-full">
          <h4 className="mb-2 font-bold">Check Out</h4>
          <input
            type="date"
            className="mb-6 flex w-full items-center justify-center  border p-3 px-6  outline-none  focus:border-primary"
          />
        </div>
        <div className="w-1/2 md:w-1/6">
          <h4 className="mb-2 font-bold">Adult</h4>
          <select
            id="countries"
            className="mb-6 block w-full border bg-white px-3 py-3 outline-none focus:border-primary"
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
        <div className="w-1/2 md:w-1/6">
          <h4 className="mb-2 font-bold">Children</h4>
          <select
            id="countries"
            className="mb-6 block w-full border bg-white px-3 py-3 focus:border-primary"
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
        <div className="w-1/2 md:w-1/6">
          <h4 className="mb-2 font-bold">Room</h4>
          <select
            id="countries"
            className="mb-6 block w-full border bg-white px-3 py-3 focus:border-primary"
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

        <button className=" w-1/2 py-4 md:w-1/5">Check Now</button>
      </div>
    </>
  );
}

export default EnquiryForm;
