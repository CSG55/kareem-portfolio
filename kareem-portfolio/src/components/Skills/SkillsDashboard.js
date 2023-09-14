import React, {useRef} from 'react';
import {Col, Row} from "react-bootstrap";
import {SummaryBlock} from "../common";
import ImageGallery from "react-image-gallery";
import {Link, useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowLeft, faHandshake,
    faLaptopCode,
    faMicroscope,
    faPersonChalkboard, faQuestion,
    faQuoteLeft
} from "@fortawesome/free-solid-svg-icons";
import {SocialIcon} from "react-social-icons";
import PortfolioPopover from "../common/PortfolioPopover";


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
                        <p>For over 6 years, I've brought scalable web applications to life using ReactJS and Python/Node. <br/>It's not just the code – I've grown my leadership skills in agile settings and communicate well with stakeholders and developers alike.</p>
                        <p>You can count on me to lead your projects, or to simply write great-quality code. <Link target="_blank" to={'/projects'}>See my work!</Link> </p>
                    </div>
                    <div className={'contact-btns'}>
                        <SocialIcon target="_blank"  url="https://www.linkedin.com/in/kareem-khaled-35a72773/" />
                        <SocialIcon target="_blank"  url="https://github.com/CSG55/" />
                        <SocialIcon target="_blank"  url="mailto:khaled.kareem0506@gmail.com" />
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
                                <PortfolioPopover position={'top'} title={'Observability'} body={
                                    <p> Built integrations with:
                                        <ul>
                                            <li>k6 grafana</li>
                                            <li>AWS Cloudwatch</li>
                                            <li>sentry.io</li>
                                            <li>newrelic</li>
                                        </ul>
                                    </p>
                                }>
                                    <div className={'skill-container'}><FontAwesomeIcon icon={faMicroscope} size={"2xl"}/> Observability </div>
                                </PortfolioPopover>
                                <PortfolioPopover position={'top'} title={'Leadership'} body={
                                    <p>
                                        <ul>
                                            <li>Experience leading development teams of 4-8 </li>
                                            <li>Provides mentorship to developers</li>
                                        </ul>
                                    </p>
                                }>
                                    <div className={'skill-container'}><FontAwesomeIcon icon={faHandshake} size={"2xl"}/> Leadership </div>
                                </PortfolioPopover>
                            </div>
                            <div className={'soft-skill-col'}>
                                <PortfolioPopover position={'top'} title={'Ambiguity'} body={
                                    <p>
                                        Experience working with non-technical clients to extract problems and architecture.
                                    </p>
                                }>
                                    <div className={'skill-container'}><FontAwesomeIcon icon={faQuestion} size={"2xl"}/> Ambiguity </div>
                                </PortfolioPopover>
                                <PortfolioPopover position={'top'} title={'Presentations'} body={
                                    <p> Seasoned at presenting to technical and non-technical teams alike.
                                        Here is a sample of some presentations I've created.
                                        <ul>
                                            <li><a href={'https://docs.google.com/presentation/d/1wOo33cQRNGeq8CUKqrAmGNDE6kh6RX2KQBNeiPhkwok/edit#slide=id.p'}>Intro to Web Accessibility</a></li>
                                            <li> <a href={'https://docs.google.com/presentation/d/1ejT6ZPJFo1MGJG8sL1XC40c0yFjtrkucqmvuIivXlK0/edit#slide=id.p'}>Python's Walrus Operator</a></li>
                                            <li> <a href={'https://docs.google.com/presentation/d/1A1tIHC6-z2PInUpEBefpoqaImpKzwaWOSVEMtHWO-GY/edit#slide=id.p'}>Best Practices with SQLAlchemy</a></li>
                                        </ul>
                                    </p>
                                }>
                                    <div className={'skill-container'}><FontAwesomeIcon icon={faPersonChalkboard} size={"2xl"}/> Presentations </div>
                                </PortfolioPopover>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default SkillsDashboard;
