import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import HeroBgAnimation from "./HeroBgAnimation";
import TypeWriter from "./TypeWriter";
// import { useLocation } from "react-router-dom";
import arrowimg from "../assets/arrow.svg";

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    setTimeout(() => {
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        x.set((clientX - centerX) / 200);
        y.set((clientY - centerY) / 200);
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, 2000);
  }, [x, y]);

  return (
    <section className=" bg-[url('./assets/hero-bg-img.jpg')] bg-cover md:pt-72 pt-48 hero-section relative pb-20 md:pb-48  min-h-[70vh] md:min-h-screen overflow-hidden px-4 md:px-0 ">
      <HeroBgAnimation></HeroBgAnimation>
      <div className=" mx-auto text-center text-white w-[90%] max-w-[1400px] ">
        <h1 className="text-5xl  md:text-9xl md:leading-none relative tracking-wider leading-[3rem]">
          <span className=" relative">
            {" "}
            We deliver
            {/* Button 1 - Marketing */}
            <motion.button
              initial={{ y: -500, rotate: -180 }}
              animate={{ y: 0, rotate: -6 }}
              transition={{ type: "spring", stiffness: 40, damping: 10 }}
              className="hero-btns absolute -right-11 bottom-0 md:-right-24 md:bottom-6  text-sm md:text-[27px]  px-4 py-[2px] md:px-6 md:py-2 bg-cs_white text-cs_black rounded-full tracking-normal cursor-default "
              style={{
                x: useTransform(x, (val) => val * 1),
                y: useTransform(y, (val) => val * 1),
              }}
            >
              Marketing
            </motion.button>
          </span>

          <div className="flex items-center justify-center 2xl:flex-row flex-col">
            <div className=" relative">
              personal
              {/* Button 2 - Web Development */}
              <motion.button
                initial={{ y: -500, rotate: -180 }}
                animate={{ y: 0, rotate: 4 }}
                transition={{ type: "spring", stiffness: 40, damping: 10 }}
                className="hero-btns absolute -left-24 md:left-0  md:-top-2 -bottom-3 md:bottom-[unset] text-sm md:text-[27px] px-4 py-[2px] flex md:px-6 md:py-3  bg-cs_green text-cs_black rounded-full tracking-normal cursor-default z-[1] "
                style={{
                  x: useTransform(x, (val) => val * 1.5),
                  y: useTransform(y, (val) => val * 1.5),
                }}
              >
                Web Development
              </motion.button>
            </div>

            <p className="typewiter-wraper flex justify-center items-center md:ms-8 md:px-7 px-4 text-center rounded-full relative text-xl  md:text-[44px] font-medium w-[350px] md:w-[770px]  md:min-h-[85px] my-1 py-2 ">
              <TypeWriter></TypeWriter>
            </p>
          </div>
          <span className="relative">
            solutions
            {/* Button 3 - Brand Identity */}
            <motion.button
              initial={{ y: -500, rotate: -180 }}
              animate={{ y: 0, rotate: 6 }}
              transition={{ type: "spring", stiffness: 40, damping: 10 }}
              className=" hero-btns absolute -right-7 md:right-[unset] md:-left-36 top-0 md:top-[unset]  md:bottom-6  text-sm md:text-[27px] px-4 py-[2px] flex md:px-6 md:py-3  bg-cs_blue text-cs_black rounded-full tracking-normal cursor-default "
              style={{
                x: useTransform(x, (val) => val * 1.5),
                y: useTransform(y, (val) => val * 1.5),
              }}
            >
              Brand Identity
            </motion.button>
            <img
              className=" absolute -right-24 top-8 h-20 w-auto"
              src={arrowimg}
              alt=""
              style={{
                x: useTransform(x, (val) => val * 1.5),
                y: useTransform(y, (val) => val * 1.5),
              }}
            />
          </span>
        </h1>

        <p className="hero-dec w-full  max-w-[910px] mx-auto text-cs_white md:mt-12 mt-5 text-base md:text-[21px] font-semibold relative leading-8">
          Founded with a passion for innovation, our team of young talents
          brings a fresh perspective to the world of IT and beyond, offering
          unique and creative solutions tailored to meet the evolving needs of
          our clients.
        </p>
      </div>
    </section>
  );
};

export default Hero;
