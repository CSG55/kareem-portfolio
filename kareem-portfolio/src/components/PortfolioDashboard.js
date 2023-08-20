import React from 'react';
import {Col, Row} from "react-bootstrap";

const SummaryBlock = (name, content) =>
    <span>
        <strong> {name}: </strong> <span>{content}</span>
    </span>

function PortfolioDashboard() {
    return (
        <div className="portfolio-dashboard">
            <Row>
                <img/>
            </Row>
            <Row>
                <Col>
                    My name is Kareem.
                    A Full Stack Developer.
                    Skilled, Adventurous.
                </Col>
                <Col>
                    <button>My Projects</button>
                    <button>My Skills</button>
                    <button>My Adventures</button>
                </Col>
            </Row>
        </div>
    );
}

export default PortfolioDashboard;
