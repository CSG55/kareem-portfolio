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


function SkillsDashboard() {

    return (
        <div className="skills-view">
            <Row>
                <Col xs={12} sm={5} md={5} lg={4} xl={3}>
                    <img className={'headshot-img'} src={'/images/kareem-headshot-crop.png'} alt={'kareem head shot'}></img>
                </Col>
                <Col className={'short-blurb-container'} xs={12} sm={7} md={7} lg={8} xl={9}>
                    <div className="short-blurb">
                        Hello my name is Kareem. Professor: News! Bad! We're bankrupt. Oh, I borrowed money to invest in Bitcoin. Then the price crashed, and I sold at a huge loss. We're ruined! Oh, sorry. I didn't realize you were watching TV. Morbo: The tragic impact destroyed the planet Klarg, along with its 50 billion inhabitants. Linda: [Laughs] In other news, Morbo, guess what's back? Morbo: The planet Klarg? Linda: Nope! The price of Bitcoin!
                    </div>
                    <button className={'btn btn-primary'}>Contact me</button>
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
