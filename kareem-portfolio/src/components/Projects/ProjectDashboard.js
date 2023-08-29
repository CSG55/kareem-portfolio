import React from 'react';
import InteractivePanel from '../common/InteractivePanel';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee, faQuoteLeft, faQuoteRight} from "@fortawesome/free-solid-svg-icons";
import {projectData} from "../../projectData";

const ProjectDashboard = () => {

    return (
        <div className="project-dashboard">
            <div className="quote-header">
                <FontAwesomeIcon icon={faQuoteLeft} />
                <div>
                    <blockquote>
                        Whenever someone creates something with all of their heart, then that creation is given a soul.
                    </blockquote>
                    <cite> <img className="ghibli-soot-sprite" src={"/images/soot-sprite-ghibli.jpg"} alt={'ghibli soot sprite as bullet point'}></img>Reiko Yoshida, The Cat Returns </cite>
                </div>
                <FontAwesomeIcon icon={faQuoteRight} />
            </div>
            <div className="panel-container">
                {projectData.map((panel) => (
                    <InteractivePanel
                        key={panel.id}
                        id={panel.id}
                        title={panel.title}
                        image={panel.image}
                        imgBackground={panel.backgroundColor}
                        role={panel.role}
                        stack={panel.stack}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectDashboard;
