import React, {Component} from 'react';
import github_gist_logo from './media/icons/logo-gist.svg';
import github_logo from './media/icons/logo-github.svg';
import linkedIn_logo from './media/icons/LinkedIn_Logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import ProjectCard from "./ProjectCard";
import projects from "./data/projects.json"

class App extends Component {
    render() {
        const projectsList = [];
        for (let project of projects){
            projectsList.push(<ProjectCard {...project}/>);
        }
        return (
            <div className="App">
                <div className="Section patternedFixedBg">
                    <h1 className="Title">Rafael Dejesus</h1>
                </div>
                <div className="Section">
                    <p className="Title-Subtext primaryContent">
                        I am a Computer Science student at Clemson University
                    </p>
                </div>
                <div className="Section dark_grey">
                    <p>I use</p>
                    <div className="list primaryContent">
                        <div>Java</div>
                        <div>C++</div>
                        <div>SQF</div>
                        <div>JavaScript</div>
                        <div>HTML</div>
                        <div>CSS</div>
                    </div>
                    <p>and am learning</p>
                    <div className="list">
                        <div>Go</div>
                        <div>Python</div>
                        <div>ARM</div>
                    </div>
                </div>
                <div className="Section">
                    <h2 className="title titlePadding">Projects I've Worked On</h2>
                    <div className="projectList primaryContent">
                        <div className="columns is-multiline">
                            {projectsList}
                        </div>
                    </div>
                </div>
                <div className="Section ">
                    <p className="title">
                        You can find me on:
                    </p>
                    <a href="https://github.com/Rafael09ED" className="logoGroup">
                        <img src={github_logo} className="logo github_logo" alt="Rafael's Github"/>
                    </a>
                    <br/>
                    <a href="https://gist.github.com/Rafael09ED" className="logoGroup">
                        <img src={github_logo} className="logo github_logo" alt="Rafael's Github Gists"/>
                        <img src={github_gist_logo} className="logo github_logo" alt="Rafael's Github Gists"/>
                    </a>
                    <br/>
                    <a href="https://www.linkedin.com/in/rdejesu" className="logoGroup">
                        <img src={linkedIn_logo} className="logo" alt="Rafael's LinkedIn"/>
                    </a>
                    <br/>
                </div>
            </div>
        );
    }
}

export default App;
