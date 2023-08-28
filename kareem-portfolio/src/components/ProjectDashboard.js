import React from 'react';
import InteractivePanel from './InteractivePanel';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee, faQuoteLeft, faQuoteRight} from "@fortawesome/free-solid-svg-icons";

const ProjectDashboard = () => {
    const panelData = [
        {id:'sidekick', title:'Sidekick Training', image: '/images/projects/sidekick/logo-sidekick.svg', mission:'', role: 'Full Stack Developer', stack: '', date:''},
        {id:'ethics-bowl', title:'Ethics Bowl', image: '/images/projects/ethics-bowl/NHSEBOne_Seal.png', mission:'', role: 'Full Stack Developer', stack:'', date:''},
        {id:'synergy', title:'Synergy LMS', image: '/images/projects/synergy/synergy-logo.png', mission:'', role: 'Full Stack Developer', stack:'', date:'', backgroundColor: '#414653'},
        {id:'map-calc', title:'McMaster Academic Planner', image: '/images/projects/map-calc/mcmaster-logo.png', mission:'', role: 'Full Stack Developer', stack:'', date:'', backgroundColor: '#7A003C'},
    ];

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
                {panelData.map((panel) => (
                    <InteractivePanel
                        key={panel.id}
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
