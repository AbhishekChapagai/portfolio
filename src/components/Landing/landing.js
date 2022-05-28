import React from "react";
import { Component } from "react";
import About from "../AboutComponent/about";
import Footer from "../Footer/footer";
import Contact from "../GetInTouchComponent/contact";
import Navbar from "../Header/header";
import Greet from "../HeroComponent/greetings";
import Project from "../WorkComponent/projects";

class Main extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Greet />
                <About />
                <Project />
                <Contact />
                <Footer />
            </>
        )
    }
}
export default Main