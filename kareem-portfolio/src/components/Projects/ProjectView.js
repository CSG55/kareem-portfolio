import React from 'react';
import {Col, Row} from "react-bootstrap";
import {SummaryBlock} from "../common";

function ProjectView({title, mission, role, stack, date, description, image}) {
    console.log(description)
    console.log(typeof (description))

    return (
        <div className="project-view">
            <Row>
                <Col className={'project-img'} sm={12} md={7} lg={7}>
                    <img src={image} alt={`${title} project photo`}></img>
                </Col>
                <Col sm={12} lg={5}>
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
                </Col>
            </Row>
        </div>
    );
}

export default ProjectView;
