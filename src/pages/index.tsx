import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContactUsSection from "@/sections/ContactUsSection";
import EnquiryForm from "@/sections/EnquiryForm";
import FacilitySection from "@/sections/FacilitySection";
import HeroSection from "@/sections/HeroSection";
import NearByPlaces from "@/sections/NearByPlaces";
import RoomSection from "@/sections/RoomSection";
import TopSection from "@/sections/TopSection";
import React from "react";

export default function Home(): JSX.Element {
  return (
    <>
      <Navbar />
      <TopSection />
      <EnquiryForm />
      <HeroSection />
      <RoomSection />
      <FacilitySection />
      <NearByPlaces />
      <ContactUsSection />
      <Footer />
    </>
  );
}
