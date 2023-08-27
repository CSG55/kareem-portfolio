import React from "react";

const SummaryBlock = ({name, content}) =>
    <React.Fragment>
        <strong> {name}: </strong> <span>{content}</span>
    </React.Fragment>

export {
    SummaryBlock,
}