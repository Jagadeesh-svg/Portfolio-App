/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-unused-vars */
import React from 'react';
import {BrowserRouter as Router,
    Route,NavLink
   } from "react-router-dom";

class Project extends React.Component{
    
    render(){
        return(
            <body>
                <div class="heading">
                    <div class="jumbotron text-center" id="heading">
                        <h1 class="myName">Jagadeesh</h1>
                        <p class="myOccupation">Software Engineer</p>
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
                                <a class="nav-link active" href="/achievements">
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
                        <div class="col-sm-12">
                            <h2 class="myskills" style={{textAlign:"justify"}}>OE News Mobile Application</h2>
                            <br/>
                            <div>
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe 
                                    class="embed-responsive-item"
                                    src="https://www.youtube.com/embed/8-x-w0hZ2UI"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipbord-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen /> 
                                </div>
                                <br/>
                                <h3>Description</h3>
                                <pre class="skills" style={{textAlign:"justify"}}>
                                    
                                    

                                    

                                </pre>
                                <br/>
                                <h3 class="myskills">Project Domain and Tools</h3>
                                <p class="skills">
                                    This Application developed by using the following Programming
                                    languages and tools
                                </p>
                                <ul>
                                    <li>Programming Language - Java</li>
                                    <li>Tool - Android Studio code</li>
                                    <li>Database - Firebase</li>
                                </ul>
                                
                                <div>
                                    <ul class="nav nav-pills justify-content-center">
                                        <li class="nav-item">
                                            <a class="nav-link active" href="http://github.com"> Github Link for OE News App Source Code</a>
                                        </li>
                                    </ul>
                                </div>
                                <br/>
                                <br/>
                            </div>
                        </div>
                        <br />


                        <div class="col-sm-12">
                            <h2 class="myskills" style={{textAlign:"justify"}}>Portfolio Web Application</h2>
                            <br/>
                            <div>
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe 
                                    class="embed-responsive-item"
                                    src="https://www.youtube.com/embed/8-x-w0hZ2UI"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipbord-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen /> 
                                </div>
                                <br/>
                                <h3>Description</h3>
                                <pre class="skills" style={{textAlign:"justify"}}>
                                    
                                    

                                    

                                </pre>
                                <br/>
                                <h3 class="myskills">Project Domain and Tools</h3>
                                <p class="skills">
                                    This Application developed by using the following Programming
                                    languages and tools
                                </p>
                                <ul>
                                    <li>Frontend - HTML,CSS,Javascript</li>
                                    <li>Frontend Framework - React JS</li>
                                    <li>Backend - Node JS</li>
                                    <li>Tool - Visual Studio Code</li>
                                </ul>
                                <div>
                                    <ul class="nav nav-pills justify-content-center">
                                        <li class="nav-item">
                                            <a class="nav-link active" href="http://github.com"> Github Link for Portfolio Web Application Source Code</a>
                                        </li>
                                    </ul>
                                </div>
                                <br/>
                                <br/>
                            </div>
                        </div>
                        <br />
                        
                    </div>
                </div> 
                <br/>


                
                    <div class="jumbotron text-center" id="footer">
                        <ul class="nav justify-content-center">
                            <li class="nav-item">
                                <a href="https://www.linkedin.com/" 
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
            
            </body>               
        ); 
    }
}

export default Project;