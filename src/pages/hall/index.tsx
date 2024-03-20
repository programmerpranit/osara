import Image from "next/image";
import React from "react";

const HallPage = (): JSX.Element => {
  return (
    <>
      <div className="mx-auto max-w-7xl p-10">
        <h1 className="text-center">AC Hall</h1>
        <p className="mx-auto max-w-5xl p-5 text-center">
          Step into a realm of opulence and grandeur at Aamraa Resort&apos;s
          Royal Palace Banquet Hall, where every moment is adorned with the
          shimmering elegance of a regal affair. Designed to emulate the lavish
          ambiance of the White House, this exquisite venue promises an
          unparalleled experience for your most cherished occasions
        </p>
        <Image width={1200} height={1200} alt="" src={"/images/ac/ac0.jpg"} />

        <div className="my-20 flex flex-col items-center md:flex-row">
          <div className="p-5 md:w-1/2">
            <p>
              Nestled within its walls is a sprawling space that can accommodate
              between 1200 to 1500 guests, ensuring that no dream is too grand
              for your celebrations. Whether it&apos;s a fairy-tale wedding
              ceremony, a glamorous engagement soirée, or a prestigious
              corporate event, the Royal Palace Banquet Hall at Aamraa Resort
              sets the stage for unforgettable memories to unfold.
            </p>
          </div>
          <div className="p-5 md:w-1/2">
            <Image width={800} height={800} src={"/images/ac/ac2.jpg"} alt="" />
          </div>
        </div>

        <div className="my-20 flex flex-col-reverse items-center md:flex-row">
          <div className="p-5 md:w-1/2">
            <Image width={800} height={800} src={"/images/ac/ac7.jpg"} alt="" />
          </div>
          <div className="p-5 md:w-1/2">
            <p>
              From the majestic chandeliers casting a soft glow upon the
              intricate detailing of the architecture to the impeccable service
              that caters to your every need, every aspect of your event is
              meticulously curated to perfection. With every step, you&apos;ll
              find yourself immersed in a world where luxury knows no bounds and
              where your vision of an extraordinary celebration becomes a
              reality.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HallPage;
