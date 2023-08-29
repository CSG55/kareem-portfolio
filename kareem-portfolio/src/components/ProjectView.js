import React from 'react';
import {Row} from "react-bootstrap";
import {SummaryBlock} from "./common";

function ProjectView({title, mission, role, stack, date, description, image}) {
    console.log(description)
    console.log(typeof (description))

    return (
        <div className="project-view">
            {/*<Row className="top-img">*/}
            {/*    <img src={image}></img>*/}
            {/*</Row>*/}
            <div className="project-summary">
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
            </div>
            {description &&
                <div className="project-description">
                    {description}
                </div>
            }
            <div
            />


        </div>
    );
}

export default ProjectView;
