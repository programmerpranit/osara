import Image from "next/image";
import React from "react";

const AboutPage = (): JSX.Element => {
  return (
    <>
      <div className="mx-auto max-w-7xl py-20">
        <h1 className=" text-center">About Us</h1>
        <p className="mx-auto max-w-5xl p-5 text-center">
          At Aamraa Resort, we&apos;re not just about providing a place to stay;
          we&apos;re about crafting unforgettable experiences in the heart of
          Junnar, near Bankarphata. Our story is one of passion, commitment, and
          a deep love for hospitality.
        </p>
        <div className="flex flex-col flex-wrap py-10 md:flex-row">
          <Image
            src={"/images/ambi/ambi57.jpg"}
            alt=""
            className="w-1/3 p-5"
            width={500}
            height={500}
          />
          <Image
            src={"/images/ambi/ambi65.jpg"}
            alt=""
            className="w-1/3 p-5"
            width={500}
            height={500}
          />
          <Image
            src={"/images/ambi/ambi4.jpg"}
            alt=""
            className="w-1/3 p-5"
            width={500}
            height={500}
          />
        </div>

        <div className="flex flex-wrap ">
          <AboutItem
            title="Our Philosophy"
            desc="We believe in the transformative power of travel. Every stay with us is an opportunity for our guests to escape the ordinary and embrace the extraordinary. We're dedicated to turning your dreams into cherished memories, offering a unique blend of luxury, nature, and history."
            img="/images/ambi/ambi15.jpg"
          />
          <AboutItem
            title="Our Heritage"
            desc="Nestled in the heart of Junnar, Aamraa Resort is steeped in the rich history and culture of this enchanting region. Our resort is more than just a place to lay your head; it's a portal to Junnar's past, present, and future. The Wada Vintage Rooms, for instance, pay homage to the age-old traditions that make this region so special."
            img="/images/wada/wada0.jpg"
          />
          <AboutItem
            title="Our Innovation"
            desc="We're always pushing the boundaries of what a resort can be. Our Cosmo Capsules are a testament to our commitment to innovation and providing unique experiences. We're proud to be the first in Junnar to offer this novel accommodation concept, allowing you to gaze at the stars from your own private capsule. "
            img="/images/capsule/capsule1.jpg"
          />
          <AboutItem
            title="Our Commitment"
            desc="Hospitality is in our DNA. Our team at Aamraa Resort is driven by a commitment to excellence, ensuring that every guest feels at home, with a touch of luxury and a dash of adventure. We take pride in going the extra mile to exceed your expectations, from the moment you step foot on our property until the time you bid farewell."
            img="/images/vip/vip5.jpg"
          />
          <AboutItem
            title="Our Vision"
            desc="Our vision is simple but profound: to be the first choice for travelers seeking an authentic, enriching, and luxurious experience in Junnar. We're dedicated to providing an oasis of comfort and a gateway to Junnar's treasures, ensuring that your stay is as memorable as the destination itself. "
            img="/images/ambi/ambi25.jpg"
          />
          <AboutItem
            title="Join Us on the Journey"
            desc="We invite you to be a part of our story, to escape the ordinary and embrace the extraordinary at Aamraa Resort. Whether you're seeking a serene retreat, a memorable event, or an opportunity to explore the hidden gems of Junnar, we're here to make it happen. "
            img="/images/ambi/ambi36.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default AboutPage;

function AboutItem({
  title,
  desc,
  img,
}: {
  title: string;
  desc: string;
  img: string;
}): JSX.Element {
  return (
    <div className="flex flex-col-reverse items-center p-5 md:flex-row">
      <div className="group relative h-fit items-start justify-start border p-5 md:w-1/2">
        <div className="absolute left-0 top-0 -z-50 h-full w-0 bg-secondary transition-all duration-500 group-hover:w-full "></div>
        <div>
          <h4 className="font-secondary mb-2 ">{title}</h4>
          <p>{desc}</p>
        </div>
      </div>
      <Image
        src={img}
        alt=""
        className="md:w-1/2 md:p-5"
        width={800}
        height={800}
      />
    </div>
  );
}
