import React from 'react';
import {Card} from "react-bootstrap";
import {SummaryBlock} from "./common";

const InteractivePanel = ({ id, title, image, mission, role, stack, date }) => {
    return (
        <Card id={id} className="interactive-panel">
            <img src={image} className="card-img-top" alt={title} />
            <Card.Body>
                <p className="card-text">
                    <SummaryBlock name={'Role'} content={role}/>
                </p>
                <p className="card-text">
                    <SummaryBlock name={'Stack'} content={stack}/>
                </p>
            </Card.Body>
        </Card>
    );
};

export default InteractivePanel;



