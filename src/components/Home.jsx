import React, { Component } from 'react'
import './Home.css';
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default class Home extends Component {
    componentDidMount = () => {
        window.distort()
        window.typeit()
        window.mouseFollow()
    }
    makeCircleBigger = () => {
        document.getElementById("mouse-circle").style.height = "70px"
        document.getElementById("mouse-circle").style.width = "70px"
        document.getElementById("mouse-circle").style.margin = "-30px 0px 0px -30px"
    }
    makeCircleSmall = () => {
        document.getElementById("mouse-circle").style.height = "30px"
        document.getElementById("mouse-circle").style.width = "30px"
        document.getElementById("mouse-circle").style.margin = "-20px 0px 0px -20px"
    }
    render() {
        return (
            <div className="home">
                <div className="left">
                    <p id="element"></p>
                </div>
                <div className="center"></div>
                <div className="right">
                    <a href="https://www.instagram.com/its.me.cypher/" onMouseOver={this.makeCircleBigger} onMouseOut={this.makeCircleSmall}><BsInstagram /></a>
                    <a href="https://github.com/AaryanShaikh" onMouseOver={this.makeCircleBigger} onMouseOut={this.makeCircleSmall}><BsGithub /></a>
                    <a href="https://www.linkedin.com/in/aaryan-shaikh-019034181/" onMouseOver={this.makeCircleBigger} onMouseOut={this.makeCircleSmall}><BsLinkedin /></a>
                    <a href="mailto:aayanshaikh27638@gmail.com" onMouseOver={this.makeCircleBigger} onMouseOut={this.makeCircleSmall}><MdEmail /></a>
                </div>
            </div>
        )
    }
}
