import React, { Component } from 'react'
import './About.css';
import { GiBandit } from "react-icons/gi";
import { HiCode } from "react-icons/hi";
import { BsFillPhoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";

export default class About extends Component {
    componentDidMount = () => {
        window.mouseFollow()
        window.textMorph()
    }
    makeImgColor = () => {
        document.getElementById("mouse-circle").style.border = "2px solid #2eac68"
        document.getElementById("mouse-circle").style.background = "transparent"
        document.getElementById("mouse-circle").style.backdropFilter = "grayscale(1)"
        document.getElementById("mouse-circle").style.height = "220px"
        document.getElementById("mouse-circle").style.width = "220px"
        document.getElementById("mouse-circle").style.margin = "-70px 0px 0px -70px"
    }
    remImgColor = () => {
        document.getElementById("mouse-circle").style.border = "2px solid #fff"
        document.getElementById("mouse-circle").style.backdropFilter = "grayscale(0)"
        document.getElementById("mouse-circle").style.height = "30px"
        document.getElementById("mouse-circle").style.width = "30px"
        document.getElementById("mouse-circle").style.margin = "-20px 0px 0px -20px"
    }
    render() {
        return (
            <div className="about">
                <div className="container">
                    <div className="left">
                        <img src="https://raw.githubusercontent.com/AaryanShaikh/badportfolio/main/public/about.png" alt="" onMouseOver={this.makeImgColor} onMouseOut={this.remImgColor} />
                    </div>
                    <div className="right">
                        <h1>About Me</h1>
                        <p>I am Aaryan Shaik. I am a simple, creative, enthusiastic and fun-loving person.
                            I love exploring new libraries and making web more and more interactive!!.
                        </p>
                        <p className="exp">I've Experience in <span>Html</span>, <span>Css</span>, <span>JavaScript</span> & <span>Photoshop</span>.</p>
                        <div className="morph">
                            <p className="no-padding">I've Experience in</p>
                            <div id="morph-container">
                                <span id="text1"></span>
                                <span id="text2"></span>
                            </div>
                            <svg id="filters">
                                <defs>
                                    <filter id="threshold">
                                        <feColorMatrix in="SourceGraphic"
                                            type="matrix"
                                            values="1 0 0 0 0
									0 1 0 0 0
									0 0 1 0 0
									0 0 0 255 -140" />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                        <div className="details">
                            <p><GiBandit />&nbsp; Aaryan Shaik</p>
                            <p><BsFillPhoneFill />&nbsp;+91 7447525784</p>
                            <p><MdLocationPin />&nbsp;India, Goa, Baina</p>
                            <p><HiCode />&nbsp; Coding, Anime</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
