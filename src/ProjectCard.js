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
                    { this.state.photoURL &&
                        <div class="card-image">
                            <figure class="image is-16by9">
                            <img src={this.state.photoURL} alt={`${this.state.title}`}/>
                            </figure>
                        </div>
                    }
                    { this.state.youtubeCode &&
                        <div class="card-image">
                            <figure class="image is-16by9">
                            <iframe class="has-ratio" title={`${this.state.youtubeCode}`} width="640" height="360" src={`https://www.youtube.com/embed/${this.state.youtubeCode}`} frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </figure>
                        </div>
                    }
                    { this.state.videoURL &&
                        <div class="card-image">
                            <figure class="video_parent image is-16by9">
                                <video width="640" height="360" controls playsinline autoplay muted loop>
                                    <source src={this.state.videoURL} type="video/mp4"/>
                                </video>
                            </figure>
                        </div>
                    }
                    { this.state.embedURL &&
                        <div class="card-image">
                            <figure class="image is-16by9">
                            <iframe class="has-ratio" title={`${this.state.embedURL}`} width="640" height="360" src={this.state.embedURL} frameborder="0" allow="picture-in-picture"></iframe>
                            </figure>
                        </div>
                    }
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