import React, { Component } from 'react'
import './Projects.css'
import Data from "../res/projects.json"

export default class Projects extends Component {
    constructor() {
        super();
        this.state = {
            type: "all"
        }
    }
    filterType = (e) => {
        this.setState({
            type: e.target.value
        })
    }
    makeCircleBeat = () => {
        document.getElementById("mouse-circle").classList.add("heart-beat")
    }
    remCircleBeat = () => {
        document.getElementById("mouse-circle").classList.remove("heart-beat")
    }
    render() {
        return (
            <div className="projects">
                <h1><span>{
                    (this.state.type === "all") ?
                        Data.length
                        :
                        Data.filter((proj) => {
                            return proj.type === this.state.type
                        }).length
                }</span> Projects found</h1>
                <div className="btns">
                    <button className={(this.state.type === "all") ? "active" : ""} value="all" onClick={this.filterType}>All</button>
                    <button className={(this.state.type === "react") ? "active" : ""} value="react" onClick={this.filterType}>React</button>
                    <button className={(this.state.type === "vanilla") ? "active" : ""} value="vanilla" onClick={this.filterType}>Vanilla</button>
                    <button className={(this.state.type === "unity") ? "active" : ""} value="unity" onClick={this.filterType}>Unity</button>
                    <button className={(this.state.type === "android") ? "active" : ""} value="android" onClick={this.filterType}>Android</button>
                </div>
                <div className="projects-cont">
                    {
                        (this.state.type === "all") ?
                            Data.map((proj) => {
                                return <div className="project" key={proj.id} onMouseOut={this.remCircleBeat} onMouseOver={this.makeCircleBeat}>
                                    <h1>{proj.title}</h1>
                                    <p>{proj.desc}</p>
                                    <img src={proj.img} alt="" />
                                </div>
                            })
                            :
                            Data.filter((proj) => {
                                return proj.type === this.state.type
                            })
                                .map((proj) => {
                                    return <div className="project" key={proj.id} onMouseOut={this.remCircleBeat} onMouseOver={this.makeCircleBeat}>
                                        <h1>{proj.title}</h1>
                                        <p>{proj.desc}</p>
                                        <img src={proj.img} alt="" />
                                    </div>
                                })
                    }
                </div>
            </div>
        )
    }
}
