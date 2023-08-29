import React from 'react';
import {Row} from "react-bootstrap";
import {SummaryBlock} from "./common";

function ProjectView({title, mission, role, stack, date, description, image}) {
    return (
        <div className="project-view">
            {/*<Row className="top-img">*/}
            {/*    <img src={image}></img>*/}
            {/*</Row>*/}
            <Row className="project-summary">
                {title &&
                    <SummaryBlock name={'Project'} content={title}/>
                }
                {mission &&
                    <SummaryBlock name={'Mission'} content={mission}/>
                }
                {role &&
                    <SummaryBlock name={'Role'} content={role}/>
                }
                {stack &&
                    <SummaryBlock name={'Stack'} content={stack}/>
                }
                {date &&
                    <SummaryBlock name={'Date'} content={date}/>
                }
            </Row>
            <Row className="project-description">
                {description && description}
            </Row>

        </div>
    );
}

export default ProjectView;
