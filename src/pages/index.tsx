import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Homescreen from "@/sections/Homescreen";
import React from "react";

export default function Home(): JSX.Element {
  return (
    <>
      <Navbar />
      <Homescreen />
      <Footer />
    </>
  );
}
