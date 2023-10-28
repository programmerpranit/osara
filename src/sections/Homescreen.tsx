/* eslint-disable react/display-name */
import Image from "next/image";
import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RiGlobalLine } from "react-icons/ri";
function Homescreen(): any {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <div className=" flex min-h-screen flex-col items-center justify-center  ">
        <div className="flex h-screen flex-col items-center justify-center bg-[#F8F5F0]">
          <h1 className="text-5xl text-primary">Aamraa Resort</h1>
          <h1 className=" mx-4 mb-8 mt-4 text-center">
            Where Dreams Meet Destination
          </h1>
          <hr className="mb-8 w-[80%]  border border-primary" />
          <p className="mx-4 mb-8 text-center">
            At Aamraa Resort, we&apos;re not just about providing a place to
            stay; we&apos;re about crafting unforgettable experiences in the
            heart of Junnar, near Bankarphata. Our story is one of passion,
            commitment, and a deep love for hospitality.
          </p>
          <button className="w-1/2 py-4">Rooms and Suits</button>
        </div>
        <div className="flex-flex-col  w-full items-center justify-start px-5 py-10">
          <h1 className="text-center">About Us</h1>
          <hr className="mb-8 w-[100%]  border border-primary" />

          <h3 className="mt-4">Our Philosophy</h3>
          <p className="mt-6">
            We believe in the transformative power of travel. Every stay with us
            is an opportunity for our guests to escape the ordinary and embrace
            the extraordinary. We&apos;re dedicated to turning your dreams into
            cherished memories, offering a unique blend of luxury, nature, and
            history.
          </p>
          <h3 className="mt-4">Our Heritage:</h3>
          <p className="mt-6">
            Nestled in the heart of Junnar, Aamraa Resort is steeped in the rich
            history and culture of this enchanting region. Our resort is more
            than just a place to lay your head; it&apos;s a portal to
            Junnar&apos;s past, present, and future. The Wada Vintage Rooms, for
            instance, pay homage to the age-old traditions that make this region
            so special.
          </p>
          <h3 className="mt-4">Our Innovation:</h3>
          <p className="mt-6">
            We&apos;re always pushing the boundaries of what a resort can be.
            Our Cosmo Capsules are a testament to our commitment to innovation
            and providing unique experiences. We&apos;re proud to be the first
            in Junnar to offer this novel accommodation concept, allowing you to
            gaze at the stars from your own private capsule.
          </p>
          <h3 className="mt-4">Our Commitment:</h3>
          <p className="mt-6">
            Hospitality is in our DNA. Our team at Aamraa Resort is driven by a
            commitment to excellence, ensuring that every guest feels at home,
            with a touch of luxury and a dash of adventure. We take pride in
            going the extra mile to exceed your expectations, from the moment
            you step foot on our property until the time you bid farewell.
          </p>
          <h3 className="mt-4">Our Vision:</h3>
          <p className="mt-6">
            Our vision is simple but profound: to be the first choice for
            travelers seeking an authentic, enriching, and luxurious experience
            in Junnar. We&apos;re dedicated to providing an oasis of comfort and
            a gateway to Junnar&apos;s treasures, ensuring that your stay is as
            memorable as the destination itself.
          </p>
        </div>
        <div className="flex h-screen flex-col items-center justify-center bg-[#F8F5F0]">
          <h1 className="mb-8 text-center">Join Us on the Journey:</h1>
          <hr className="mb-8 w-[80%]  border border-primary" />
          <p className="mx-4 mb-8 text-center">
            We invite you to be a part of our story, to escape the ordinary and
            embrace the extraordinary at Aamraa Resort. Whether you&apos;re
            seeking a serene retreat, a memorable event, or an opportunity to
            explore the hidden gems of Junnar, we&apos;re here to make it
            happen.
          </p>
          <hr className="mb-8 w-[80%]  border border-primary" />
          <h3 className="mx-4 mt-4 text-center ">
            Aamraa Resort - Your Gateway to Junnar&apos;s Wonders, Your Home
            Away from Home.
          </h3>
          <p className="mx-4 mt-6 text-center ">
            Welcome to Aamraa Resort, where dreams meet destination, and where
            your journey is our passion. We look forward to being a part of your
            adventures and helping you create memories that last a lifetime.
            Come, experience Aamraa Resort, where every visit is an opportunity
            to be part of our ongoing story, and we can&apos;t wait to share it
            with you
          </p>
        </div>
        <div className="flex-flex-col  w-full items-center justify-start px-5 py-10 ">
          <h4 className="mb-2 font-bold">Check In</h4>
          <DatePicker
            className="mb-6 flex w-full items-center  justify-center border p-3  px-6  focus:border-primary"
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
            }}
          />
          <h4 className="mb-2 font-bold">Check Out</h4>
          <DatePicker
            className="mb-6 flex w-full items-center  justify-center border p-3  px-6  focus:border-primary"
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
            }}
          />

          <h4 className="mb-2 font-bold">Adult</h4>
          <select
            id="countries"
            className="mb-6 block w-full border bg-white px-3 py-3"
          >
            <option selected>1</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
          <h4 className="mb-2 font-bold">Children</h4>
          <select
            id="countries"
            className="mb-6 block w-full border bg-white px-3 py-3"
          >
            <option selected>1</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
          <h4 className="mb-2 font-bold">Room</h4>
          <select
            id="countries"
            className="mb-6 block w-full border bg-white px-3 py-3"
          >
            <option selected>1</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
          <button className="w-1/2 py-4">Check Now</button>
        </div>
        <div className="flex flex-col px-5 py-10">
          <Image
            src="/RoomsIMage.png"
            height={400}
            width={400}
            className="mb-4"
            alt={""}
          />
          <h1 className="mb-8 mt-8 text-start text-5xl text-primary">
            Staycation
          </h1>

          {/* <div className="mb-4 flex items-start justify-between  border p-4 ">
            <RiGlobalLine className="mr-8" size={100} />
            <div>
              <h4 className="mb-2  font-extrabold">5 Star Hotel In World</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae voluptatum
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between  border p-4 ">
            <RiGlobalLine className="mr-8" size={100} />
            <div>
              <h4 className="mb-2  font-extrabold">
                Cosmo Capsules: The Futuristic Retreat
              </h4>
              <p>
                Venture into the future of lodging with our Cosmo Capsules, a
                novel and cozy haven designed for solo adventurers. As the
                first-of-its-kind in Junnar, these cocoon-like capsules offer
                unparalleled privacy and the chance to stargaze through your
                personal window to the skies, allowing you to connect with the
                celestial beauty above.
              </p>
            </div>
          </div> */}
        </div>
        <div className="flex flex-col items-center justify-center ">
          <div className=" mx-6  mb-10 bg-[url('/RoomCardbg.jpg')] bg-cover px-5 py-10 ">
            <h1 className="pb-4 text-white">
              Cosmo Capsules: The Futuristic Retreat
            </h1>
            <p className="mb-4 text-white">
              Venture into the future of lodging with our Cosmo Capsules, a
              novel and cozy haven designed for solo adventurers. As the
              first-of-its-kind in Junnar, these cocoon-like capsules offer
              unparalleled privacy and the chance to stargaze through your
              personal window to the skies, allowing you to connect with the
              celestial beauty above.
            </p>
          </div>
          <div className=" mx-6  mb-10 bg-[url('/RoomCardbg.jpg')] bg-cover px-5 py-10 ">
            <h1 className="pb-4 text-white">
              The Azure Lakeview Suites - Nature&apos;s Embrace
            </h1>
            <p className="mb-4 text-white">
              Embrace the picturesque charm of Junnar with our Azure Lakeview
              Suites. Wake up to the stunning sight of the serene lake and
              mountains beyond. Each suite is a luxurious haven, meticulously
              designed to provide you with unobstructed views and unparalleled
              comfort. Enjoy your morning coffee on the private balcony while
              being caressed by the gentle breeze, and rejuvenate your senses.
            </p>
          </div>
          <div className=" mx-6  mb-10 bg-[url('/RoomCardbg.jpg')] bg-cover px-5 py-10 ">
            <h1 className="pb-4 text-white">
              The Wada Vintage Rooms - Echoes of Tradition
            </h1>
            <p className="mb-4 text-white">
              Transport yourself back in time to the Wada Vintage Rooms, where
              the rich heritage of Junnar comes alive. These rooms blend history
              and modernity seamlessly, with antique furnishings and
              contemporary amenities. Experience the rustic elegance of Junnar,
              with a touch of nostalgia in every corner
            </p>
          </div>
        </div>
        <div className="flex-flex-col w-full  items-center justify-start bg-[#F8F5F0] px-5 py-10">
          <h1 className="mb-8 text-center">
            Banquet Hall - Where Timeless Memories Unfold
          </h1>
          <hr className="mb-8 w-full  border border-primary" />
          <p className="mx-4 mb-8 text-center">
            Step into our magnificent banquet hall, where we specialize in
            transforming moments into lifelong memories. Whether you&apos;re
            planning a grand wedding, a corporate gathering, or a special
            celebration, our sprawling banquet hall is the perfect canvas for
            your dreams.
          </p>
          <hr className="mb-8 w-full  border border-primary" />
          <h3 className="mx-4 mt-4 text-start ">Space and Elegance</h3>
          <p className="mx-4 mt-6 text-justify ">
            Welcome to Aamraa Resort, where dreams meet destination, and where
            your journey is our passion. We look forward to being a part of your
            adventures and helping you create memories that last a lifetime.
            Come, experience Aamraa Resort, where every visit is an opportunity
            to be part of our ongoing story, and we can&apos;t wait to share it
            with you
          </p>
          <hr className="mb-8 w-full  border border-primary" />
          <h3 className="mx-4 mt-4 text-end ">Tailored Perfection</h3>
          <p className="mx-4 mt-6 text-justify ">
            Welcome to Aamraa Resort, where dreams meet destination, and where
            your journey is our passion. We look forward to being a part of your
            adventures and helping you create memories that last a lifetime.
            Come, experience Aamraa Resort, where every visit is an opportunity
            to be part of our ongoing story, and we can&apos;t wait to share it
            with you
          </p>
          <hr className="mb-8 w-full  border border-primary" />
          <h3 className="mx-4 mt-4 text-start ">
            Celebrating Moments Extraordinaire
          </h3>
          <p className="mx-4 mt-6 text-justify ">
            Your special moments deserve to be elevated, and that&apos;s
            precisely what we do at Aamraa Resort. Whether it&apos;s the
            exchange of vows, a milestone corporate achievement, or a jubilant
            celebration, our banquet hall is a sanctuary where every occasion
            becomes a cherished memory.
          </p>
          <p className="mx-4 mt-6 text-justify ">
            Elevate your events and make them truly special at Aamraa
            Resort&apos;s banquet hall. It&apos;s where time stands still, and
            where your dreams come alive in the most elegant and enchanting way.
          </p>
        </div>
        <div className="flex-flex-col w-full  items-center justify-start  px-5 py-10">
          <h1 className="mb-8 text-center">Our Additional Amenities</h1>

          <ul className="mx-8 list-disc space-y-4  ">
            <li className="text-xl  ">Sparkling Pool for Refreshing Dips</li>
            <li className="text-xl  ">Fitness Center for Health Enthusiasts</li>
            <li className="text-xl  ">
              Outdoor Activities for Adventure Seekers
            </li>
            <li className="text-xl  ">
              Spa & Wellness Center for Ultimate Relaxation
            </li>
            <li className="text-xl  ">Wi-Fi for Staying Connected</li>
            <li className="text-xl  ">
              24-Hour Room Service for Your Convenience
            </li>
            <li className="text-xl  ">
              Kids&apos; Play Area for Little Explorers
            </li>
          </ul>
          <hr className="mb-8 mt-8 w-full border border-primary" />

          <h1 className="mb-8 text-center">Explore the Surroundings</h1>
          <ul className="mx-8 list-disc space-y-4  ">
            <li className="text-xl  ">Visit the Historic Shivneri Fort</li>
            <li className="text-xl  ">
              Discover the Ancient Karla and Bhaja Caves
            </li>
            <li className="text-xl  ">Explore the Scenic Naneghat Pass</li>
            <li className="text-xl  ">
              Trek Through the Breathtaking Sahyadri Hills
            </li>
            <li className="text-xl  ">
              Experience Rural Life at Junnar&apos;s Villages
            </li>
          </ul>
        </div>
        <div className="flex-flex-col w-full  items-center justify-start bg-[#F8F5F0] px-5 py-10">
          <h1 className="mb-4 text-center">Restaurant</h1>
          <h3 className="mb-8 text-center">
            Dining Delights - Embark on a Culinary Odyssey
          </h3>
          <hr className="mb-8 w-full  border border-primary" />
          <p className="mx-4 mb-8 text-center">
            At Aamraa Resort, we invite you to embark on a gastronomic journey
            that celebrates the diverse and delectable flavors of India. Our
            in-house restaurant is a haven for food enthusiasts, where every
            dish is a masterpiece, and every meal is an unforgettable chapter in
            your stay.
          </p>
          <hr className="mb-8 w-full  border border-primary" />
          <h3 className="mx-4 mt-4 text-start ">The Art of Cuisine</h3>
          <p className="mx-4 mt-6 text-justify ">
            Step into our restaurant, where we celebrate the art of cuisine. Our
            kitchen is led by a team of exceptionally talented chefs, each a
            maestro in their own right. With unwavering dedication, they craft
            an array of exquisite dishes that cater to every palate. From
            traditional Indian delicacies to international delights, our menu is
            a symphony of flavors that promises to tantalize your taste buds.
            with you
          </p>
          <hr className="mb-8 w-full  border border-primary" />
          <h3 className="mx-4 mt-4 text-end ">A Tale of Two Tastes</h3>
          <p className="mx-4 mt-6 text-justify ">
            Our culinary journey takes you on a voyage through both vegetarian
            and non-vegetarian culinary realms. Whether you're an ardent
            vegetarian or a dedicated non-vegetarian, we've curated a menu that
            caters to your preferences. The sumptuous vegetarian thali boasts
            the richness of spices and ingredients that define Indian cuisine.
            Meanwhile, the sizzling non-veg platter is a testament to the
            vibrancy and diversity of flavors, satisfying even the most
            discerning of palates.
          </p>
          <hr className="mb-8 w-full  border border-primary" />
          <h3 className="mx-4 mt-4 text-start ">Scenic Dining</h3>
          <p className="mx-4 mt-6 text-justify ">
            The setting for your dining experience is as exquisite as the dishes
            themselves. Enjoy your meals against the backdrop of serene lake
            views, where the gentle play of sunlight on the water creates an
            ambiance that's second to none. Whether it's breakfast, lunch, or
            dinner, each dining experience is an immersive journey that
            transports you to a world of taste and tranquility.
          </p>
          <hr className="mb-8 w-full  border border-primary" />
          <h3 className="mx-4 mt-4 text-end ">Impeccable Service</h3>
          <p className="mx-4 mt-6 text-justify ">
            Our commitment to your dining satisfaction goes beyond the cuisine.
            Our attentive staff is dedicated to providing impeccable service,
            ensuring that your every need is met. From recommending the perfect
            wine to pairing it with your choice of dish, we're here to make your
            dining experience extraordinary.
          </p>
          <p className="mx-4 mt-6 text-justify ">
            At Aamraa Resort, dining is not just a meal; it's a celebration.
            It's an exploration of flavors, a tribute to tradition, and a
            testament to the artistry of our chefs. It's a journey of the
            senses, where every bite tells a story, and every moment is savored.
            Come, indulge in the delight of dining at Aamraa Resort, where food
            is an experience, and every meal is a memory.
          </p>
        </div>
      </div>
    </>
  );
}

export default Homescreen;
