import React from 'react'
import style from "./LogosMarquee.module.css"
import { assertsImages } from '../assets/assets.js'


const LogosMarquee = () => {
    return (
        <section className='  bg-cs_theme_black text-cs_white pt-14 pb-7 md:pt-24 md:pb-12'>
            <div className="container mx-auto text-center px-4">
                <p className=' text-xl font-bold'>OVER 1K+ SOFTWARE BUSINESSES GROWING WITH Apatrix IT Solutions</p>
            </div>
            <div className={style.marquee}>
                <div className={style.marqueeContent}>
                    {Object.values(assertsImages).map((img, i) => (
                        <div key={i} className={style.marqueeImg}>
                            <img src={img} alt="logos" />
                        </div>
                    ))}
                </div><div className={style.marqueeContent}>
                    {Object.values(assertsImages).map((img, i) => (
                        <div key={i} className={style.marqueeImg}>
                            <img src={img} alt="logos" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LogosMarquee