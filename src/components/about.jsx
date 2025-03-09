import React from 'react';
import {LuUser} from "react-icons/lu";
import {GoDot} from "react-icons/go";

const About = () => {
    return (
        <div
            className='md:p-22 md:pt-24 md:pb-22 md:px-40 md:h-full select-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] bg-[white] p-8 md:flex justify-normal space-x-28 md:mt-0 mt-6 pt-16'>
            <div className='md:w-6/12'>
                <div
                    className='md:w-28 md:h-7 rounded-full w-20 h-5 bg-black md:px-1  mb-6 flex items-center justify-center'>
                    <LuUser className='text-white font-semibold scale-75 md:scale-100' size={20}/>
                    <span className='text-white font-poppins text-xs md:text-sm font-medium ml-0'>About Me</span>
                </div>
                <div className='md:pt-5'>
                    <h1 className='md:text-5xl text-4xl md:font-medium font-semibold'>QA <br className='md:hidden'/>
                        <span
                            className='bg-gradient-to-r from-[#833be7cb] to-[#5521c5] bg-clip-text text-transparent md:w-48'>Engineer</span>
                        <br/>
                        <span className='md:text-4xl text-3xl font-poppins font-normal md:font-medium'>Based in Saint Petersburg.</span>
                    </h1>
                    <hr className='md:w-44 w-32 md:mb-0 mb-4 h-3 mt-3 bg-gradient-to-r from-[#c580f0ed] to-[#c580f0c8]'></hr>
                </div>
                <div className='md:w-12/12 md:mt-10'>
                    <p className='font-poppins text-justify text-lg'>I am a QA engineer specializing in manual and
                        automated testing. Passionate about ensuring high-quality products, finding edge cases, and
                        improving development processes.</p>
                </div>
            </div>
            <div className='relative md:-left-0 -left-28 md:pt-4 pt-12'>
                <div className='md:w-96'>
                    <h1 className='text-3xl font-poppins font-medium md:ml-10'>Languages</h1>
                    <hr className='md:w-64 w-32 md:mb-0 mb-2 h-1 mt-3 bg-gradient-to-r from-[#c580f0ed] to-[#c580f0c8]'></hr>
                    <ul className='md:ml-10 space-y-2 text-xl'>
                        <li><GoDot className='inline'/> Russian (Native)</li>
                        <li><GoDot className='inline'/> English (Fluent)</li>
                    </ul>
                </div>
                <div className='md:mt-3'>
                    <h1 className='text-3xl font-poppins font-medium md:ml-10'>In Dev</h1>
                    <hr className='md:w-64 w-32 md:mb-0 mb-4 h-1 mt-3 bg-gradient-to-r from-[#c580f0ed] to-[#c580f0c8]'></hr>
                    <p className='md:ml-10 text-xl'><GoDot className='inline'/> In Development</p>
                </div>
            </div>
        </div>
    );
};

export default About;
