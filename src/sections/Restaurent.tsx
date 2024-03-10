import Image from "next/image";
import Link from "next/link";
import React from "react";

const Restaurent = (): JSX.Element => {
  return (
    <>
      <div className="mx-auto flex max-w-7xl flex-col py-40 md:flex-row">
        <div className="p-5 md:w-1/2">
          <Image
            src={"/images/food/food313.jpg"}
            width={600}
            height={600}
            alt=""
          />
        </div>
        <div className="p-5 md:w-1/2">
          <h5>Restaurent</h5>
          <h2 className="py-5">
            Dining Delights - Embark on a Culinary Odyssey
          </h2>
          <p>
            At Aamraa Resort, we invite you to embark on a gastronomic journey
            that celebrates the diverse and delectable flavors of India. Our
            in-house restaurant is a haven for food enthusiasts, where every
            dish is a masterpiece, and every meal is an unforgettable chapter in
            your stay.
          </p>
          <Link href={"/restaurent"}>
            <button className="mt-5">Know More</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Restaurent;
