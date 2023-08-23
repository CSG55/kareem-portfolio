import React from 'react';
import {Col, Row} from "react-bootstrap";
import Typewriter from 'typewriter-effect';

const SummaryBlock = (name, content) =>
    <span>
        <strong> {name}: </strong> <span>{content}</span>
    </span>

function PortfolioDashboard() {
    return (
        <div className="portfolio-dashboard"
        >
            <Row className={'dashboard-footer-row'}>
                <Col className={'d-flex justify-content-center'}>
                    {/*<div style={{textAlign:'left'}}>*/}
                    {/*    My name is Kareem.<br/>*/}
                    {/*    A Full Stack Developer.<br/>*/}
                    {/*    Skilled, Adventurous.*/}
                    {/*</div>*/}
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: false,
                            delay: 40,
                            pauseFor: 0,
                            stop:false,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString(`My name is Kareem.`)
                                .typeString(`<br/>A Full Stack Developer.`)
                                .typeString(`<br/>Skilled, Adventurous.`)
                                .start()
                        }}
                    />
                </Col>
                <Col className={'d-flex justify-content-center'}>
                    <div className={'btn-container'}>
                        <button>My Projects</button>
                        <button>My Skills</button>
                        <button>My Adventures</button>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default PortfolioDashboard;
