import React from "react";
import { PageLink } from "./PageLink";
import { Links } from "../Configuration";

export const HiddenLink = (props) => {
    const { name, href, time, hide } = props;

    // Time is a string;
    const properDate = new Date(time);
    properDate.setFullYear(Links.year);

    return (properDate.valueOf() >= Date.now()) ?
        (hide ? <></> : <span>{name}</span>) 
        : 
        <PageLink
            href={href}
            text={name} />
}