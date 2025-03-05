import React from "react";
import starimg from "../assets/star-div.png";
import Marquee from "react-fast-marquee";

const headingMarquee = () => {
  const marqueeData = [
    "WELCOME TO APATRIX IT SOLUTIONS",
    "DIGITAL STUDIO",
    "DIGITAL STUDIO",
    "DIGITAL STUDIO",
    "WELCOME TO APATRIX IT SOLUTIONS",
    "DIGITAL STUDIO",
    "DIGITAL STUDIO",
    "DIGITAL STUDIO",
    "WELCOME TO APATRIX IT SOLUTIONS",
  ];
  return (
    <div className="bg-cs_theme_black py-6 md:py-16">
      <section className="bg-[#2F2F2F] text-white py-4 md:py-6  ">
        <Marquee speed={80}>
          <div className="flex gap-2 md:gap-6">
            {marqueeData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <img
                  className="filter invert h-5 w-5  md:h-9 md:w-9 mx-3 md:mx-10"
                  src={starimg}
                  alt="Star"
                />
                <p className="text-base md:text-2xl font-bold">{item}</p>
              </div>
            ))}
          </div>
        </Marquee>
      </section>
    </div>

  );
};

export default headingMarquee;
