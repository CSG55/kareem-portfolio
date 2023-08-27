import React from "react";

const SummaryBlock = (name, content) =>
    <span>
        <strong> {name}: </strong> <span>{content}</span>
    </span>

export {
    SummaryBlock,
}