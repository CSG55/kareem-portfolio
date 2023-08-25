import React from 'react';
import {Col, Row} from "react-bootstrap";
import Typewriter from 'typewriter-effect';


function PortfolioDashboard() {

    return (
        <div className="portfolio-dashboard"
        >
            <Row className={'dashboard-footer-row'}>
                <Col className={'justify-content-center'}>
                    <div className={'typewriter-container'}>
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
                                    .typeString(`<span>Developer.</span>`)
                                    .pauseFor(500)
                                    .typeString(`<br/><span>Adventurer.</span>`)
                                    .pauseFor(250)
                                    .start()
                            }}
                        />
                        <button id="profileBtnFadeIn" className='btn btn-primary'>My Projects</button>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default PortfolioDashboard;
