import React from 'react'
import './ProjectDescription.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import about from '../image/about.jpg'
import contact from '../image/contact.jpg'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/footer';


const ProjectDescription = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };

    return (
        <>
            <div className='project_description_heading'>
                <p>Project details</p>
            </div>

            <div className='description_main_container'>
                <div className='project_image_slider'>
                    <Slider {...settings}>
                        <div className='project_image'>
                            <img src={about} />
                        </div>
                        <div className='project_image'>
                            <img src={about} />
                        </div>
                        <div className='project_image'>
                            <img src={contact} />
                        </div>
                    </Slider>
                </div>
                <div className='project_description'>
                    <p className='project_title'>project title</p>
                    <p className='project_details'>
                        Esse exercitation ullamco mollit pariatur id veniam irure reprehenderit culpa. Minim sint enim id ex dolor et veniam irure tempor pariatur esse Lorem. Aliqua dolor culpa voluptate quis aute ipsum labore eiusmod veniam laborum veniam culpa eiusmod est. Sit tempor anim labore magna sint eiusmod adipisicing occaecat mollit pariatur. Mollit ullamco velit culpa occaecat aliquip cupidatat.
                    </p><br></br>
                    <p className='github'>
                        <span className='github_icon'><i class="fab fa-github"></i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className='github_link'>Open github link</span>
                    </p>

                    <p className='youtube'>
                        <span className='youtube_icon'><i class="fab fa-youtube"></i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className='youtube_link'>Open youtube link</span>
                    </p>

                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default ProjectDescription