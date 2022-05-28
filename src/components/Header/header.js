import React, { useState } from 'react';
import "./header.scss";
import { Link } from 'react-scroll';
import Logo from '../../image/logo.png';
import { Container, Row, Col } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../bootstrap/dist/css/bootstrap.min.css';




function Navbar() {
    const [navbar, setNavbar] = useState(false);

    // change navbar color to semi-transparent when scrolling along Y-AXIS the height of the navbar
    const changeBackground = () => {
        if (window.scrollY >= 1050) {
            setNavbar(true);
        }
        else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <>

            <div className={navbar ? 'mainHeader container-fluid  active' : 'mainHeader container-fluid'}>
                <div className='mainRow row'>
                    {/* <div className="nav_logo col-sm-3">
                        <img src={Logo} type="image/png" alt='logo' />
                    </div> */}
                    <div className="nav_menu col-sm-9" >
                        <div className='nav_menu_list col-sm-12' id='nav_menu_list'>
                            <ul className="nav_ul">
                                <Link to='greetings' smooth={false} spy={true} offset={-73} activeClass="active" id='nav_link'> <li className='home_li'><span id="li_text">Home</span></li></Link>
                                <Link to='about' smooth={false} spy={true} offset={-73} activeClass="active" id='nav_link'><li className='home_li'><span id="li_text">About</span></li></Link>
                                {/* <Link to='skill' smooth={false} spy={true} offset={-73} activeClass="active" id='nav_link'><li className='home_li'><span id="li_text">My Skill</span> </li></Link> */}
                                <Link to='work' smooth={false} spy={true} offset={-73} activeClass="active" id='nav_link' ><li className='home_li'><span id="li_text">My work</span></li></Link>
                                <Link to='contact' smooth={false} spy={true} offset={-73} activeClass="active" id='nav_link'><li className='home_li'><span id="li_text">Get in touch</span></li></Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar