import React from "react";

function RoomSection(): JSX.Element {
  return (
    <>
      <div className="flex  flex-col items-center justify-center bg-[#F8F5F0] py-20 ">
        <h4 className=" text-primary ">THE LUXURY HOTEL</h4>
        <h2 className=" mx-4 mb-8 mt-4 text-center font-semibold ">
          Rooms & Suits
        </h2>
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row">
          <div className=" mx-6 flex h-96 flex-col items-start justify-end  bg-[url('/aamraa1.jpg')] bg-cover  md:w-1/3   ">
            <div className="bg-black bg-opacity-40 p-4 md:p-4">
              <h3 className="mb-4 leading-9 text-white">
                Cosmo Capsules: The Futuristic Retreat
              </h3>
              <p className="mb-4 text-white">38m2/2 beds/1 bathroom</p>
            </div>
          </div>
          <div className=" mx-6 flex h-96 flex-col items-start justify-end  bg-[url('/aamraa1.jpg')] bg-cover  md:w-1/3   ">
            <div className="bg-black bg-opacity-40 p-4 md:p-4">
              <h3 className="mb-4 leading-9 text-white">
                The Azure Lakeview Suites - Nature&apos;s Embrace
              </h3>
              <p className="mb-4 text-white">38m2/2 beds/1 bathroom</p>
            </div>
          </div>
          <div className=" mx-6 flex h-96 flex-col items-start justify-end  bg-[url('/aamraa1.jpg')] bg-cover  md:w-1/3   ">
            <div className="bg-black bg-opacity-40 p-4 md:p-4">
              <h3 className="mb-4 leading-9 text-white">
                The Wada Vintage Rooms - Echoes of Tradition
              </h3>
              <p className="mb-4 text-white">38m2/2 beds/1 bathroom</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomSection;
