import React from 'react'
import logo from "../../image/logo.png"
import "./footer.scss"

function Footer() {


    return (
        <>
            <div className='main_footer_container'>
                <div className='footer_logo'>
                    <img className='logo' src={logo} type="image/png/" />
                </div>
                <div className='footer_copyright'>
                    <p> <span>&copy;</span> Abhishek Chapagai, 2022, Nepal.</p>
                </div>
            </div>
        </>
    )
}

export default Footer