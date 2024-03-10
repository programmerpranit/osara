import Image from "next/image";
import Link from "next/link";
import React from "react";

const OpenGardenSection = (): JSX.Element => {
  return (
    <>
      <div className="mx-auto flex max-w-7xl flex-col items-center py-20 md:flex-row">
        <div className="p-5 md:w-1/2">
          <Image
            src={"/images/ambi/ambi24.jpg"}
            width={600}
            height={600}
            alt=""
          />
        </div>
        <div className="p-5 md:w-1/2">
          <h5>Open Garden Lawn</h5>
          <h2 className="py-5">
            Embrace Nature&apos;s Charm: Royal Garden Open Lawn
          </h2>
          <p>
            At Aamraa Resort&apos;s Royal Garden Open Lawn, immerse yourself in
            the tranquility of nature&apos;s embrace. Perfect for events, play,
            and camping under the stars, our expansive green oasis offers a
            serene escape from the ordinary.
          </p>
          <Link href={"/garden"}>
            <button className="mt-5">Know More</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default OpenGardenSection;
