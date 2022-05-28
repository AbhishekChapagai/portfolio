import React from 'react'
import "./project.scss"
import Aos from "aos";
import "aos/dist/aos.css"
import workImage from '../../image/project.png'
import { Link } from 'react-router-dom';

const Project = () => {


    return (
        <>
            <div className='main_work_container' id='work'>
                <div className='work_text'>
                    <p data-aos="zoom-in">My Projects</p>
                </div>
                <div className='work_container'>
                    <div className='work_card'>
                        <div className='work_card_image'>
                            <img src={workImage} alt='project display image' />
                        </div>
                        <p className='project_title'>Space Invader</p>
                        <p>This is a product that i made using HTML, CSS, and JavaScript and ReactJS.
                            The main purpose of this app is to provide real time weather data of your location.
                            The main purpose of this app is to provide real time weather data of your location.
                            The main purpose of this app is to provide real time weather data of your location.
                        </p>
                        <Link to='/projectDescription'><button className='project_button'>project discription</button></Link>
                    </div>
                    <div className='work_card'>
                        <div className='work_card_image'>
                            <img src={workImage} alt='project display image' />
                        </div>
                        <p className='project_title'>Space Invader</p>
                        <p>This is a product that i made using HTML, CSS, and JavaScript and ReactJS.
                            The main purpose of this app is to provide real time weather data of your location.
                            The main purpose of this app is to provide real time weather data of your location.
                            The main purpose of this app is to provide real time weather data of your location.
                        </p>
                        <Link to='/projectDescription'><button className='project_button'>project discription</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project