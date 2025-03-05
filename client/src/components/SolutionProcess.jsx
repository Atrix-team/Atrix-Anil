import React, { useEffect, useRef, useState } from 'react'
import icon from '../assets/icon1.svg'
import { FaPlus } from "react-icons/fa";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";


const SolutionProcess = () => {

    const ProcessCardsData = [
        {
            title: "Discovery and Consultation.",
            description: "Understand the client's goals, challenges, and requirements through initial meetings and consultations.",
            image: "https://atrixitsolutions.com/wp-content/uploads/2024/08/icon1.svg",
            points_list: ["Client Meeting.", "Needs Assessment", "Strategic Planning."]
        },

        {
            title: "Design and Architecture.",
            description: "If applicable, create a user-centric design for software interfaces, websites, or applications.",
            image: "https://atrixitsolutions.com/wp-content/uploads/2024/08/icon2.svg",
            points_list: ["Wireframing", "Design Mockups.", "Implementation."]
        },
        {
            title: "Development",
            description: "Understand the client's goals, challenges, and requirements through initial meetings and consultations.",
            image: "https://atrixitsolutions.com/wp-content/uploads/2024/08/icon3.svg",
            points_list: ["Testing Plans.", "Bug Fixing.", "Agile Development.", "Agile Development."]
        },
        {
            title: "Documentation & Launch.",
            description: "Understand the client's goals, challenges, and requirements through initial meetings and consultations.",
            image: "https://atrixitsolutions.com/wp-content/uploads/2024/08/icon4.svg",
            points_list: ["Testing Plans.", "Bug Fixing.", "Agile Development.", "Agile Development."]
        }
    ]


    const [stepNum, setStepNum] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const children = document.querySelectorAll(".process-card");
            let activeStep = 0;
            children.forEach((child, index) => {
                const rect = child.getBoundingClientRect();
                if (rect.top <= 130) {
                    activeStep = index + 1;
                }
            });
            setStepNum(activeStep);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    useEffect(() => {
        const circleAnimation = () => {
            let circleWrapper = document.getElementById('circle-wrapper')
            let cardWrapper = document.getElementById('process-cards')
            let allCardValues = cardWrapper.getBoundingClientRect();
            let cardHeight = allCardValues.height
            let currectPos = allCardValues.top
            const percentage = -(Math.floor((currectPos / cardHeight) * 100))
            circleWrapper.style.background = `conic-gradient(#3FA4D7 ${percentage + 20}%, #1A1A1A 0%)`;
        }
        window.addEventListener("load", circleAnimation)
        window.addEventListener("scroll", circleAnimation)

        return () => {
            window.removeEventListener("load", circleAnimation);
            window.removeEventListener("scroll", circleAnimation);
        };

    }, []);


    return (
        <div className='bg-cs_theme_black text-white py-16 '>
            <div className='container mx-auto '>
                <div className=" headinSec md:flex">
                    <div className=' md:max-w-[300px] md:w-2/6 ' >
                        <h2 className='font-bold leading-none md:text-end  '>Our Solution <span className=' font-normal '> Proccess</span></h2>
                    </div>
                    <div className='hidden md:block  pt-20 md:flex-1 md:px-7 md:w-2/6'>
                        <img src="./src/assets/border-line.svg" alt="" />
                    </div>
                    <div className=' md:w-2/6 mt-5 md:pt-20 md:pl-8 text-cs_white md:text-start '>
                        <p>Digital agencies can vary in size and specialization. Some may focus on specific niches, such as healthcare or e-commerce, while others may offer a comprehensive.</p>
                    </div>
                </div>


                <div className='flex mt-20 md:flex-row flex-col' id='testing'>
                    {/* steps animate circle */}
                    <div id='circle-sec' className=" hidden  process-circle md:w-1/2 md:border-r border-gray-500 md:flex justify-center mb-10 " >
                        <div id='circle-wrapper' className=' circle-wrapper h-40 w-40 md:h-[340px] md:w-[340px]  rounded-[50%] border-[4px] border-[#2F2F2F] flex justify-center items-center sticky top-[100px]'>
                            <div className='circle-content h-36 w-36  md:h-[320px] md:w-[320px] bg-[#1A1A1A] rounded-[50%] flex flex-col justify-center items-center  '>
                                <p className=' text-xl md:text-xl font-bold text-white/50 ' >Step</p>
                                <p className='text-2xl md:text-5xl font-bold '>{stepNum}/4</p>
                            </div>
                        </div>
                    </div>
                    {/* steps cards  */}

                    <div id='process-cards' className="process-cards md:w-1/2  md:pl-28 ">
                        {ProcessCardsData.map((content, index) => (
                            <div key={index} data={index} className="process-card  pb-12 bg-cs_theme_black min-h-[350px] sticky top-24 ">
                                <div className='process-icon'>
                                    <img src={content.image} alt="" className=' filter invert brightness-0 ' />
                                </div>
                                <div className='md:hidden w-28  my-6 py-1 bg-cs_black rounded-full flex justify-center items-center font-bold' >
                                    <span className='text-base flex items-center gap-1'  ><HiOutlineSwitchHorizontal /> Step 0{index + 1}</span>

                                </div>
                                <h3 className=' text-4xl font-semibold md:my-7 '> {content.title} </h3>
                                <p className=' mt-4 text-cs_white '>{content.description}</p>
                                <ul className=' mt-4 text-cs_white '>
                                    {content.points_list.map((point, index) => (
                                        <li key={index} className=' mt-2 flex items-center gap-3'><FaPlus className=' text-xs' /> {point} </li>
                                    ))}
                                </ul>
                            </div>)
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SolutionProcess