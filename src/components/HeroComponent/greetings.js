import React, { useEffect, useState } from 'react'
import "./greetings.scss"
import greetIMG from '../../image/greetIMG.png';
import Aos from "aos";
import "aos/dist/aos.css"


function Greet() {


    // For animate on scroll
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <>
            <div className='main_landing_container' id='greetings'>
                <div className='landing_container'>
                    
                    <div className='greetings_container'>

                        <div className='greetings' data-aos="zoom-in">
                            <div className='greet_img'>
                                <img id="greetIMG" src={greetIMG} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
export default Greet