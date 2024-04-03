import Image from "next/image";
import Link from "next/link";
import React from "react";

function RoomSection(): JSX.Element {
  return (
    <>
      <div className="p-5 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <h5>Staycation</h5>
          <h2 className=" mx-4 mb-8 mt-4 text-center font-semibold ">
            Unveil the Essence of Tranquility at Aamraa Resort
          </h2>
          <p className="pb-10">
            Welcome to Aamraa Resort, where timeless elegance meets modern
            comfort. From the nostalgic allure of our Wada Vintage Rooms to the
            eco-friendly serenity of our Bamboo Tree Rooms, each accommodation
            offers a unique retreat. Discover the future of lodging in our
            innovative Cosmo Capsules or escape to tranquility in our Garret and
            Loft Rooms. Join us on a journey of relaxation and discovery amidst
            the beauty of Junnar.
          </p>
          <div className="mx-auto flex max-w-6xl flex-wrap justify-center">
            <Room
              image="/images/wada/wada25.jpg"
              title="Mangiferal "
              subtitle="Echoes of Tradition in Wada Vintage Rooms"
              desc="Step into the past at Mangiferal, our Wada Vintage Rooms, where the essence of Junnar's heritage is meticulously preserved. These rooms harmoniously blend historic charm with modern comforts, boasting antique furnishings alongside contemporary amenities."
              link="/rooms/mangiferal"
            />
            {/* <Room
              image="/aamraa1.jpg"
              title="Bamboosa"
              subtitle="Embrace Nature in Bamboo Tree Rooms"
              desc="Discover serenity amidst nature at Bamboosa, our rooms curated within the embrace of bamboo trees. These eco-friendly accommodations offer a unique blend of comfort and sustainability, allowing you to reconnect with the natural world."
            /> */}
            <Room
              image="/images/capsule/capsule0.jpg"
              link="/rooms/capsule"
              title="Cosmo Capsule"
              subtitle="The Futuristic Retreat in Cosmo Capsules"
              desc="Embark on a journey to the stars at Cosmo Capsule, our futuristic retreats designed for solo adventurers. As the pioneers of this innovative lodging concept in Junnar, our Cosmo Capsules offer unparalleled privacy and a window to the celestial wonders above. "
            />
            {/* <Room
              image="/aamraa1.jpg"
              title="Garret "
              subtitle="Cozy Escapes in Garret Rooms"
              desc="Unwind in comfort and style at Garret, our cozy retreats designed for relaxation. Nestled within the tranquil surroundings of Aamraa Resort, these rooms offer a peaceful sanctuary away from the hustle and bustle of everyday life. "
            /> */}
            <Room
              image="/images/vip/vip0.jpg"
              title="Loft"
              subtitle="Urban Chic in Loft Rooms"
              desc="Discover urban sophistication in Loft- 1, our stylish retreat designed for modern travelers. With sleek interiors and contemporary amenities, these rooms offer a chic escape amidst the natural beauty of Junnar. Experience the perfect fusion of style and comfort in our Loft rooms."
              link="/rooms/loft"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomSection;

interface IRoom {
  image: string;
  title: string;
  subtitle: string;
  desc: string;
  link: string;
}

const Room = ({ image, title, subtitle, desc, link }: IRoom): JSX.Element => {
  return (
    <div className="p-5 md:w-1/2">
      <div className="rounded-sm border border-b-4 border-b-primary bg-white">
        <div className="h-72 overflow-hidden md:h-80 ">
          <Image
            className="h-full w-full object-cover duration-300 hover:scale-110"
            src={image}
            width={800}
            height={500}
            alt=""
          />
        </div>
        <div className="p-5 text-left">
          <h3 className="text-4xl">{title}</h3>
          <h4 className="py-3 font-semibold">{subtitle}</h4>
          <p className="pb-3 text-base leading-snug">{desc}</p>
          <Link href={link}>
            <button>Explore</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
