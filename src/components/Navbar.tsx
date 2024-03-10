import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = (): JSX.Element => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className=" z-50 w-full  bg-white ">
        <div className="m-auto flex items-center justify-between md:w-3/4">
          <div className="logo">
            <Link href={"/"}>
              <Image
                width={80}
                height={80}
                src={"/aamraa-logo.png"}
                alt="logo"
              />
            </Link>
          </div>
          <div
            className={`links flex  ${
              toggle
                ? "animate-fade fixed  right-0 top-16 w-2/3 flex-col bg-white text-center"
                : "max-md:hidden"
            }`}
          >
            <Link href={"/"}>
              <p className="my-1 cursor-pointer hover:text-primary md:mx-5">
                Home
              </p>
            </Link>
            <Link href={"/about"}>
              <p className="my-1 cursor-pointer hover:text-primary md:mx-5">
                About
              </p>
            </Link>
            <Link href={"/rooms"}>
              <p className="my-1 cursor-pointer hover:text-primary md:mx-5">
                Rooms
              </p>
            </Link>
          </div>
          <div
            className="hamburger mr-5 md:hidden"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <div className="line mb-1 h-0.5 w-5 rounded bg-black"></div>
            <div className="line mb-1 h-0.5 w-5 rounded bg-black"></div>
            <div className="line mb-1 h-0.5 w-5 rounded bg-black"></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
