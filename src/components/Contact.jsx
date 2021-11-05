import React, { Component } from 'react'
import "./Contact.css"
import emailjs from 'emailjs-com';

export default class Contact extends Component {
    constructor() {
        super();
        this.state = {
            sentText: "Send"
        }
    }
    sentAnimation = () => {
        this.setState({
            sentText: ""
        })
        document.getElementById("submitBtn").classList.add("sent")
        document.getElementById("submitBtn").style.height = "2vh"
        setTimeout(() => {
            document.getElementById("submitBtn").style.height = "7vh"
            this.setState({
                sentText: "Send"
            })
        }, 5000)
    }
    makeCircleInvert = () => {
        document.getElementById("mouse-circle").style.backdropFilter = "invert(1)"
        document.getElementById("mouse-circle").style.height = "220px"
        document.getElementById("mouse-circle").style.width = "220px"
        document.getElementById("mouse-circle").style.margin = "-70px 0px 0px -70px"
    }
    remCircleInvert = () => {
        document.getElementById("mouse-circle").style.backdropFilter = "invert(0)"
        document.getElementById("mouse-circle").style.height = "30px"
        document.getElementById("mouse-circle").style.width = "30px"
        document.getElementById("mouse-circle").style.margin = "-20px 0px 0px -20px"
    }
    formSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_s2e5s9s', 'template_kg67rx7', e.target, 'user_7diN9GjEZcKUAss11a2iN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        this.sentAnimation()
    }
    render() {
        return (
            <div className="contact">
                <div className="top">
                    <h1>I'd <span>love</span> to hear from you!</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src="https://raw.githubusercontent.com/AaryanShaikh/badportfolio/main/public/contact4.gif" alt="" onMouseOver={this.makeCircleInvert} onMouseOut={this.remCircleInvert} />
                    </div>
                    <div className="right">
                        <form onSubmit={this.formSubmit}>
                            <div className="grid">
                                <input type="text" name="fname" placeholder="First Name" />
                                <input type="text" name="lname" placeholder="Last Name" />
                                <input type="text" name="email" placeholder="Email" />
                                <input type="text" name="phno" placeholder="Phone Number" />
                            </div>
                            <textarea name="msg" placeholder="Pour your thoughts here..." ></textarea>
                            <button type="submit" id="submitBtn"><span>{this.state.sentText}</span></button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
