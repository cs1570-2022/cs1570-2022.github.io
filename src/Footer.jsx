import React from "react";
import { PageLink } from "./components/PageLink";
import { Links } from "./Configuration";

export const Footer = () => {
    return (
        <footer
        className="footer py-4 text-center"
        style={{color: '#77bf77', backgroundColor: '#111211'}}>
            <p className="mb-0">
                <i className="fas fa-copyright"></i>
                <page-link href="staff.html" text="CSCI1570 Course Staff"></page-link>
            </p>
            <p>
                <span className="d-inline-block mx-auto text-left">
                  <span className="d-flex flex-row justify-content-between">
                    <span className="me-2">
                        HTA:
                    </span>
                    <span>{Links.HTAEmail}</span>
                    <i className="fas fa-envelope mt-1" />
                  </span>
                  <span className="d-flex flex-row justify-content-between">
                    <span className="me-2">
                        TA:
                    </span>
                    <span>{Links.TAEmail}</span>
                    <i className="fas fa-envelope mt-1" />
                  </span>
                </span>
            </p>
            <p>
              CS1570 &bull;
              Fall 2022 &bull;
              <PageLink href={Links.professorPersonalPage} text="Lorenzo De Stefani" /> &bull;
              <PageLink href="https://cs.brown.edu" text="Brown University Computer Science" />
            </p>
      </footer>
    )
};