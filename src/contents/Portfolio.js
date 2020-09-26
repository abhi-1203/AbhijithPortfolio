import React, { Component } from 'react';
import project1 from '../img/project1.jpg';


class Portfolio extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Work</h1>
            <div className="hr_line line2"><div className="inner2 inner3"></div></div>
            <div class="port_out port1"><div class="port_in"><a href="https://github.com/abhi-1203/designs"><img src={project1} className="po1"></img></a></div></div>
            </div>
            )
        }
    }
    
export default Portfolio
    