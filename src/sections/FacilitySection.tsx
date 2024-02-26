import React, { type ReactNode } from "react";
import { RiHomeWifiLine } from "react-icons/ri";
import { FaCoffee, FaBath } from "react-icons/fa";
import { IoMdAlarm } from "react-icons/io";

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
            icon={<IoMdAlarm color={"#be8746"} size={60} />}
            title="Parking"
          />
          <Facility
            icon={<IoMdAlarm color={"#be8746"} size={60} />}
            title="Washroom"
          />
          <Facility
            icon={<IoMdAlarm color={"#be8746"} size={60} />}
            title="Swimming Pool"
          />
          <Facility
            icon={<IoMdAlarm color={"#be8746"} size={60} />}
            title="Gym"
          />
          <Facility
            icon={<IoMdAlarm color={"#be8746"} size={60} />}
            title="Indoor Games"
          />
          <Facility
            icon={<IoMdAlarm color={"#be8746"} size={60} />}
            title="Outdoor Games"
          />
          <Facility
            icon={<IoMdAlarm color={"#be8746"} size={60} />}
            title="Wifi"
          />
          <Facility
            icon={<IoMdAlarm color={"#be8746"} size={60} />}
            title="River Side Deck"
          />
          <Facility
            icon={<IoMdAlarm color={"#be8746"} size={60} />}
            title="Library"
          />
          <Facility
            icon={<IoMdAlarm color={"#be8746"} size={60} />}
            title="Amphitheatre"
          />
          <Facility
            icon={<IoMdAlarm color={"#be8746"} size={60} />}
            title="Swings"
          />
          <Facility
            icon={<IoMdAlarm color={"#be8746"} size={60} />}
            title="Children Play Area"
          />
          <Facility
            icon={<IoMdAlarm color={"#be8746"} size={60} />}
            title="Cradle for Babies"
          />
          <Facility
            icon={<IoMdAlarm color={"#be8746"} size={60} />}
            title="Boating"
          />
          <Facility
            icon={<IoMdAlarm color={"#be8746"} size={60} />}
            title="Kayaking"
          />
          <Facility
            icon={<IoMdAlarm color={"#be8746"} size={60} />}
            title="Zip Lining"
          />
        </div>
      </div>
    </>
  );
}

export default FacilitySection;

interface IFacility {
  icon: ReactNode;
  title: string;
}

export const Facility = ({ icon, title }: IFacility): JSX.Element => {
  return (
    <div className="w-1/2 p-2 md:w-1/6">
      <div className="flex flex-col items-center justify-center rounded-sm border-2 border-secondary bg-secondary p-2 pb-5 pt-10 text-center transition-all hover:border-2 hover:border-primary hover:bg-white">
        {icon}

        <h4 className="mt-4 pt-5 font-medium">{title}</h4>
      </div>
    </div>
  );
};
