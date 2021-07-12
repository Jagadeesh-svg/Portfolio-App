/* eslint-disable no-unused-vars */
import React from 'react';
import {BrowserRouter as Router,
    Route,NavLink
   } from "react-router-dom";

class Contact extends React.Component{
    constructor(){
        super();
        this.state={subject:"", body:""}
    }
    validateForm=event =>{
        var subject = document.getElementById("subject").value;
        var body = document.getElementById("body").value;
        window.location.href="mailto:jjaga@gmail.com?subject=" + subject + "&body="+body;
        event.preventDefault();
        return false;
    };
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

                    <div class="container" id="mailme">
                        <div class="row">
                            <div class="col-sm-8">
                                <form class="form-horizontal"
                                    onSubmit={this.validateForm}
                                    target="_blank"
                                    method="POST">
                                    <div class="form-grup form-group-lg">
                                        <label class="skills" for="subject">Name</label>
                                        <input class="form-control" type="text" id="subject" required />
                                    </div>

                                    <div class="form-grup form-group-lg">
                                        <label class="skills" for="body">Name</label>
                                        <textarea class="form-control" type="text" id="body" rows="5" required />
                                    </div>
                                    <br/>
                                    <input type="submit" class="btn btn-primary" id="navigation" value="Send"></input>
                                </form>
                            </div>
                        </div>
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

export default Contact;