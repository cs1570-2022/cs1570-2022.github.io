import React from "react";
import { PageLink } from "./PageLink";

export const HiddenLink = (props) => {
    const { name, href, time, hide } = props;

    // Time is a string
    const date = Date.parse(time);

    return (date <= Date.now()) ?
        (hide ? <></> : <span>{name}</span>) 
        : 
        <PageLink
            href={href}
            text={name} />
}