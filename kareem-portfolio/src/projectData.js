import React from "react";

const projectData = [
    {
        id:'sidekick',
        title:'Sidekick Training',
        logo: '/images/projects/sidekick/logo-sidekick.svg',
        image: '/images/projects/sidekick/SK-promo.png',
        mission:'To create an inclusive learning environment.',
        role: 'Lead Full Stack Developer',
        stack: 'ReactJS, Python (Flask), NodeJS, PostgreSQL, AWS.',
        date:'2021-2023',
        description:
            <ul>
                <li>Sidekick is a VILT (Virtual Instructor Led Training) platform, that facilitates event management and live learning sessions. We masterfully engaged attendees and choreographed events to increase training effectiveness by 76%.</li>
                <li>Role: As a Senior Full Stack Developer, I led a team of 8 developers in building Sidekick. Alongside writing great code, I designed a development process to meet management’s expectations, while also advocating for the team. I mentored developers in the relevant tech stack and conducted regular 1-1s. Through my hard work and a team effort, we successfully launched the product in February 2022.</li>
                <li>Observability - Implemented solutions using Grafana k6, AWS metrics, and Sentry. </li>
            </ul>
    },
    {
        id:'map-calc',
        title:'McMaster Academic Planner',
        logo: '/images/projects/map-calc/mcmaster-logo.png',
        image: '/images/projects/map-calc/map-screenshot.png',
        mission: 'Guide students to programs they’ll love.',
        role: 'Full Stack Developer',
        stack:'ReactJS, Python (Django), PostgresDB, AWS.',
        date:'2019-present',
        backgroundColor: '#7A003C',
        description:
            <ul>
                <li>The McMaster Academic Planner Calculator is a tool to guide prospective students into an undergraduate program based on their course interests.  Each year, over 200,000 users access the platform. It is an instrumental tool for securing student admissions, particularly from abroad.</li>
                <li>Role: As a Full Stack Developer, I architected, developed, and deployed the MAP Calculator for McMaster University alongside a team of 4 developers. I pioneered a new API integration (Mosaic API), which allows us to update course/program information. Finally, I enhanced the calculator’s accessibility to meet AODA standards.</li>
            </ul>
    },
    {
        id:'ethics-bowl',
        title:'Ethics Bowl',
        logo: '/images/projects/ethics-bowl/NHSEBOne_Seal.png',
        image: '/images/projects/ethics-bowl/live-match.webp',
        mission:'Rescue a national extracurricular event in the pandemic.',
        role: 'Lead Full Stack Developer',
        stack:'ReactJS, Python (Flask), PostgreSQL, AWS.',
        date:'2020-2023',
        description:
            <ul>
                <li>2020 was a wild year, and students’ lives were significantly affected by the abrupt changes in their environment. The National High School Ethics Bowl, facilitated by UNC, needed more than just Zoom to facilitate a highly sophisticated tournament remotely.</li>
                <li>NHSEBOne is an expertly designed platform tailored to schedule and facilitate a live tournament for the National High School Ethics Bowl. In 2021, 1000s of concurrent users and 100s of events were successfully run using the platform.</li>
                <li>Role: As a Senior Full Stack Developer, I led a team of 4 developers to build the platform that facilitates the National High School Ethics Bowl. I engaged closely with our client to understand problems and worked with them to deliver incremental value with feedback loops.</li>
            </ul>
    },
    {
        id:'synergy',
        title:'Synergy LMS',
        logo: '/images/projects/synergy/synergy-logo.svg',
        image: '',
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
    projectData,
}