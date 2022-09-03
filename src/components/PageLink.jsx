import React from "react";

export const PageLink = (props) => {
    const { href, text } = props;
    return href ? 
        <a
            href={href}
            rel="noreferrer"
            target="_blank"
            >
            <i className="fas fa-link mr-1" />
            {text}
        </a>
        :
        <></>
}