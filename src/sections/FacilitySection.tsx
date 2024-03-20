import React from "react";

import {
  FaChessKing,
  FaRestroom,
  FaWifi,
  FaBabyCarriage,
} from "react-icons/fa";
import { FaPersonSwimming, FaChildren, FaSailboat } from "react-icons/fa6";
import { LuParkingCircle } from "react-icons/lu";
import { MdDeck, MdSportsCricket } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { PiMicrophoneStageBold } from "react-icons/pi";
import { GiTreeSwing } from "react-icons/gi";
import { TbKayak } from "react-icons/tb";
import { SiStartrek } from "react-icons/si";
import { IoLibrarySharp } from "react-icons/io5";

function FacilitySection(): JSX.Element {
  return (
    <>
      {" "}
      <div className="mx-auto mb-10 flex max-w-7xl flex-col items-center justify-center p-6 py-20">
        <h5>HOTEL FACILITIES</h5>
        <h2 className=" mx-4 mb-8 mt-4 text-center ">
          Finest And Luxurious Hotel In The Town
        </h2>
        <p className="text-center">
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart.
        </p>
        <div className="m-auto my-12 flex flex-wrap justify-around">
          <Facility
            icon={<LuParkingCircle color={"#be8746"} size={60} />}
            title="Parking"
          />
          <Facility
            icon={<FaRestroom color={"#be8746"} size={60} />}
            title="Washroom"
          />
          <Facility
            icon={<FaPersonSwimming color={"#be8746"} size={60} />}
            title="Swimming Pool"
          />
          <Facility icon={<CgGym color={"#be8746"} size={60} />} title="Gym" />
          <Facility
            icon={<FaChessKing color={"#be8746"} size={60} />}
            title="Indoor Games"
          />
          <Facility
            icon={<MdSportsCricket color={"#be8746"} size={60} />}
            title="Outdoor Games"
          />
          <Facility
            icon={<FaWifi color={"#be8746"} size={60} />}
            title="Wifi"
          />
          <Facility
            icon={<MdDeck color={"#be8746"} size={60} />}
            title="River Side Deck"
          />
          <Facility
            icon={<IoLibrarySharp color={"#be8746"} size={60} />}
            title="Library"
          />
          <Facility
            icon={<PiMicrophoneStageBold color={"#be8746"} size={60} />}
            title="Amphitheatre"
          />
          <Facility
            icon={<GiTreeSwing color={"#be8746"} size={60} />}
            title="Swings"
          />
          <Facility
            icon={<FaChildren color={"#be8746"} size={60} />}
            title="Children Play Area"
          />
          <Facility
            icon={<FaBabyCarriage color={"#be8746"} size={60} />}
            title="Cradle for Babies"
          />
          <Facility
            icon={<FaSailboat color={"#be8746"} size={60} />}
            title="Boating"
          />
          <Facility
            icon={<TbKayak color={"#be8746"} size={60} />}
            title="Kayaking"
          />
          <Facility
            icon={<SiStartrek color={"#be8746"} size={60} />}
            title="Zip Lining"
          />
        </div>
      </div>
    </>
  );
}

export default FacilitySection;

interface IFacility {
  icon: any;
  title: string;
}

const Facility = ({ icon, title }: IFacility): JSX.Element => {
  return (
    <div className="w-1/2 p-2 md:w-1/6">
      <div className="flex flex-col items-center justify-center rounded-sm border-2 border-secondary bg-secondary p-2 pb-5 pt-10 text-center transition-all hover:border-2 hover:border-primary hover:bg-white">
        {icon}

        <h4 className="mt-4 pt-5 font-medium">{title}</h4>
      </div>
    </div>
  );
};
