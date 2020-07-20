import React, {Component} from 'react';

class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.state = {...props}
    }

    render() {
        return (
            <div className="column is-one-third-desktop is-half-tablet is-full-mobile">
                <div className="card is-centered bm--card-equal-height">
                    <div className="card-header">
                        <p className="card-header-title">{this.state.title}</p>
                    </div>
                    <div className="card-content">
                        <p>{this.state.body}</p>
                        {this.state.stats &&
                            <div className="spacer"></div>
                        }    
                        <div className="card-stats">
                            <p>{this.state.stats}</p>
                        </div>
                    </div>
                    <footer className="card-footer">
                        <p className="card-footer-item">
                         <span>
                             <a href={this.state.primaryLink}>{this.state.primaryText}</a>
                         </span>
                        </p>
                        {
                            this.state.secondaryText &&
                            <p className="card-footer-item">
                                <span><a href={this.state.secondaryLink}>{this.state.secondaryText}</a></span>
                            </p>
                        }
                    </footer>
                </div>
            </div>
        );

    }
}

export default ProjectCard;