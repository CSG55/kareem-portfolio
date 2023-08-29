import React from 'react';
import {Card} from "react-bootstrap";
import {SummaryBlock} from "./common";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

const InteractivePanel = ({ id, title, image, imgBackground, mission, role, stack, date }) => {
    const navigate = useNavigate()
    return (
        <Link id={id} key={id} className="card interactive-panel" style={{backgroundColor: imgBackground}} to={`/project/${id}`}>
            <img src={image} className="card-img-top" alt={title} />
            <Card.Body>
                <p className="card-text hidden-text">
                    <SummaryBlock name={'Role'} content={role}/>
                </p>
                <p className="card-text hidden-text">
                    <SummaryBlock name={'Stack'} content={stack}/>
                </p>
            </Card.Body>
        </Link>
    );
};

export default InteractivePanel;



