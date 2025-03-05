import React from 'react'
import CsButton from './CsButton'


const AboutSec = () => {
    return (
        <section className=' bg-cs_theme_black py-6 md:py-12'>
            <div className="container mx-auto  md:px-0  md:mt-12 ">
                <div >
                    <h2 className=' text-5xl md:text-9xl font-bold text-transparent relative md:leading-4 leading-normal md:text-left ' style={{ WebkitTextStroke: "1px white" }}>About Us</h2>
                </div>
                <div className='flex flex-col md:flex-row '>
                    <div className="w-full md:min-w-[80%]  bg-slate-100 md:-ms-60   mt-5 md:mt-0 ">
                        <img src="..\src\assets\about-sec.jpg" alt="" className=' h-[300px] md:h-[600px] w-full object-cover' />
                    </div>

                    <div className=" mt-8 md:mt-0  w-full  md:min-with-[40%] flex flex-col justify-center  text-white md:-ml-20 ">
                        <h4 className=' text-sm  uppercase font-bold text-cs_white tracking-widest mb-2'>Our Vision</h4>
                        <h3 className='md:text-4xl font-bold '>Unlock Revenue Growth for Your Business</h3>
                        <h5 className='pt-3 pb-9 mb-8 border-b  border-gray-600 text-2xl '>Our goal is to make it as easy as possible for you to walk away with the solution that suits your needs perfectly.</h5>
                        <p className=' text-cs_white mb-6'>Through our years of experience, we’ve also learned that while each channel has its own set of advantages, they all work best when strategically paired with other channels. This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service.</p>
                        <div>
                            <CsButton mybtn={"Learn More"} ></CsButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSec