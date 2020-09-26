import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';

import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <h1>Abhijith <mark>Purohit</mark></h1>
            <ReactTypingEffect className="typingeffect" align="center" text={['A Full Stack Developer','Interested to build something different and New that would make a tangible impact on world!']} speed={100} eraseDelay={900}/>
            <div className="hr_line"><div className="hr_inner"></div></div>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    