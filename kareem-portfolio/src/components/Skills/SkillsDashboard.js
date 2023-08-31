import React, {useRef} from 'react';
import {Col, Row} from "react-bootstrap";
import {SummaryBlock} from "../common";
import ImageGallery from "react-image-gallery";
import { useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faQuoteLeft} from "@fortawesome/free-solid-svg-icons";


function SkillsDashboard() {

    return (
        <div className="skills-view">
            <Row>
                <Col sm={12} md={5} lg={5}>
                    <img className={'headshot-img'} src={'/images/kareem-headshot-crop.png'} alt={'kareem head shot'}></img>
                </Col>
                <Col sm={12} md={7} lg={7}>
                    <div className="short-blurb">
                        Hello my name is Kareem. Professor: News! Bad! We're bankrupt. Oh, I borrowed money to invest in Bitcoin. Then the price crashed, and I sold at a huge loss. We're ruined! Oh, sorry. I didn't realize you were watching TV. Morbo: The tragic impact destroyed the planet Klarg, along with its 50 billion inhabitants. Linda: [Laughs] In other news, Morbo, guess what's back? Morbo: The planet Klarg? Linda: Nope! The price of Bitcoin!
                    </div>
                    <button className={'btn btn-primary'}>Contact me</button>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={5} lg={5}>
                    <img className={'headshot-img'} src={'/images/kareem-headshot-crop.png'} alt={'kareem head shot'}></img>
                </Col>
                <Col sm={12} md={7} lg={7}>
                    <div className="short-blurb">
                        Hello my name is Kareem. Professor: News! Bad! We're bankrupt. Oh, I borrowed money to invest in Bitcoin. Then the price crashed, and I sold at a huge loss. We're ruined! Oh, sorry. I didn't realize you were watching TV. Morbo: The tragic impact destroyed the planet Klarg, along with its 50 billion inhabitants. Linda: [Laughs] In other news, Morbo, guess what's back? Morbo: The planet Klarg? Linda: Nope! The price of Bitcoin!
                    </div>
                    <button className={'btn btn-primary'}>Contact me</button>
                </Col>
            </Row>
        </div>
    );
}

export default SkillsDashboard;
