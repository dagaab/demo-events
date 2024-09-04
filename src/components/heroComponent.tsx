import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div id="hero_container">
      <div id="hero_headline">
        <div className="text-center text-white">
          <h1 id="hero_h1" className="px-3 pb-3 text-6xl">
            Join the best Demo Events
          </h1>
          <p>Book your tickets now</p>
        </div>
        <div id="cover_images" className="text-center d-flex justify-content-center">
        <Image
          src="/images/bulb.png"
          alt="bulb"
          height={300}
          width={300}
          className="phone_shadow mt-5"
          id="image"
        />
        <Image
          src="/images/brain.png"
          alt="brain"
          height={300}
          width={300}
          className="phone_shadow mt-5"
          id="image"
        />

        <Image
          src="/images/development.png"
          alt="development"
          height={300}
          width={300}
          className="phone_shadow mt-5"
          id="image"
        />
      </div>
      </div>
     
    </div>
  );
}

export default Hero;
