import React, {useRef} from 'react';
import {Col, Row} from "react-bootstrap";
import {SummaryBlock} from "../common";
import ImageGallery from "react-image-gallery";
import { useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowLeft, faHandshake,
    faLaptopCode,
    faMicroscope,
    faPersonChalkboard, faQuestion,
    faQuoteLeft
} from "@fortawesome/free-solid-svg-icons";
import {SocialIcon} from "react-social-icons";


function SkillsDashboard() {

    return (
        <div className="skills-view">
            <Row>
                <Col xs={12} sm={5} md={5} lg={4} xl={3}>
                    <img className={'headshot-img'} src={'/images/kareem-headshot-crop.png'} alt={'kareem head shot'}></img>
                </Col>
                <Col className={'short-blurb-container'} xs={12} sm={7} md={7} lg={8} xl={9}>
                    <div className="short-blurb">
                        <p>My name is Kareem, and I'm thrilled to have you here today! I'm a Full-Stack Developer and Team Lead. </p>
                        <p>For over 6 years, I've brought scalable web applications to life using ReactJS and Python/Node. It's not just the code – I've grown my leadership skills in agile settings and communicate well with stakeholders and developers alike.</p>
                        <p>You can count on me to lead your projects, or to simply write great-quality code. </p>
                    </div>
                    <div className={'contact-btns'}>
                        <SocialIcon url="https://www.linkedin.com/in/kareem-khaled-35a72773/" />
                        <SocialIcon url="https://github.com/CSG55/" />
                        <a target="_blank" className={'btn btn-primary'} href={"mailto:khaled.kareem0506@gmail.com"}>Contact me</a>
                    </div>
                </Col>
            </Row>
            <Row className={'skills-header-container'}>
                <Col className={'skills-column'} sm={6} md={6} lg={6}>
                    <div className={"skills-header-row"}>
                        <h4>Tech</h4>
                        <FontAwesomeIcon icon={faLaptopCode} size={"2xl"}/>
                        <div className={'skills-list-container'}>
                            <ul className={'skills-list'}>
                                <li>ReactJS</li>
                                <li>Python (Flask/Django)</li>
                                <li>NodeJS</li>
                            </ul>
                            <ul className={'skills-list'}>
                                <li>AWS</li>
                                <li>SQL/NoSQL</li>
                                <li>API, Websockets</li>
                                {/*<li>Testing</li>*/}
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col className={'skills-column'} sm={6} md={6} lg={6}>
                    <div className={"skills-header-row"}>
                        <h4>Skills</h4>
                        <div className={'skills-list-container'}>
                            <div className={'soft-skill-col'}>
                                <div><FontAwesomeIcon icon={faMicroscope} size={"2xl"}/> Observability </div>
                                <div><FontAwesomeIcon icon={faHandshake} size={"2xl"}/> Leadership </div>
                            </div>
                            <div className={'soft-skill-col'}>
                                <div><FontAwesomeIcon icon={faQuestion} size={"2xl"}/> Ambiguity </div>
                                <div><FontAwesomeIcon icon={faPersonChalkboard} size={"2xl"}/> Presentations </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default SkillsDashboard;
