import Image from "next/image";
import React from "react";

const RestaurentPage = (): JSX.Element => {
  return (
    <>
      <div className="mx-auto min-h-screen max-w-7xl py-40">
        <h1 className="py-3  text-center">Restaurent</h1>
        <div className="mx-auto flex max-w-sm justify-between pb-5">
          <p className="font-semibold text-green-600">Pure Veg</p>
          <p>&</p>
          <p className="font-semibold text-red-600">NonVeg</p>
        </div>
        <p className="text-center">
          Dining Delights - Embark on a Culinary Odyssey
        </p>

        <div className="my-20 flex flex-col items-center md:flex-row">
          <div className="p-5 md:w-1/2">
            <Image
              src={"/images/food/food14.jpg"}
              alt=""
              width={600}
              height={500}
            />
          </div>
          <div className="p-5 md:w-1/2">
            <h2>The Art of Cuisine</h2>
            <br />
            <p>
              Step into our restaurant, where we celebrate the art of cuisine.
              Our kitchen is led by a team of exceptionally talented chefs, each
              a maestro in their own right. With unwavering dedication, they
              craft an array of exquisite dishes that cater to every palate.
              From traditional Indian delicacies to international delights, our
              menu is a symphony of flavors that promises to tantalize your
              taste buds.
            </p>
          </div>
        </div>
        <div className="my-20 flex flex-col items-center md:flex-row-reverse">
          <div className="p-5 md:w-1/2">
            <Image
              src={"/images/food/food228.jpg"}
              alt=""
              width={600}
              height={500}
            />
          </div>
          <div className="p-5 md:w-1/2">
            <h2>A Tale of Two Taste</h2>
            <br />
            <p>
              Our culinary journey takes you on a voyage through both vegetarian
              and non-vegetarian culinary realms. Whether you&apos;e an ardent
              vegetarian or a dedicated non-vegetarian, we&apos;ve curated a
              menu that caters to your preferences. The sumptuous vegetarian
              thali boasts the richness of spices and ingredients that define
              Indian cuisine. Meanwhile, the sizzling non-veg platter is a
              testament to the vibrancy and diversity of flavors, satisfying
              even the most discerning of palates.
            </p>
          </div>
        </div>
        <div className="my-20 flex flex-col items-center md:flex-row">
          <div className="p-5 md:w-1/2">
            <Image
              src={"/images/ambi/ambi54.jpg"}
              alt=""
              width={600}
              height={500}
            />
          </div>
          <div className="p-5 md:w-1/2">
            <h2>Scenic Dining</h2>
            <br />
            <p>
              The setting for your dining experience is as exquisite as the
              dishes themselves. Enjoy your meals against the backdrop of serene
              lake views, where the gentle play of sunlight on the water creates
              an ambiance that&apos;s second to none. Whether it&apos;s
              breakfast, lunch, or dinner, each dining experience is an
              immersive journey that transports you to a world of taste and
              tranquility.
            </p>
          </div>
        </div>
        <div className="my-20 flex flex-col items-center md:flex-row-reverse">
          <div className="p-5 md:w-1/2">
            <Image
              src={"/images/ambi/ambi57.jpg"}
              alt=""
              width={600}
              height={500}
            />
          </div>
          <div className="p-5 md:w-1/2">
            <h2>Impeccable Service</h2>
            <br />
            <p>
              Our commitment to your dining satisfaction goes beyond the
              cuisine. Our attentive staff is dedicated to providing impeccable
              service, ensuring that your every need is met. From recommending
              the perfect wine to pairing it with your choice of dish,
              we&apos;re here to make your dining experience extraordinary.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurentPage;
