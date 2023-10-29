/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function MobileNav({ open, setOpen }: any) {
  return (
    <div
      className={`absolute left-0 top-0 h-screen w-screen transform bg-white  ${
        open ? "-translate-x-0" : "-translate-x-full"
      } filter transition-transform duration-300 ease-in-out  `}
    >
      <div className="flex h-20 items-center justify-center   filter">
        <Link onClick={() => setOpen(!open)} href="/">
          <Image
            className="h-full w-full cursor-pointer"
            src="/Logo.png"
            width={70}
            height={70}
            alt="..."
          />{" "}
        </Link>
      </div>
      <div className=" ml-4 flex flex-col gap-8 pt-5 text-center">
        {/* <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="hover:text-primary-orange text-primary-black flex w-full items-center justify-center gap-x-1.5 rounded-md bg-white   px-3 py-2 text-xl     ">
              Inventory
              <IoIosArrowDown
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      onClick={() => setOpen(!open)}
                      href="OurInventory"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Our Inventory
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      onClick={() => setOpen(!open)}
                      href="/ManagerSpecial"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Manager&apos;s Specials
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      onClick={() => setOpen(!open)}
                      href="DealOfTheMonth"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Deal of the month
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu> */}
        <Link
          onClick={() => setOpen(!open)}
          className="font-Inter text-primary-black  hover:text-primary-orange text-xl "
          href="/Financing"
        >
          Financing
        </Link>
        <Link
          onClick={() => setOpen(!open)}
          className="font-Inter text-primary-black  hover:text-primary-orange text-xl "
          href="/sellCar"
        >
          Sell Car
        </Link>
        <Link
          onClick={() => setOpen(!open)}
          className="font-Inter text-primary-black  hover:text-primary-orange text-xl "
          href="/contacts"
        >
          Contacts
        </Link>
        <Link
          onClick={() => setOpen(!open)}
          className="font-Inter text-primary-black  hover:text-primary-orange text-xl "
          href="/Faqs"
        >
          FAQs
        </Link>
      </div>
    </div>
  );
}
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="pcontainer flex  items-center justify-between bg-white px-4 md:h-full    md:bg-transparent lg:justify-center lg:px-10">
      <MobileNav open={open} setOpen={setOpen} />

      <div className="flex w-full items-center   md:w-1/5 lg:ml-20">
        <Link href="/">
          <Image
            className="h-full w-full cursor-pointer"
            src="/Logo.png"
            width={70}
            height={70}
            alt="..."
          />
        </Link>
      </div>
      <div
        className="relative z-50 flex h-5 w-6 flex-col items-center justify-between md:hidden"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {/* hamburger button */}
        <span
          className={`h-0.5 w-full transform rounded-lg bg-black transition duration-300 ease-in-out ${
            open ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`h-0.5 w-full rounded-lg bg-black transition-all duration-300 ease-in-out ${
            open ? "hidden w-0" : "w-full"
          }`}
        />
        <span
          className={`h-0.5 w-full transform rounded-lg bg-black transition duration-300 ease-in-out ${
            open ? "-translate-y-2.5 -rotate-45" : ""
          }`}
        />
      </div>

      <div className="hidden w-full justify-center md:flex ">
        <header className="hidden w-full  bg-white md:block ">
          <nav className="flex  w-full  items-center self-center">
            <div className="nav-links  flex w-full items-center justify-end  bg-white md:mr-0 lg:mr-20 ">
              <ul className="flex flex-col justify-end gap-4 md:flex-row md:items-center md:gap-[2vw] lg:gap-[4vw] ">
                <li>
                  <Link
                    className="font-Inter text-primary-black  hover:text-primary-orange text-md lg:text-xl  "
                    href="/Financing"
                  >
                    Financing
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-Inter text-primary-black  hover:text-primary-orange text-md lg:text-xl  "
                    href="/Financing"
                  >
                    Financing
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-Inter text-primary-black  hover:text-primary-orange text-md lg:text-xl  "
                    href="/Financing"
                  >
                    Financing
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-Inter text-primary-black hover:text-primary-orange  text-md flex lg:text-xl  "
                    href="/sellCar"
                  >
                    Sell Car
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-Inter text-primary-black  hover:text-primary-orange text-md lg:text-xl "
                    href="/contacts"
                  >
                    Contacts
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-Inter text-primary-black  hover:text-primary-orange text-md lg:text-xl  "
                    href="/Faqs"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </nav>
  );
}

export default Navbar;
