import React from "react";
//import ReactDom from "react-dom";



class Achievements extends React.Component{
    render(){
        return (
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


export default Achievements; 