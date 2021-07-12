/* eslint-disable no-unused-vars */
import React from 'react';
import {BrowserRouter as Router,
    Route,NavLink
   } from "react-router-dom";

class Home extends React.Component{
    
    render(){
        return(
            <body>
                <div class="heading">
                    <div class="jumbotron text-center" id="heading">
                        <h1 class="myname">Jagadeesh</h1>
                        <p class="myoccupation">Software Engineer</p>
                        <ul class="nav nav-pills nav-justified" id="navigation">
                            <li class="nav-item">
                                <a class="nav-link active" href="/">
                                    Home
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="/project">
                                    Project
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="/acheivements">
                                    Achievements
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="/contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="rounded-circle">
                                <img src="/public/logo192.png" class="rounded-circle mx-auto d-block" 
                                    alt="myphoto" width="130px" height="150px" />
                            </div>
                            <br />
                        </div>
                        
                    
                    <div class="col-sm-8">
                        <h2 class="myskills">Career Objective </h2>
                        <br/>
                        <p class="skills">To become a successful expert in the field of 
                        Information Technology by channelizing my technical knowledge 
                        and skills to ensure personal and professional growth 
                        and to contribute to the prosperity of the organization.</p>
                    </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <h2 class="myskills"> Technical Skills </h2>
                            <ul class="skills">
                                <li>
                                    Front-end languages - HTML , CSS , Javascript , React JS
                                </li>
                                <li>
                                    Back-end languages - Java , C ,Node JS
                                </li>
                                <li>
                                    Database - MYSQL , MongoDB 
                                </li>
                            </ul>
                        </div>
                        <div class="col-sm-6">
                            <h2 class="myskills">Internship and Certification</h2>
                            <br/>
                            <ul class="skills">
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        <br />
                        <div class="col-sm-12">
                            <h2 class="myskills">Educational Qualifications</h2>
                            <br/>
                            <table class="table table-dark table-striped">
                                <thead>
                                    <tr>
                                        <th>Degree</th>
                                        <th>School/College</th>
                                        <th>Year of Passing</th>
                                        <th>Percentage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>B.E.(Materials Science and Engineering)</td>
                                        <td>College of Engineering Guindy (Anna University, Chennai)</td>
                                        <td>2022</td>
                                        <td>77</td>
                                    </tr>
                                    <tr>
                                        <td>Class 12</td>
                                        <td>Velammal Matriculation Higher Secondary School</td>
                                        <td>2018</td>
                                        <td>95.8</td>
                                    </tr>
                                    <tr>
                                        <td>Class 10</td>
                                        <td>Janaki Ramachandran Matriculatin School</td>
                                        <td>2016</td>
                                        <td>94.8</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                        <br />
                        <br/>


                        <div class="col-sm-12">
                            <h2 class="myskills">My Projects</h2>
                            <br/>
                            <table class="table table-dark table-striped">
                                <thead>
                                    <tr>
                                        <th>Project Name</th>
                                        <th>Technologies Used</th>
                                        <th>Tool Used</th>
                                        <th>Project Link</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>OE News App</td>
                                        <td>Java , XML</td>
                                        <td>Android Studio</td>
                                        <a href="https://github.com" title="OE News App">OE News App</a>
                                    </tr>
                                    <tr>
                                        <td>Portfolio App</td>
                                        <td>HTML , CSS , Javascript , Bootstrap , React JS , Node JS</td>
                                        <td>Visual Studio Code</td>
                                        <a href="https://github.com" title="Portfolio App">Portfolio App</a>
                                    </tr>
                                    <tr>
                                        <td>Fusion360 Challenge</td>
                                        <td>Computer Aided Design</td>
                                        <td>Autodesk Fusion360</td>
                                        <a href="https://github.com" title="Robotic Design"> Robotic Design</a>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div class="jumbotron text-center" id="footer">
                        <ul class="nav justify-content-center">
                            <li class="nav-item">
                                <a href="https://www.linkedin.com/in/jagadeesh-velkumar-0159a71ba/" 
                                   class="fa fa-linkedin nav-link"
                                   title="LinkedIn"
                                   style={{color:"blue"}} 
                                   > </a>
                            </li>
                            <li class="nav-item">
                                <a href="https://www.github.com/" 
                                   class="fa fa-github nav-link"
                                   title="Github"
                                   style={{color:"blue"}}
                                   > </a>
                            </li>
                            <li class="nav-item">
                                <a href="https://www.instagram.com/" 
                                   class="fa fa-instagram nav-link"
                                   title="Instagram"
                                   style={{color:"blue"}}
                                   > </a>
                            </li>
                            <li class="nav-item">
                                <a href="https://www.whatsapp.com/" 
                                   class="fa fa-whatsapp nav-link"
                                   title="Whatsapp"
                                   style={{color:"blue"}}
                                   > </a>
                            </li>
                        </ul>
                    </div>


                    
                </div>
                
            </body> 
        ); 
    }
}

export default Home;