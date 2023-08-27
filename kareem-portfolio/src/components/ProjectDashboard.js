import React from 'react';
import InteractivePanel from './InteractivePanel';

const ProjectDashboard = () => {
    const panelData = [
        {id:'sidekick', title:'Sidekick Training', image: '../../public/images/projects/sidekick/logo-sidekick.svg', mission:'', role: 'Full Stack Developer', stack: '', date:''},
        {id:'ethics-bowl', title:'Ethics Bowl', image: '../../public/images/projects/sidekick/logo-sidekick.svg', mission:'', role: 'Full Stack Developer', stack:'', date:''},
        {id:'synergy', title:'Synergy LMS', image: '../../public/images/projects/sidekick/logo-sidekick.svg', mission:'', role: 'Full Stack Developer', stack:'', date:''},
        {id:'map-calc', title:'McMaster Academic Planner', image: '../../public/images/projects/sidekick/logo-sidekick.svg', mission:'', role: 'Full Stack Developer', stack:'', date:''},
    ];

    return (
        <div className="project-dashboard">
            <h1>Projects</h1>
            <div className="panel-container">
                {panelData.map((panel) => (
                    <InteractivePanel
                        key={panel.id}
                        title={panel.title}
                        image={panel.image}
                        role={panel.role}
                        stack={panel.stack}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectDashboard;