import React, { useEffect, useRef, useState } from "react";
import Service1 from "../assets/service-images/service-1.png";
import Service2 from "../assets/service-images/service-2.png";
import Service3 from "../assets/service-images/service-3.png";
import Service4 from "../assets/service-images/service-4.png";
import Service5 from "../assets/service-images/service-5.png";
import Service6 from "../assets/service-images/service-6.png";
import Service7 from "../assets/service-images/service-7.png";
import graphic from "../assets/graphic.svg";
import { FaUser } from "react-icons/fa";
import graphic_icon from "../assets/service-images/Asset-1.svg";
import coading_icon from "../assets/service-images/Asset-2.svg";
import add_icon from "../assets/service-images/Asset-3.svg";
import camera_icon from "../assets/service-images/Asset-4.svg";
import stick_icon from "../assets/service-images/Asset-5.svg";
import phone_icon from "../assets/service-images/Asset-6.svg";
import cart_icon from "../assets/service-images/Asset-7.svg";

import serv1 from "../assets/service-images/Asset 8.svg";
import serv2 from "../assets/service-images/Asset 9.svg";
import serv3 from "../assets/service-images/Asset 10.svg";
import serv4 from "../assets/service-images/Asset 11.svg";
import serv5 from "../assets/service-images/Asset 12.svg";
import serv6 from "../assets/service-images/Asset 13.svg";
import serv7 from "../assets/service-images/Asset 15.svg";

const servicesData = [
    {
        id: 1,
        image: serv1,
        icon: graphic_icon,
        title: "UI-UX Design",
        description:
            "As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction. By focusing on intuitive design elements, we help create seamless experiences that keep users engaged.",
        buttons: [
            "Branding",
            "Logo Design",
            "Packaging",
            "Packaging",
            "Print Media",
            "Advertisement",
        ],
    },
    {
        id: 2,
        image: serv2,
        icon: coading_icon,
        title: "Mobile Apps",
        description:
            "As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction. By focusing on intuitive design elements, we help create seamless experiences that keep users engaged.",
        buttons: [
            "Branding",
            "Logo Design",
            "Packaging",
            "Packaging",
            "Print Media",
            "Advertisement",
        ],
    },
    {
        id: 3,
        image: serv3,
        icon: add_icon,
        title: "Backend Development",
        description:
            "As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction. By focusing on intuitive design elements, we help create seamless experiences that keep users engaged.",
        buttons: [
            "Branding",
            "Logo Design",
            "Packaging",
            "Packaging",
            "Print Media",
            "Advertisement",
        ],
    },
    {
        id: 4,
        image: Service4,
        icon: camera_icon,
        title: "Frontend Development",
        description:
            "As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction. By focusing on intuitive design elements, we help create seamless experiences that keep users engaged.",
        buttons: [
            "Branding",
            "Logo Design",
            "Packaging",
            "Packaging",
            "Print Media",
            "Advertisement",
        ],
    },
    {
        id: 5,
        image: Service5,
        icon: stick_icon,
        title: "Artificial Intelligence",
        description:
            "As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction. By focusing on intuitive design elements, we help create seamless experiences that keep users engaged.",
        buttons: [
            "Branding",
            "Logo Design",
            "Packaging",
            "Packaging",
            "Print Media",
            "Advertisement",
        ],
    },
    {
        id: 6,
        image: Service6,
        icon: phone_icon,
        title: "Data Analysis & Data Science",
        description:
            "As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction. By focusing on intuitive design elements, we help create seamless experiences that keep users engaged.",
        buttons: [
            "Branding",
            "Logo Design",
            "Packaging",
            "Packaging",
            "Print Media",
            "Advertisement",
        ],
    },
    {
        id: 7,
        image: Service7,
        icon: cart_icon,
        title: "Managed Cloud & DevOps",
        description:
            "As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction. By focusing on intuitive design elements, we help create seamless experiences that keep users engaged.",
        buttons: [
            "Branding",
            "Logo Design",
            "Packaging",
            "Packaging",
            "Print Media",
            "Advertisement",
        ],
    },
];

const MyServicesSec = () => {
    const cardsRef = useRef([]);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = Number(entry.target.dataset.index);
                    if (entry.intersectionRatio > 0.6) {
                        setActiveIndex(index);
                    }
                });
            },
            { root: null, rootMargin: "-20% 0% -20% 0%", threshold: 0.6 }
        );

        cardsRef.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => {
            cardsRef.current.forEach((card) => {
                if (card) observer.unobserve(card);
            });
        };
    }, []);

    return (
        <div className=" bg-cs_theme_black text-white">
            <div className="container mx-auto">
                <div>
                    {" "}
                    <h2 className=" font-bold text-center py-10">Our Services</h2>{" "}
                </div>

                <div className="cards-wrapper flex border " id="cards-wrapper">
                    <div className="card-content w-1/2  ">
                        {servicesData.map((item, index) => (
                            <div
                                className={`service-card border border-cs_green py-20 transition-opacity duration-500 ${activeIndex === index ? "active" : ""
                                    }`}
                                key={index}
                                ref={(el) => (cardsRef.current[index] = el)}
                                data-index={index}

                            >
                                <div className="flex ">
                                    <div className="w-10 h-10 bg-gradient-to-r from-cs_blue to-cs_green flex justify-center items-center rounded-full text-2xl ">
                                        <img
                                            src={item.icon}
                                            alt=""
                                            className=" w-2/3 h-auto filter invert "
                                        />
                                    </div>{" "}
                                    <h3 className=" text-3xl font-bold ml-6 ">{item.title} </h3>
                                </div>
                                <p className=" my-8">{item.description}</p>

                                <ul className=" flex flex-wrap gap-4 ">
                                    {item.buttons.map((item, index) => (
                                        <button
                                            key={index}
                                            className="relative cursor-default py-2 px-6 rounded-full text-base font-semibold 
                                            text-white transition-all z-40
                                        before:content-[''] before:absolute before:inset-[-1px] before:-z-40 before:rounded-full 
                                        before:bg-gradient-to-tr before:from-cs_blue before:to-cs_green before:p-[2px] 
                                        before:transition-all
                                        after:content-[''] after:absolute after:inset-[0] after:bg-cs_theme_black after:hover:bg-transparent  after:-z-20 after:rounded-full
                                        "
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="card-image w-2/4">
                        <div className="image-wrapper w-auto h-[460px]">
                            <img src={serv1} alt="" className="w-full h-full" />
                            <img src={serv2} alt="" className="w-full h-full" />
                            <img src={serv3} alt="" className="w-full h-full" />
                            <img src={serv4} alt="" className="w-full h-full" />
                            <img src={serv5} alt="" className="w-full h-full" />
                            <img src={serv6} alt="" className="w-full h-full" />
                            <img src={serv7} alt="" className="w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyServicesSec;
