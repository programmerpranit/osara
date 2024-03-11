import Slider from "@/components/Slider";
import EnquiryForm from "@/sections/EnquiryForm";
import FacilitySection from "@/sections/FacilitySection";
import HeroSection from "@/sections/HeroSection";
import NearByPlaces from "@/sections/NearByPlaces";
import Restaurent from "@/sections/Restaurent";
import RoomSection from "@/sections/RoomSection";
import React from "react";
import HallSection from "@/sections/HallSection";
import OpenGardenSection from "@/sections/OpenGardenSection";

export default function Home(): JSX.Element {
  return (
    <>
      {/* <TopSection /> */}
      <Slider />
      <EnquiryForm />
      <HeroSection />
      <RoomSection />
      <Restaurent />
      <HallSection />
      <OpenGardenSection />
      <FacilitySection />
      <NearByPlaces />
      {/* <ContactUsSection /> */}
    </>
  );
}
