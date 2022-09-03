import React from "react";
import { PageLink } from "./PageLink";

export const HiddenLink = (props) => {
    const { name, href, time, placeholder } = props;

    // Time is a string
    const date = Date.parse(time);

    return (date >= Date.now) ?
        <span>{placeholder}</span> 
        : 
        <PageLink
            href={href}
            text={name} />
}