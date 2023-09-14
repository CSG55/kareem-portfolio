import React from 'react';
import {OverlayTrigger, Popover} from "react-bootstrap";

const PortfolioPopover = ({ position, title, body, children }) => {
    const CustomPopover = (
        <Popover className={'p-10'} id={title} header={title}>
            <Popover.Header><b>{title}</b></Popover.Header>
            <Popover.Body>{body}</Popover.Body>
        </Popover>
    );

    return (
        <OverlayTrigger
            trigger={['hover', 'focus', 'click']}
            placement={position}
            overlay={CustomPopover}
            rootClose
        >
            {children}
        </OverlayTrigger>
    );
};
export default PortfolioPopover;



