import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FiArrowUpRight } from "react-icons/fi";
import CsButton from "./CsButton";

const PortfolioSlider = () => {
  const sliderData = [
    {
      id: 11,
      title: "Cartoon Bank",
      btns: ["3d Animation", "Graphic Design"],
      image_link:
        "https://atrixitsolutions.com/wp-content/uploads/2024/08/project4.jpeg",
    },
    {
      id: 12,
      title: "World’s Relays",
      btns: ["UI & UX Design"],
      image_link:
        "https://atrixitsolutions.com/wp-content/uploads/2024/08/project3.jpeg",
    },
    {
      id: 13,
      title: "Stickers Pack",
      btns: ["Graphic Design", "UI & UX Design"],
      image_link:
        "https://atrixitsolutions.com/wp-content/uploads/2024/08/project2.jpeg",
    },
    {
      id: 14,
      title: "Diseño Gráfico",
      btns: ["Development", "Software"],
      image_link:
        "https://atrixitsolutions.com/wp-content/uploads/2024/08/project1.jpeg",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 700,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container ">
      <style>
        {`
                .slick-arrow {
                display:none!important;
                }
                .slick-list{
                overflow:visible;
                pointer-events: none;
                }
                .slick-slide{
                opacity:0.2}
                .slick-active{
                opacity:1;
                 pointer-events: auto;
                }
                .slick-dots li button:before {
                opacity: 1;
                color: #fff;
                border: 1px solid #fff;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                }
                .slick-dots li.slick-active button:before {
                opacity: 1;
                color: #00A657;
                border: 1px solid #00A657;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;

                }
                .slick-dots {
                bottom: -50px;}
                .slick-dots li {
                margin: 0 9px;}
                `}
      </style>

      <Slider {...settings} className="-mx-3" >
        {sliderData.map((slide, index) => (
          <div key={slide.id} className=" myss px-3">
            <div className=" rounded-xl overflow-hidden border border-[#282828]">
              <div className="bg-[#252525] pt-7 px-10">
                <ul className=" flex gap-4">
                  {slide.btns.map((btn, index) => (
                    <li key={index}>
                      <span className="bg-[#121212] font-bold px-4 py-[4px] text-sm rounded-full inline-block hover:bg-cs_green transition-all">
                        {btn} <button></button>
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="port-img mt-5 relative h-60 w-auto ">
                  <img
                    className="rounded h-full w-full object-cover"
                    src={slide.image_link}
                    alt=""
                  />
                  <button className=" bg-[#252525] h-12 w-12  text-2xl flex justify-center items-center rounded-[50%] absolute right-6 bottom-0 translate-y-2/4 hover:rotate-45 hover:bg-cs_green transition-transform ">
                    <FiArrowUpRight />
                  </button>
                </div>
              </div>


              <div className="port-footer px-10 bg-[#1A1A1A] py-7">
                <a
                  href="#"
                  className=" text-2xl font-bold hover:text-cs_green "
                >
                  {slide.title}{" "}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PortfolioSlider;
