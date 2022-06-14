import React from 'react'
import "./contact.scss"
import contactIMG from '../../image/contact.jpg'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// toast.configure();

// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

function Contact() {

    const initialValues = {
        fullname: '',
        email: '',
        message: '',
    }

    const formValidation = Yup.object().shape({
        fullname: Yup.string().required("Required *").max(25, "Too Long !").min(2, 'Too short!'),
        email: Yup.string().required('Required *').email("Please enter a valid email address !!"),
        message: Yup.string().required("Required *").max(800, "Max character (800) reached").min(30, "Too short !"),
    });

    const handleSubmit = (values) => {
        // e.preventDefault();
        // toast.success('Update Successful', {
        //     position: "bottom-right",
        //     autoClose: 5000,
        //     hideProgressBar: true,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        // });

    }
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
                        <Formik initialValues={initialValues} onSubmit={(values => handleSubmit(values))} validationSchema={formValidation}>
                            <Form className='form'>
                                <p className='form_error_message'><ErrorMessage name="fullname" /></p>
                                <Field className='form_input' type='text' name="fullname" placeholder='Your Fullname' /><br></br><br></br>
                                <p className='form_error_message'><ErrorMessage name="email" /></p>
                                <Field className='form_input' type='email' name="email" placeholder='Your Email' /><br></br><br></br>
                                <p className='form_error_message'><ErrorMessage name="message" /></p>
                                <Field className='message_input' as='textarea' name="message" placeholder='Your Message' rows={6} /><br></br><br></br>
                                <button type='submit'><span class="material-symbols-outlined">send</span>&nbsp;SEND</button><br></br>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact