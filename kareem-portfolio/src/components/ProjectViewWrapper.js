import React, {useState} from 'react';
import {Row} from "react-bootstrap";
import {SummaryBlock, projectData} from "./common";
import {useParams} from "react-router";
import ProjectView from "./ProjectView";

function ProjectViewWrapper({title, mission, role, stack, date, description, image}) {
    let urlParams = useParams();
    const [data, setProjectData] = useState(projectData.find(p => p['id'] === urlParams['projectId']));

    console.log(data)


    return (
        <div className="project-view-wrapper">
            <ProjectView
                description={data['description']}
                date={data['date']}
                role={data['role']}
                stack={data['stack']}
                title={data['title']}
                mission={data['mission']}
                image={data['image']}
            />
        </div>
    );
}

export default ProjectViewWrapper;
