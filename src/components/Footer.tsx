/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineMail, AiOutlineArrowRight } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center  bg-[#333333] py-10 text-white">
      <div className="flex flex-col items-start justify-around space-y-10 p-10 md:flex-row md:space-y-0">
        <div className="md:w-1/4">
          <div className="mb-4 ">
            <Image
              className=" cursor-pointer"
              src="/Logo.png"
              width={100}
              height={100}
              alt="..."
            />
            <br />
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
              <div className="text-body-color mb-1 flex items-center text-base  leading-loose hover:text-primary">
                <IoMdCall size={25} className="mr-3" />: +91-XXX-XXXXXXX (For
                reservations and inquiries)
              </div>
            </li>
            <li>
              <div className="text-body-color mb-1 flex items-center text-base leading-loose hover:text-primary">
                <MdLocationPin size={25} className="mr-3" />
                Aamraa Resort, Near Bankarphata, Junnar, Maharashtra, India.
              </div>
            </li>
            <li>
              <div className="text-body-color mb-1 flex items-center text-base leading-loose hover:text-primary">
                <AiOutlineMail size={25} className="mr-3" />
                info@aamraaresort.com
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
