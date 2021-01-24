import React, {Component} from 'react';
import github_gist_logo from './media/icons/logo-gist.svg';
import github_logo from './media/icons/logo-github.svg';
import linkedIn_logo from './media/icons/LinkedIn_Logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import ProjectCard from "./ProjectCard";
import projects from "./data/projects.json"
import skillsData  from "./data/skills.json";


class App extends Component {
    constructor(props) {
        super(props);
        // SKILLS
        const skillsList = [];
        for (let skillSection of skillsData){
            skillsList.push(<p className="lightPadding">{skillSection.title}</p>);

            let skillList = [];
            for (let skill of skillSection.list){
                if (skill.length > 10) {
                    skillList.push(<div style={{flexBasis: '10em'}}>{skill}</div>);

                } else {
                    skillList.push(<div>{skill}</div>);
                }
            }
            skillsList.push(<div className="my_list">
                {skillList}
            </div>);
        }


        // PROJECTS
        const projectsList = [];
        for (let project of projects)
            projectsList.push(<ProjectCard {...project}/>);

        this.state = {
            projectsList,
            skillsList
        }
    }

    render() {
        const projectsList = this.state.projectsList;
        const skillsList = this.state.skillsList;

        return (
            <div className="App">
                <div className="primarySection patternedFixedBg NameWrapper">
                    <h1 className="Name ">Rafael DeJesus</h1>
                </div>
                <div className="Section">
                    <p className="Title-Subtext primaryContent center_text">
                        I am a Full Stack Developer under the SNT Program at SAP Labs in Palo Alto and a Computer Science graduate from Clemson University with interests in HCI, strategy, teamwork, data visualization, physics, philosophy, public policy, video games, design and electronics.
                    </p>
                </div>
                <div className="Section dark_grey patternedFixedBg">
                    {skillsList}
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
                    <p className="">Created 2021 by Rafael DeJesus</p>
                </div>
            </div>
        );
    }
}

export default App;
