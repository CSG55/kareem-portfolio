import React from "react";

const SummaryBlock = ({name, content}) =>
    <div className={'summary-block'}>
        <strong> {name}: </strong> <span>{content}</span>
    </div>

export {
    SummaryBlock,
}