import React from "react";

const SummaryBlock = ({name, content}) =>
    <div className={'summary-block'}>
        <strong> {name}: </strong> <span>{content}</span>
    </div>


const projectData = [
    {id:'sidekick', title:'Sidekick Training', image: '/images/projects/sidekick/logo-sidekick.svg', mission:'', role: 'Full Stack Developer', stack: '', date:''},
    {id:'map-calc', title:'McMaster Academic Planner', image: '/images/projects/map-calc/mcmaster-logo.png', mission:'', role: 'Full Stack Developer', stack:'', date:'', backgroundColor: '#7A003C'},
    {id:'ethics-bowl', title:'Ethics Bowl', image: '/images/projects/ethics-bowl/NHSEBOne_Seal.png', mission:'', role: 'Full Stack Developer', stack:'', date:''},
    {
        id:'synergy',
        title:'Synergy LMS',
        image: '/images/projects/synergy/synergy-logo.png',
        mission:'Give students the experience I wish I had.',
        role: 'Full Stack Developer',
        stack:'ReactJS, Python (Flask), MySQL, AWS.',
        date:'2018-2023',
        backgroundColor: '#414653',
        description:
            <ul>
                <li> Synergy is a K-12 LMS used by 1000s of students and teachers across the United States and Mexico.</li>
                <li>Role: As a Full Stack Developer, I architected and built several new features to the LMS, including LTI integrations, content viewers, and a Javascript parser for legacy code. I also engaged with the client to understand pain points and build solutions using their feedback.</li> 
            </ul>
    },
];

export {
    SummaryBlock,
    projectData,
}