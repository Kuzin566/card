import React from 'react';
import { LuLightbulb } from "react-icons/lu";
import { Tooltip } from 'react-tooltip';

import pytest from './icons/pytest.svg';
import playwright from './icons/playwright.svg';
import python from './icons/python.svg';
import grafana from './icons/grafana.svg';
import kibana from './icons/kibana.svg';
import postman from './icons/postman.svg';
import jmeter from './icons/jmeter.svg';
import charles from './icons/charles.svg';
import linux from './icons/linux.svg';
import powershell from './icons/powershell.svg';
import bash from './icons/bash.svg';
import docker from './icons/docker.svg';
import selenium from './icons/selenium.svg';
import mongodb from './icons/mongodb.svg';
import redis from './icons/redis.svg';
import pg from './icons/pg.svg';
import ch from './icons/ch.svg';
import css from './icons/css.svg';
import html from './icons/html.svg';
import js from './icons/js.svg';
import react from './icons/react.svg';
import gitlab from './icons/gitlab.svg';

import '@dotlottie/react-player/dist/index.css';

const SkillIcon = ({ src, alt }) => (
    <>
        <img
            src={src}
            alt={alt}
            data-tooltip-id="tooltip"
            data-tooltip-content={alt}
            className='inline md:pb-3 md:mr-1 transition-transform duration-200 hover:scale-110 cursor-pointer'
            style={{ width: 45, height: 45 }}
        />
    </>
);

const Skills = () => {
    return (
        <div className='md:p-22 md:pt-24 p-8 flex justify-between md:pb-22 md:px-40 md:h-full select-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] bg-[white] md:mt-0 mt-6 pt-16'>
            <div>
                <div className='md:w-6/12'>
                    <div className='md:w-28 md:h-7 rounded-full w-20 h-5 bg-black md:px-1 space-x-3.5 mb-6'>
                        <LuLightbulb className='md:inline-block text-white font-semibold relative md:left-1.5 hidden scale-50 md:scale-100 md:-top-px' size={22} />
                        <span className='text-white font-poppins text-xs md:text-xs font-normal md:font-medium relative md:-left-0 -left-0 md:-top-0 -top-1 md:pb-0'>My Skills</span>
                    </div>
                </div>

                <div>
                    <h1 className='font-poppins text-4xl font-medium'>My <span className='bg-gradient-to-r from-[#833be7cb] to-[#5521c5] bg-clip-text text-transparent'>QA</span><br className='md:block hidden'/> Experience/<span className='md:hidden block'> </span><span>Skills.</span></h1>
                    <hr className='md:w-44 w-32 md:mb-0 mb-4 h-3 mt-3 md:ml-0 lg:mt-4 bg-gradient-to-r from-[#bf77eced] to-[#c580f0c8]'></hr>
                </div>

                <div className='flex'>
                    <h1 className='md:font-semibold font-bold md:text-2xl'>AQA</h1>
                    <SkillIcon src={python} alt="Python" />
                    <SkillIcon src={playwright} alt="Playwright" />
                    <SkillIcon src={pytest} alt="Pytest" />
                    <SkillIcon src={selenium} alt="Selenium" />
                </div>

                <div className='flex'>
                    <h1 className='md:font-semibold font-bold md:text-2xl'>Logs</h1>
                    <SkillIcon src={grafana} alt="Grafana" />
                    <SkillIcon src={kibana} alt="Kibana" />
                </div>

                <div className='flex'>
                    <h1 className='md:font-semibold font-bold md:text-2xl'>QA Tools</h1>
                    <SkillIcon src={postman} alt="Postman" />
                    <SkillIcon src={jmeter} alt="JMeter" />
                    <SkillIcon src={charles} alt="Charles Proxy" />
                </div>

                <div className='flex'>
                    <h1 className='md:font-semibold font-bold md:text-2xl'>Other</h1>
                    <SkillIcon src={linux} alt="Linux" />
                    <SkillIcon src={powershell} alt="PowerShell" />
                    <SkillIcon src={bash} alt="Bash" />
                </div>

                <div className='flex'>
                    <h1 className='md:font-semibold font-bold md:text-2xl'>Databases</h1>
                    <SkillIcon src={pg} alt="PostgreSQL" />
                    <SkillIcon src={ch} alt="ClickHouse" />
                    <SkillIcon src={redis} alt="Redis" />
                    <SkillIcon src={mongodb} alt="MongoDB" />
                </div>

                <div className='flex'>
                    <h1 className='md:font-semibold font-bold md:text-2xl'>Web</h1>
                    <SkillIcon src={html} alt="HTML" />
                    <SkillIcon src={css} alt="CSS" />
                    <SkillIcon src={js} alt="JavaScript" />
                    <SkillIcon src={react} alt="React" />
                </div>

                <div className='flex'>
                    <h1 className='md:font-semibold font-bold md:text-2xl mr-2.5'>CI/CD</h1>
                    <SkillIcon src={docker} alt="Docker" />
                    <SkillIcon src={gitlab} alt="GitLab" />
                </div>

                {/* Tooltip */}
                <Tooltip id="tooltip" place="top" effect="solid" />
            </div>
        </div>
    );
};

export default Skills;
