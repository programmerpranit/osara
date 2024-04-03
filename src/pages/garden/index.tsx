import Image from "next/image";
import React from "react";

const GardenPage = (): JSX.Element => {
  return (
    <>
      <div className="mx-auto max-w-7xl p-5 py-40">
        <h1 className="text-center">Open Garden Lawn</h1>
        <p className="mx-auto max-w-5xl p-5 text-center">
          Embrace Nature&apos;s Charm: Royal Garden Open Lawn
        </p>
        <Image
          width={1200}
          height={1200}
          alt=""
          src={"/images/ambi/ambi24.jpg"}
        />

        <div className="my-20 flex flex-col-reverse items-center md:flex-row">
          <div className="p-5 md:w-1/2">
            <Image
              width={800}
              height={800}
              src={"/images/ambi/ambi27.jpg"}
              alt=""
            />
          </div>
          <div className="p-5 md:w-1/2">
            <h2>Tranquil Waterside Haven: Splash Garden Retreat:</h2>
            <br />
            <p>
              Unwind and rejuvenate at Aamraa Resort&apos;s Splash Garden
              Retreat, where a serene pool takes center stage amidst lush
              greenery. Picture yourself lounging beside the shimmering waters,
              lulled by the soothing sounds of cascading waterfalls.
            </p>
          </div>
        </div>
        <div className="my-20 flex flex-col items-center md:flex-row">
          <div className="p-5 md:w-1/2">
            <p>
              At Aamraa Resort&apos;s Royal Garden Open Lawn, immerse yourself
              in the tranquility of nature&apos;s embrace. Perfect for events,
              play, and camping under the stars, our expansive green oasis
              offers a serene escape from the ordinary.
            </p>
            <br />
            <p>
              Step into a world where every celebration is elevated by the
              beauty of the open sky and the gentle rustle of leaves. Whether
              you&apos;re planning a vibrant gathering, a delightful playground
              for children, or a serene camping getaway, our open lawn provides
              the ideal setting for cherished memories to blossom.
            </p>
          </div>
          <div className="p-5 md:w-1/2">
            <Image
              width={800}
              height={800}
              src={"/images/ambi/ambi45.jpg"}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GardenPage;
