import React from 'react'
import CsButton from './CsButton'
import { FiArrowUpRight } from "react-icons/fi";
import PortfolioSlider from './PortfolioSlider';


const PortfolioSec = () => {
    return (
        <section className='bg-cs_theme_black text-white overflow-hidden pb-16 md:py-16'>
            <div className='container mx-auto '>
                <div className="headinSec flex justify-between flex-col md:flex-row  ">
                    <div className=' md:max-w-[235px]  ' >
                        <h5 className='md:text-end text-center '>Our Portfolio</h5>
                        <h2 className='leading-none font-bold md:text-end text-center'>Our Work</h2></div>
                    <div className='hidden md:block pt-12 flex-1 ps-10'> <img src="./src/assets/border-line.svg" alt="" /> </div>
                    <div className=' md:max-w-[330px] md:pl-9 text-cs_white flex flex-col items-end '>
                        <div className='order-2 md:order-1 mt-4 md:mt-0 self-center  md:self-end ' ><CsButton mybtn={"View All Portfolio"} /></div>

                        <p className='text-center md:text-end mt-4 md:mt-7 order-1 md:order-2 '>Offer a wide range of services to help businesses establish and enhance their online presence.</p></div>
                </div>
                {/* portfolio card  slider section  */}
                <div className=' mt-16'>
                    <PortfolioSlider ></PortfolioSlider>
                </div>
            </div>
        </section >
    )
}

export default PortfolioSec