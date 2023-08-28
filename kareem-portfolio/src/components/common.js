import React from "react";

const SummaryBlock = ({name, content}) =>
    <React.Fragment>
        <strong> {name}: </strong> <span>{content}</span>
    </React.Fragment>


const projectData = [
    {id:'sidekick', title:'Sidekick Training', image: '/images/projects/sidekick/logo-sidekick.svg', mission:'', role: 'Full Stack Developer', stack: '', date:''},
    {id:'map-calc', title:'McMaster Academic Planner', image: '/images/projects/map-calc/mcmaster-logo.png', mission:'', role: 'Full Stack Developer', stack:'', date:'', backgroundColor: '#7A003C'},
    {id:'ethics-bowl', title:'Ethics Bowl', image: '/images/projects/ethics-bowl/NHSEBOne_Seal.png', mission:'', role: 'Full Stack Developer', stack:'', date:''},
    {id:'synergy', title:'Synergy LMS', image: '/images/projects/synergy/synergy-logo.png', mission:'', role: 'Full Stack Developer', stack:'', date:'', backgroundColor: '#414653'},
];

export {
    SummaryBlock,
    projectData,
}