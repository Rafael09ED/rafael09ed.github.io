import React, {Component} from 'react';
import github_gist_logo from './media/icons/logo-gist.svg';
import github_logo from './media/icons/logo-github.svg';
import linkedIn_logo from './media/icons/LinkedIn_Logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import ProjectCard from "./ProjectCard";
import projects from "./data/projects.json"

//import skills from "./data/skills.json"

class App extends Component {
    constructor(props) {
        super(props);

        const projectsList = [];
        for (let project of projects)
            projectsList.push(<ProjectCard {...project}/>);

        this.state = {
            projectsList
        }
    }

    render() {
        const projectsList = this.state.projectsList;

        return (
            <div className="App">
                <div className="primarySection patternedFixedBg NameWrapper">
                    <h1 className="Name ">Rafael DeJesus</h1>
                </div>
                <div className="Section">
                    <p className="Title-Subtext primaryContent center_text">
                        I am a Computer Science student at Clemson University graduating this August.
                    </p>
                </div>
                <div className="Section dark_grey patternedFixedBg">
                    <p>I use</p>
                    <div className="my_list primaryContent">
                        <div>JavaScript</div>
                        <div>C++</div>
                        <div>Java</div>
                        <div>Python</div>
                        <div>SQF</div>
                        <div>HTML</div>
                        <div>CSS</div>
                    </div>
                    <p className="lightPadding">and am learning</p>
                    <div className="my_list">
                        <div>Go</div>
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
                <div className="">
                    <p className="title titlePadding">You can find me on:</p>
                    <div className="my_list primaryContent">
                        <a href="https://github.com/Rafael09ED" className="logo logoGroup">
                            <img src={github_logo} className="github_logo" alt="Rafael's Github"/>
                        </a>
                        <a href="https://gist.github.com/Rafael09ED" className="logo logoGroup ">
                            <img src={github_logo} className="github_logo" alt="Rafael's Github Gists"/>
                            <img src={github_gist_logo} className="github_logo" alt="Rafael's Github Gists"/>
                        </a>
                        <a href="https://www.linkedin.com/in/rdejesu" className="logo logoGroup">
                            <img src={linkedIn_logo} alt="Rafael's LinkedIn"/>
                        </a>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <div className="Section black patternedFixedBg">
                    <p className="">Created 2020 by Rafael DeJesus</p>
                </div>
            </div>
        );
    }
}

export default App;
