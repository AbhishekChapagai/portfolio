import React from 'react'
import "./contact.scss"
import contactIMG from '../../image/contact.jpg'
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Contact = () => {
    return (
        <>
            <div className='main_contact_container' id='contact'>
                <div className='contact_container' >
                    <div className='contact_container_text'>
                        <p data-aos="fade-left" className='contact_text'>Contact me</p>
                        <p>Hello,<br></br><br></br>Want to collaborate?<br></br>If you have any queries realted to work or if you just want to
                            talk, feel free to connect with me via email or other social media platforms.<br></br><br></br>
                            Always open for suggestion !</p>
                        <p className='social_media_icons'>
                            <a href='https://www.instagram.com/abhishek_chapagai/' target='_blank'><span className="instagram"><i class="fab fa-instagram-square" ></i></span></a>
                            <a href='https://www.facebook.com/abhishek.chapagain.3/' target='_blank'><span className="facebook"><i class="fab fa-facebook-square"></i></span></a>
                            <a href='https://www.linkedin.com/in/abhishek-chapagai-121210216/' target='_blank'><span className="linkedin"><i class="fab fa-linkedin" ></i></span></a>
                            <a href='https://github.com/AbhishekChapagai' target='_blank'><span className="github"><i class="fab fa-github-square" ></i></span></a>
                        </p>
                    </div>
                    <div className='contact_form'>
                        <form>
                            <input type='text' placeholder='Your Fullname' /><br></br><br></br>
                            <input type='email' placeholder='Your Email' /><br></br><br></br>
                            <textarea placeholder='Your Message' rows={6}></textarea><br></br><br></br>
                            <button><span class="material-symbols-outlined">send</span>&nbsp;SEND</button><br></br>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact