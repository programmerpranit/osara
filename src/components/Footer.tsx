/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineMail, AiOutlineArrowRight } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center  bg-[#333333] pb-2 pt-2 text-white">
      <div className="flex flex-col items-start justify-around space-y-10 p-10 md:flex-row md:space-y-0">
        <div className="md:w-1/4">
          <div className="mb-4 ">
            <a href="javascript:void(0)" className="mb-6 inline-block ">
              <Image
                className="h-full w-full cursor-pointer"
                src="/Logo.png"
                width={70}
                height={70}
                alt="..."
              />
            </a>
            <p className="mb-4 text-lg font-light  text-white">
              We are here to assist you and answer your inquiries promptly. You
              can get in touch with Aamraa Resort using the following contact
              details:
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://facebook.com/@AamraaResort"
              target="_blank"
              rel="noopener noreferrer"
              className=" transition-all duration-150  hover:scale-125"
            >
              <BsFacebook
                size={35}
                color={"white"}
                className="bg-primary p-2"
              />
            </a>
            <a
              href="https://facebook.com/@AamraaResort"
              target="_blank"
              rel="noopener noreferrer"
              className=" transition-all duration-150  hover:scale-125"
            >
              <BsYoutube
                color={"white"}
                size={35}
                className=" bg-primary p-2"
              />
            </a>
            <a
              href="https://facebook.com/@AamraaResort"
              target="_blank"
              rel="noopener noreferrer"
              className=" transition-all duration-150  hover:scale-125"
            >
              <BsInstagram
                color={"white"}
                size={35}
                className=" bg-primary p-2"
              />
            </a>
          </div>
        </div>

        <div className="mb-2 md:w-1/4">
          <h3 className=" mb-2 text-white ">General</h3>
          <ul>
            <li className="flex items-center gap-3 text-base font-semibold">
              <AiOutlineArrowRight color={"white"} />
              <Link
                href="javascript:void(0)"
                className="text-body-color inline-block   leading-loose hover:text-primary"
              >
                <h6 className="text-white">Accommodation</h6>
              </Link>
            </li>
            <li className="flex items-center gap-3 text-base font-semibold">
              <AiOutlineArrowRight color={"white"} />
              <Link
                href="javascript:void(0)"
                className="text-body-color inline-block  leading-loose hover:text-primary"
              >
                <h6 className="text-white"> Dine and Drink</h6>
              </Link>
            </li>
            <li className="flex items-center gap-3 text-base font-semibold">
              <AiOutlineArrowRight color={"white"} />
              <Link
                href="javascript:void(0)"
                className="text-body-color inline-block  leading-loose hover:text-primary"
              >
                <h6 className="text-white"> Spa and Leisure</h6>
              </Link>
            </li>
            <li className="flex items-center gap-3 text-base font-semibold">
              <AiOutlineArrowRight color={"white"} />
              <Link
                href="javascript:void(0)"
                className="text-body-color inline-block  leading-loose hover:text-primary"
              >
                <h6 className="text-white"> Services</h6>
              </Link>
            </li>
          </ul>
        </div>

        <div className="mb-4 md:w-1/4">
          <h2 className=" mb-2 text-white  ">Contact</h2>
          <h5 className="mb-4  ">Feel free to contact</h5>
          <ul>
            <li>
              <a
                href="javascript:void(0)"
                className="text-body-color mb-1 flex items-center text-base  leading-loose hover:text-primary"
              >
                <IoMdCall size={25} className="mr-3" />: +91-XXX-XXXXXXX (For
                reservations and inquiries)
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-body-color mb-1 flex items-center text-base leading-loose hover:text-primary"
              >
                <MdLocationPin size={25} className="mr-3" />
                Aamraa Resort, Near Bankarphata, Junnar, Maharashtra, India.
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-body-color mb-1 flex items-center text-base leading-loose hover:text-primary"
              >
                <AiOutlineMail size={25} className="mr-3" />
                info@aamraaresort.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-8 h-px w-11/12 self-center border-0 bg-black" />
      <h6 className="text-white">Copyright © 2023. All rights reserved.</h6>
    </footer>
  );
}

export default Footer;
