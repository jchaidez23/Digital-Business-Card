import React from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
export default function BusinessCard(){
    return(

    <div class="business-card">
        <div className="personal-info">
            <img src={require('./me.jpg')} alt="Headshot of me" width={"300px"}></img>
            <h1 className="text-name">Jose Acosta</h1>
            <h5 className="text-subtitle">Aspiring Software Engineer</h5>
            <h5 className="text-site" href="https://www.josexacosta.com">josexacosta.com</h5>
        </div>
        
        <div className="button-div">
            <button className="email" >
                <FontAwesomeIcon icon={faEnvelope} />
                 {" "}
                 <a href="mailto:josechaidez23@gmail.com?subject=Contact&body=Digital%20Business%20Card%20Contact">Email</a>
            </button>
            
            <button className="linkedin">
                <FontAwesomeIcon icon={faLinkedin} />
                {" "}
                <a href="https://www.linkedin.com/in/joseacostac/" rel="noreferrer" target="_blank">LinkedIn</a>
            </button>
        </div>
        <div> 
            <h2 className="text-header">About</h2>
            <p className="text-text">
                I am an aspiring software developer with a B.S. in Computer Science from California State University, Long Beach.
                I am interested in becoming a full-stack or back-end software engineer working with either React and Python.
            </p>
            <h2 className="text-header">Interests</h2>
            <p className="text-text">
                I enjoy playing video games, watching movies, reading horror novels and doing escape rooms.
                When I am not partaking in any of my favorite hobbies I tend to be coding my personal projects.
            </p>
        </div>

        <div className="footer">
            <div className="buttons"> 
                <a href="https://www.github.com/jchaidez23/" rel="noreferrer" target="_blank"> <FontAwesomeIcon icon={faGithubSquare} className="githubicon" size="2x"/> </a>
                <a href="https://www.linkedin.com/in/joseacostac/" rel="noreferrer" target="_blank"> <FontAwesomeIcon icon={faLinkedin} className="linkedinfoot" size="2x"/> </a>
                
            </div>
        </div>
    </div>
    )
}