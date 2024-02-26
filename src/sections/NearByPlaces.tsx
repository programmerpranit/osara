import Image from "next/image";
import React from "react";

const NearByPlaces = (): JSX.Element => {
  return (
    <>
      <div className="mx-auto  max-w-7xl px-3 py-20 text-center">
        <h5>Near by Attractions</h5>
        <h2 className=" mx-4 mb-8 mt-4 text-center ">
          Scenic Location of Aamraa Resort
        </h2>
        <p className="text-center">
          Nestled amidst the picturesque landscape of Junnar Tehsil in Pune
          District, Aamraa Resort emerges from the heart of an ancient mango
          garden in the quaint village of Udapur.
        </p>

        <div className="flex flex-wrap justify-center py-10">
          <Place
            image="/places/Lenyadri.jpg"
            title="Lenyadri Caves"
            desc="Delve into history at the ancient Lenyadri Caves, where intricate Buddhist rock-cut sculptures depict tales of yore, amidst serene surroundings."
          />
          <Place
            image="/places/bhimashankar-temple.webp"
            title="Bhimashankar Temple"
            desc="Seek spiritual solace at the Bhimashankar Temple, an architectural marvel nestled amidst verdant hills, offering panoramic views and moments of tranquility."
          />
          <Place
            image="/places/kukdi-river.jpg"
            title="Kukdi River"
            desc="Immerse yourself in nature's embrace along the banks of the Kukdi River, where gentle waters and lush greenery create the perfect setting for relaxation and rejuvenation."
          />
          <Place
            image="/places/shivneri.jpg"
            title="Shivneri Fort"
            desc="Step back in time at Shivneri Fort, the birthplace of Shivaji Maharaj, where rugged landscapes and historic ruins beckon adventurers and history enthusiasts alike."
          />
          <Place
            image="/places/junnar-caves.jpg"
            title="Junnar Caves"
            desc="Unearth the mysteries of Junnar's ancient past at the Junnar Caves, a complex of rock-cut caves adorned with intricate carvings and sculptures, offering a glimpse into bygone civilizations."
          />
          <Place
            image="/places/malshej-ghat.jpg"
            title="Malshej Ghat"
            desc="Discover the breathtaking beauty of Malshej Ghat, where misty mountains, cascading waterfalls, and vibrant flora create a picturesque paradise for nature lovers and photographers."
          />
          <Place
            image="/places/harishchandragad.jpg"
            title="Harishchandragad"
            desc="Embark on a trekking adventure to Harishchandragad, a majestic hill fort perched atop the Western Ghats, offering panoramic views of the surrounding valleys and the Konkan coastline."
          />
          <Place
            image="/places/manikdoh-dam.webp"
            title="Manikdoh Dam"
            desc="Witness the serene waters of Manikdoh Dam, where azure skies meet tranquil reservoirs, offering opportunities for boating, birdwatching, and peaceful contemplation."
          />
          <Place
            image="/places/ozar.jpg"
            title="Ozar "
            desc="home to ancient temples dedicated to Lord Ganesha and Lord Shiva, where spiritual devotion meets architectural splendor."
          />
          {/* <Place
            image="/places/Lenyadri.jpg"
            title="Pabal Excavation Site"
            desc="Explore the archaeological wonders of the Pabal Excavation Site, where ancient relics and artifacts unveil the secrets of Junnar's prehistoric past, offering a glimpse into early human civilization."
          /> */}
        </div>
      </div>
    </>
  );
};

export default NearByPlaces;

interface IPlace {
  image: string;
  title: string;
  desc: string;
}

export const Place = ({ image, title, desc }: IPlace): JSX.Element => {
  return (
    <div className="my-5 p-3 text-left md:w-1/3">
      <div className="">
        <Image
          src={image}
          alt=""
          className="h-60 object-cover"
          width={400}
          height={250}
        />
        <h3 className="py-4">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};
