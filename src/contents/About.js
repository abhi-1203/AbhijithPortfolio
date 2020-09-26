import React, { Component } from 'react';


class About extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">About Me</h1>
            <div className="hr_line line2"><div className="inner2"></div></div>
            <h2 className="abouthead">Abhijith <mark className="mark2">Purohit</mark></h2>
            <p>Full Stack Developer</p>
            <br></br>
            <p className="p10">My interest in Computers grew when I was 12 years old, from then I have improved my computer skills
            in both hardwares and softwares. Web development is my center of interest, I always
            love the idea of cross-platform development, 1-n one code base deploy into almost
            any platform. I also like to build and develop something new and different that would make a tangible change on world!
            </p>
            <div className="Edu">
                <div class="back1 back2"><i class="fa fa-book i1 i3"></i></div>
            </div>
            <h3 id="education">Education</h3>
            <div className="vr_line">
                <div className="vr_inner inn1"></div>
                <div className="vr_inner inn2"></div>
            </div><br/><br/>
            <h4>BE in CSE</h4>
            <p className="p1">BMSCE, Bangalore</p>
            <p className="p1"><i class="fa fa-calendar i2"></i> Aug 2017 - 2020</p>
            <h4>Diploma in CSE</h4>
            <p className="p1">KS Polytechnic, Bangalore</p>
            <p className="p1"><i class="fa fa-calendar i2"></i> June 2014- May 2017</p>
            <h4>High School</h4>
            <p className="p1">Bangalore Higher Secondary School, Bangalore</p>
            <p className="p1"><i class="fa fa-calendar i2"></i> April 2012</p>

            <h3 class="sk_head">Skills</h3>
            <div class="sk">C/C++</div>
            <div class="sk s2">JavaScript</div>
            <div class="sk s3">PHP</div>
            <div class="sk s4">Python</div>
            <div class="sk s5">React.js</div>
            <div class="sk s6">JAVA</div>
            <div class="sk s7">Laravel</div>
            <a href="https://github.com/abhi-1203"><div class="sk-link s8">Click here to know more!</div></a>
            <br/>
            </div>
            )
        }
    }
    
export default About
    
