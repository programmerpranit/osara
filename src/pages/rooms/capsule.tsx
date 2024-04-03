import RoomDetail from "@/components/RoomDetail";
import React from "react";

const Capsule = (): JSX.Element => {
  return (
    <>
      <RoomDetail
        name="Cosmo Capsule"
        subtitle="The Futuristic Retreat in Cosmo Capsules"
        featured="/images/capsule/capsule1.jpg"
        images={[
          "/images/capsule/capsule0.jpg",
          "/images/capsule/capsule2.jpg",
          "/images/capsule/capsule3.jpg",
          "/images/capsule/capsule4.jpg",
          "/images/capsule/capsule5.jpg",
        ]}
        //   "/images/capsule/capsule6.jpg",
        //   "/images/capsule/capsule7.jpg",
        //   "/images/capsule/capsule8.jpg",
        //   "/images/capsule/capsule9.jpg",
        //   "/images/capsule/capsule10.jpg",
        //   "/images/capsule/capsule11.jpg",
        //   "/images/capsule/capsule12.jpg",
        //   "/images/capsule/capsule13.jpg",
        //   "/images/capsule/capsule14.jpg",
        //   "/images/capsule/capsule15.jpg",
        //   "/images/capsule/capsule16.jpg",
        //   "/images/capsule/capsule17.jpg",
        //   "/images/capsule/capsule18.jpg",
        //   "/images/capsule/capsule19.jpg",
        //   "/images/capsule/capsule20.jpg",
        //   "/images/capsule/capsule21.jpg",
        //   "/images/capsule/capsule22.jpg",
        //   "/images/capsule/capsule23.jpg",
        //   "/images/capsule/capsule24.jpg",
        //   "/images/capsule/capsule25.jpg",
        //   "/images/capsule/capsule26.jpg",
        //   "/images/capsule/capsule27.jpg",
        // ]}
        description="Step into the past at Mangiferal, our Wada Vintage Rooms, where the essence of Junnar's heritage is meticulously preserved. These rooms harmoniously blend historic charm with modern comforts, boasting antique furnishings alongside contemporary amenities. Immerse yourself in the rustic elegance of Junnar, where nostalgia whispers in every corner. Experience the timeless allure of Junnar's past, seamlessly woven into modern-day luxury.
"
      />
    </>
  );
};

export default Capsule;
