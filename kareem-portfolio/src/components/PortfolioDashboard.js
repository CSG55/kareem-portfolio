import React from 'react';
import {Col, Row} from "react-bootstrap";
// import profileImage from '/images/kareem-pic-hokkaido.jpg'
const SummaryBlock = (name, content) =>
    <span>
        <strong> {name}: </strong> <span>{content}</span>
    </span>

function PortfolioDashboard() {
    return (
        <div className="portfolio-dashboard"
        >
            <Row>
                <Col>
                    <div style={{textAlign:'left'}}>
                        My name is Kareem.<br/>
                        A Full Stack Developer.<br/>
                        Skilled, Adventurous.
                    </div>
                </Col>
                <Col>
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
