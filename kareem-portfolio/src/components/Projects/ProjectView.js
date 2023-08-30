import React, {useRef} from 'react';
import {Col, Row} from "react-bootstrap";
import {SummaryBlock} from "../common";
import ImageGallery from "react-image-gallery";


function ProjectView({title, mission, role, stack, date, description, image}) {
    const imageGalleryRef = useRef(null);

    const onImageClickHandler = () => {
        console.log(imageGalleryRef.current)
        if (imageGalleryRef.current.state.isFullscreen){
            imageGalleryRef.current.exitFullScreen();
        } else {
            imageGalleryRef.current.fullScreen();

        }
    };

    const images = [
        {
            original: image,
            originalAlt:`${title} project photo`,
        },
    ];

    return (
        <div className="project-view">
            <Row>
                <Col className={'project-img'} sm={12} md={8} lg={8}>
                    <ImageGallery
                        items={images}
                        showPlayButton={false}
                        useBrowserFullscreen={false}
                        ref={imageGalleryRef}
                        onClick={onImageClickHandler}
                    />
                </Col>
                <Col sm={12} md={4} lg={4}>
                    <div className="project-summary">
                        {title &&
                            <SummaryBlock name={'Project'} content={title}/>
                        }
                        {mission &&
                            <SummaryBlock name={'Mission'} content={mission}/>
                        }
                        {role &&
                            <SummaryBlock name={'Role'} content={role}/>
                        }
                        {stack &&
                            <SummaryBlock name={'Stack'} content={stack}/>
                        }
                        {date &&
                            <SummaryBlock name={'Date'} content={date}/>
                        }
                    </div>
                    {description &&
                        <div className="project-description">
                            {description}
                        </div>
                    }
                </Col>
            </Row>
        </div>
    );
}

export default ProjectView;