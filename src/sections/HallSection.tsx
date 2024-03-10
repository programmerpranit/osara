import Image from "next/image";
import Link from "next/link";
import React from "react";

const HallSection = (): JSX.Element => {
  return (
    <>
      <div className="mx-auto mb-20 flex max-w-7xl flex-col-reverse items-center bg-secondary p-10 md:flex-row">
        <div className="p-5 md:w-1/2">
          <h5>Where Timeless Memories Unfold</h5>
          <br />
          <h2>Banquet Hall</h2>
          <br />
          {/* <p>
            Elevate Your Occasion at Aamraa Resort&apos;s Royal Palace Banquet
            Hall
          </p>
          <br /> */}
          <p>
            Experience Luxury Unmatched: Royal Palace Banquet Hall Step into a
            realm of opulence and grandeur at Aamraa Resort&apos;s Royal Palace
            Banquet Hall, where every moment is adorned with the shimmering
            elegance of a regal affair. Designed to emulate the lavish ambiance
            of the White House, this exquisite venue promises an unparalleled
            experience for your most cherished occasions.
          </p>
          <br />
          <Link href={"/hall"}>
            <button>See More</button>
          </Link>
        </div>
        <div className="p-5 md:w-1/2">
          <Image src={"/images/ac/ac9.jpg"} alt="" width={600} height={500} />
        </div>
      </div>
    </>
  );
};

export default HallSection;
