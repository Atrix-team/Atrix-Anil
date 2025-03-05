import React, { useEffect, useRef } from "react";
import Service1 from "../assets/service-images/service-1.png";
import Service2 from "../assets/service-images/service-2.png";
import Service3 from "../assets/service-images/service-3.png";
import Service4 from "../assets/service-images/service-4.png";
import Service5 from "../assets/service-images/service-5.png";
import Service6 from "../assets/service-images/service-6.png";
import Service7 from "../assets/service-images/service-7.png";
import graphic from "../assets/graphic.svg"
import style from "./ServiceSec.module.css";
import './ServicesSec.css'
import { FaUser } from "react-icons/fa";
import graphic_icon from "../assets/service-images/Asset-1.svg";
import coading_icon from "../assets/service-images/Asset-2.svg";
import add_icon from "../assets/service-images/Asset-3.svg";
import camera_icon from "../assets/service-images/Asset-4.svg";
import stick_icon from "../assets/service-images/Asset-5.svg";
import phone_icon from "../assets/service-images/Asset-6.svg";
import cart_icon from "../assets/service-images/Asset-7.svg";

import serv1 from "../assets/service-images/graphic.svg";
import serv2 from "../assets/service-images/dev.svg";
import serv3 from "../assets/service-images/marketing.svg";
import serv4 from "../assets/service-images/vfx.svg";
import serv5 from "../assets/service-images/video.svg";
import serv6 from "../assets/service-images/staffing.svg";
import serv7 from "../assets/service-images/log.svg";

import CsButton from "./CsButton";

const services = [
  {
    id: 1,
    image: serv1,
    icon: graphic_icon,
    title: "Branding/graphic design",
    description:
      "Did you know? 94% of first impressions are design-related! That’s why strong visuals are key to brand success. Graphic design isn’t just about looks - it’s about delivering your message effectively. At Apatrix IT Solutions, we bring your vision to life with top-notch designs tailored to your needs. Whether it’s branding, websites, infographics, or eBooks, our expert team creates visually captivating content that engages and inspires. Let’s design something impactful!",
    key_points: ['BRANDING', 'LOGO DESIGN', 'PACKAGING', 'PRODUCT DESIGN', 'PRINT MEDIA', 'ADVERTISEMENT', 'UI/UX',]
  },
  {
    id: 2,
    image: serv2,
    icon: coading_icon,
    title: "Web Development",
    description:
      "Create stunning, user-friendly websites that captivate, engage, and drive real results with our experts! Whether you need a new website, a redesign, or custom development, we ensure a seamless experience with modern, responsive designs tailored to your brand. Our expert team focuses on creating visually appealing and high-performing websites that boost visibility, attract customers, and grow your business effortlessly. So, take your online presence to the next level!",
    key_points: ['AI', 'METAVERSE', 'SALESFORCE', 'CRM', 'CMS', 'PHP', 'LARAVEL', 'REACT JS', 'NODE JS']
  },
  {
    id: 3,
    image: serv3,
    icon: add_icon,
    title: "Digital Marketing",
    description:
      "At Apatrix IT Solutions, get your own digital marketing strategy built from scratch. Our expert team crafts tailored campaigns to drive traffic, engage customers, and convert leads into loyal clients. Whether it’s SEO, social media marketing, or content creation, we focus on delivering real, measurable results that help your brand stand out. Ready to take your business to the next level? Partner with us today and watch your online presence grow!",
    key_points: ['MARKETING', 'STRATEGY', 'SEO', 'SMO', 'DIGITAL ADS', 'CONTENT CREATION']
  },
  {
    id: 4,
    image: serv4,
    icon: stick_icon,
    title: "Visual Effects",
    description:
      "Looking to bring your ideas to life with stunning visual effects? At Apatrix IT Solutions, we specialize in creating eye-catching VFX that captivate and engage your audience. Whether it's for film, advertisements, or digital media, our expert team delivers cutting-edge effects that enhance your project and leave a lasting impact. Transform your vision into reality with Apatrix IT Solutions today and make your visuals unforgettable!",
    key_points: ['VFX', 'SFX', 'MOTION GRAPHICS', 'EDITING', 'COMPOSITION', 'GRADING', '3D']
  },
  {
    id: 5,
    image: serv5,
    icon: camera_icon,
    title: " Photo/Videography",
    description:
      "Your moments deserve the spotlight! At Apatrix IT Solutions, we specialize in photo and videography that showcases your vision in the most stunning way. From events and branding to creative projects, our team ensures every shot is perfect. With high-quality photography and dynamic videography, we make your ideas come to life. Ready to capture the perfect shot? Partner with Apatrix IT Solutions and let’s create something amazing together!",
    key_points: ['CORPORATE SHOOT', 'PRODUCT SHOOT', 'food photography', 'COMMERCIAL SHOOT']
  },
  {
    id: 6,
    image: serv6,
    icon: phone_icon,
    title: "Staffing",
    description:
      "Ready to boost your business with a flexible workforce? Our solution helps you create a staffing plan that adapts to your needs, saving you money and ensuring compliance. With our platform, you can improve efficiency, reduce costs, and stay ahead in today’s fast-paced market. Empower your business with a staffing strategy designed to grow and succeed!",
    key_points: ['US', 'STAFFING', 'US RECRUITER', 'PAYROLL', 'TALENT ACQUISITION', 'US HIRING']
  },
  {
    id: 7,
    image: serv7,
    icon: cart_icon,
    title: "Logistics",
    description:
      "Apatrix is a modern logistics firm dedicated to providing our clients throughout the world with outstanding service and cutting-edge solutions. Having worked in the transportation and logistics industry for five years, we have made a name for ourselves as a reliable partner. Road freight is in our extensive service offering, which enables us to satisfy the varied demands of companies in a number of sectors.",
    key_points: ['BRANDING', 'LOGO DESIGN', 'PACKAGING', 'PRODUCT DESIGN', 'PRINT MEDIA', 'ADVERTISEMENT', 'UI/UX',]
  },
];

const ServicesSec = () => {
  const myElementdetail = useRef()
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".service-card");
      const stickyImages = document.querySelectorAll(".serviceImg");
      const windowHeight = window.innerHeight;




      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();

        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
          card.style.opacity = "1";

          // console.log("Card in view index:", index);
          // console.log("window height ", rect.top);
          // console.log("rect top", windowHeight);
          if (stickyImages[index]) {
            stickyImages[index].classList.add(style.activeImg);
            stickyImages[index].style.opacity = "1"
          }
        } else {
          card.style.opacity = "0.1";
          if (stickyImages[index]) {
            stickyImages[index].classList.remove(style.activeImg);
            stickyImages[index].style.opacity = "0"

          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-cs_theme_black   text-cs_white  py-12 md:py-16 ">
      <div className="container">
        <div className="headinSec flex justify-between flex-col md:flex-row  ">
          <div className=' md:max-w-[235px]  ' >
            <h5 className=''></h5>
            <h2 className='leading-none font-bold  '>Our Services</h2></div>
          <div className='hidden md:block pt-12 flex-1 ps-10'> <img src="./src/assets/border-line.svg" alt="" /> </div>
          <div className=' md:max-w-[330px] md:pl-9 text-cs_white flex flex-col md:items-end items-start  '>
            <div className='order-2 md:order-1 mt-4 md:mt-0 self-left  md:self-end ' ><CsButton mybtn={"View All Services"} /></div>

            <p className='text-left  md:text-end mt-4 md:mt-7 order-1 md:order-2 '>Offer a wide range of services to help businesses establish and enhance their online presence.</p></div>
        </div>





        <div className="flex flex-col md:flex-row mt-12 md:mt-12">
          {/* Services List (Left Side) */}
          <div className="w-full md:w-1/2 space-y-24">
            {services.map((service) => (
              <div
                key={service.id}
                className="service-card opacity-30 transition-opacity duration-300 space-y-10 md:mt-60 first:mt-0 "
              >
                <div className="md:hidden max-h-[300px]  my-10 flex justify-start"  > <img src={service.image} alt="" className=" max-h-full " /> </div>
                <div className="flex justify-start items-center gap-3">
                  <div className="w-[50px] h-[50px] bg-gradient-to-r from-cs_blue to-cs_green  rounded-full translate-y-2 mr-1 flex justify-center items-center">
                    <img src={service.icon} alt="" className=" w-2/4 filter invert  " />
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold mt-4">{service.title}</h3>
                </div>
                <p className="text-md mt-6 md:mt-9 text-(--white) leading-7 md:leading-8">
                  {service.description}
                </p>
                <div className="flex flex-wrap mt-6 md:mt-10">
                  {service.key_points.map((btn, i) => (
                    <div
                      key={i}
                      className="custom-gradient  rounded-full px-4 py-1 md:px-6 md:py-2 mt-2 mr-2 text-base uppercase"
                    >
                      {btn}
                    </div>
                  ))}


                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:block  w-1/2  ">
            <div className="sticky top-[20vh] ml-[15%] w-[85%] h-[500px] filter ">
              {services.map((serviceimg, index) => (
                <img
                  id="serviceImg"
                  key={serviceimg.id}
                  src={serviceimg.image}
                  alt={serviceimg.title}
                  className="absolute transition-all duration-200   opacity-0 serviceImg bg-cs_theme_black w-full h-full"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ServicesSec;
