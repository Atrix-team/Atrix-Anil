import React, { useState } from "react";
import backend1 from "../assets/technology-icons/backend/asp.svg"
import backend2 from "../assets/technology-icons/backend/django.svg"
import backend3 from "../assets/technology-icons/backend/express-js.svg"
import backend4 from "../assets/technology-icons/backend/firebase.svg"
import backend5 from "../assets/technology-icons/backend/laravel.svg"
import backend6 from "../assets/technology-icons/backend/node-js.svg"
import backend7 from "../assets/technology-icons/backend/ruby.svg"


import frontend1 from "../assets/technology-icons/frontend/angular.svg"
import frontend2 from "../assets/technology-icons/frontend/css.svg"
import frontend3 from "../assets/technology-icons/frontend/d3.svg"
import frontend4 from "../assets/technology-icons/frontend/GraphQL (2).svg"
import frontend5 from "../assets/technology-icons/frontend/html.svg"
import frontend6 from "../assets/technology-icons/frontend/javascript.svg"
import frontend7 from "../assets/technology-icons/frontend/jquery.svg"
import frontend8 from "../assets/technology-icons/frontend/react.svg"
import frontend9 from "../assets/technology-icons/frontend/vue.svg"






const TechnologyIconsSec = () => {
    const cardIconsData = [
        {
            category: "frontEnd",
            items: [
                {
                    icon_link: frontend1,
                    title: "Angular JS",
                },
                {
                    icon_link: frontend2,
                    title: "CSS",
                },
                {
                    icon_link: frontend3,
                    title: " D3 JS",
                },
                {
                    icon_link: frontend4,
                    title: "GraphQL",
                },
                {
                    icon_link: frontend5,
                    title: "HTML",
                },
                {
                    icon_link: frontend6,
                    title: "JavaScript",
                },
                {
                    icon_link: frontend7,
                    title: "jQuery",
                },

            ],
        },
        {
            category: "backEnd",
            items: [
                {
                    icon_link: backend1,
                    title: "ASP .Net",
                },
                {
                    icon_link: backend2,
                    title: "DJnago",
                },
                {
                    icon_link: backend3,
                    title: "Express JS",
                },
                {
                    icon_link: backend4,
                    title: "Firebase",
                },
                {
                    icon_link: backend5,
                    title: "Laravel",
                },
                {
                    icon_link: backend6,
                    title: " Node JS",
                },
                {
                    icon_link: backend7,
                    title: "Ruby",
                },

            ],
        },
    ];

    const frontEndData = cardIconsData.find((cat) => cat.category === "frontEnd");
    const backEndData = cardIconsData.find((cat) => cat.category === "backEnd");

    const [showCat, setShowCat] = useState(frontEndData);
    return (
        <section className="bg-cs_theme_black text-white py-12 md:py-16 ">
            <style>
                {`
                @media screen and (min-width: 768px) {
                 .icon-ul li:nth-child(1)  >div , .icon-ul li:nth-child(6)  >div  {
                 min-height: 250px;
                }
                }
               
                `}
            </style>

            <div className="container mx-auto ">
                <div className="headinSec  flex md:flex-row flex-col justify-between">
                    <div className="md:w-1/3  md:min-w-[460px] md:text-left text-center ">
                        <h2 className="font-bold leading-none ">
                            <span className="font-normal ">We Used Advance</span> TECHNOLOGY
                        </h2>
                    </div>
                    <div className=" hidden md:block md:w-1/3 pt-20 flex-1 ">
                        <img
                            src="./src/assets/border-line.svg"
                            alt=""
                            className=" -ml-24 w-[100%]"
                        />
                    </div>
                    <div className="md:w-1/3 md:pt-20 mt-5 md:pl-8 text-cs_white md:text-end text-center">
                        <p>
                            Offer a wide range of services to help businesses establish and
                            enhance their online presence.
                        </p>
                    </div>
                </div>
                <div className="mt-10 md:mt-24">
                    <div className="icon-header flex  gap-6 justify-center mb-12 md:-mb-10 ">
                        <button
                            onClick={() => setShowCat(frontEndData)}
                            className={`${showCat.category === "frontEnd" ? "bg-cs_blue" : "bg-[#222222]"
                                } text-white text-base px-6 py-2 font-bold rounded-full relative`}
                        >
                            Front-End{" "}
                            <span
                                className={`${showCat.category === "frontEnd"
                                    ? "bg-cs_blue "
                                    : "transparent"
                                    } w-3 h-3   absolute bottom-0 left-1/2 -translate-x-2/4 translate-y-2/4 rotate-45`}
                            ></span>{" "}
                        </button>

                        <button
                            onClick={() => setShowCat(backEndData)}
                            className={`${showCat.category === "backEnd" ? "bg-cs_blue" : "bg-[#222222]"
                                } text-white text-base px-6 py-2 font-bold rounded-full relative`}
                        >
                            Back-End
                            <span
                                className={`${showCat.category === "backEnd" ? "bg-cs_blue " : "transparent"
                                    } w-3 h-3   absolute bottom-0 left-1/2 -translate-x-2/4 translate-y-2/4 rotate-45`}
                            ></span>
                        </button>
                    </div>
                    <div className="icon-wrapper">
                        <ul className=" flex  flex-wrap justify-center icon-ul gap-y-3 -mx-2 ">
                            {showCat.items.map((data, index) => (
                                <li key={index} className="w-2/4 md:max-w-[16.66%]   px-2 self-end ">
                                    <div className=" flex flex-col items-center justify-center bg-[#222222] rounded-lg h-40 p-5 ">
                                        <div className="icon-img  w-12 h-12 flex items-center justify-center ">
                                            <img src={data.icon_link} alt="" className="w-full h-full" />
                                        </div>

                                        <h5 className="font-bold text-base md:text-xl mt-4 ">{data.title} </h5>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologyIconsSec;
