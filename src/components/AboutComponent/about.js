import React, { useEffect } from 'react'
import "./about.scss"
import Aos from "aos";
import "aos/dist/aos.css"
import { useState } from "react"
import MyImage from '../../image/myimage.png'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const About = () => {


    // For animate on scroll
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <>
            <div className='main_about_container container-fluid' id='about'>
                <div className='row'>
                    {/* <div className='about_text col'>
                        <p data-aos="zoom-in">About me</p>
                    </div> */}
                </div>
                <div className='about_main_container row'>
                    <div className='about_container container-fluid'>
                        <div className='about_me row'>
                            <div className='about_me_image col-sm-6' data-aos="fade-left">
                                <img src={MyImage} type="image/jpg" />
                            </div>
                            <div className='about_me_details col-sm-6' data-aos="fade-up" data-aos-delay="300">
                                <p>" Hello! I am <span className="about_me_details_span">Abhishek Chapagai</span> , a passonate frontend web developer based in Nepal,
                                    looking for work around the globe. I have completed my bachelors degree in Information Technology from Softwarica College of IT & E-commerce.
                                    I have good knowledge in web design and development. "</p>
                                <div className='my_skill'>
                                    <p>my skills</p>
                                    <div className='skill_p'>
                                        <p data-aos="fade-left" data-aos-delay="300">HTML</p>
                                        <p data-aos="fade-left" data-aos-delay="500">CSS</p>
                                        <p data-aos="fade-left" data-aos-delay="700">JavaScript</p>
                                        <p data-aos="fade-left" data-aos-delay="900">Bootstrap</p>
                                        <p data-aos="fade-left" data-aos-delay="1100">ReactJS</p>
                                        <p data-aos="fade-left" data-aos-delay="1300">SCSS</p>
                                        <p data-aos="fade-left" data-aos-delay="1500">GIT</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <div className='container-fluid svg_container'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 140"  className='row'><path fill="#0b0c11" fill-opacity="1" d="M0,96L288,128L576,64L864,64L1152,0L1440,128L1440,0L1152,0L864,0L576,0L288,0L0,0Z"></path></svg>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default About