import React, {Component} from 'react';
import github_gist_logo from './media/icons/logo-gist.svg';
import github_logo from './media/icons/logo-github.svg';
import linkedIn_logo from './media/icons/LinkedIn_Logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="Section patternedFixedBg">
                    <h1 className="Title">Rafael Dejesus</h1>
                </div>
                <div className="Section">
                    <p className="Title-Subtext">
                        I am a Computer Science student at Clemson University
                    </p>
                </div>
                <div className="Section dark_grey">
                    <p>I use</p>
                    <div className="list">
                        <a>Java</a>
                        <a>C++</a>
                        <a>SQF</a>
                        <a>JavaScript</a>
                        <a>HTML</a>
                        <a>CSS</a>
                    </div>
                    <p>and am learning</p>
                    <div className="list">
                        <a>Go</a>
                        <a>Python</a>
                        <a>ARM</a>
                    </div>
                </div>
                <div className="Section ">
                    <p className="Title-Subtext">
                        You can find me on:
                    </p>
                    <a href="https://github.com/Rafael09ED">
                        <img src={github_logo} className="logo github_logo" alt="Rafael's Github"/>
                    </a>
                    <br/>
                    <a href="https://gist.github.com/Rafael09ED">
                        <img src={github_logo} className="logo github_logo" alt="Rafael's Github Gists"/>
                        <img src={github_gist_logo} className="logo github_logo" alt="Rafael's Github Gists"/>
                    </a>
                    <br/>
                    <a href="https://www.linkedin.com/in/rdejesu">
                        <img src={linkedIn_logo} className="logo" alt="Rafael's LinkedIn"/>
                    </a>
                </div>
            </div>
        );
    }
}

export default App;
