import React from "react";
import { PageSectionTitle } from "../components/PageSectionTitle";
import { Links } from "../Configuration";

export const Hours = () => {
    return <section className="container-fluid d-flex flex-wrap flex-column my-5 px-0 px-sm-5" id="Hours">
        <PageSectionTitle text="Hours" />
    <div
      className="mx-4 mx-sm-5 px-0 px-lg-5 flex-fill d-flex flex-column"
    >
        <h3>Notes For TA Hours:</h3>
        <ul>
            <li>All listed hours are planned to be in person at the location specified (unless otherwise specified).</li>
            <li>Hours will follow an <i><b>open hours</b></i> format, where students can work together in groups to brainstorm solutions, and ask the TA for help where needed.</li>
            <li>In order to safeguard everyone's health, please refrain from going to in-person hours if you are feeling unwell or experiencing symptoms.
                Reach out to the TA staff to inquire about remote hours availability.</li>
        </ul>
        <p>Refer to the calendar below for the most up-to-date lecture and office hour schedule. You must be logged in with your school email to see the calendar below.</p>
        <iframe src={Links.externalCalendar} style={{ border: 0 }} width="100%" height="600" frameBorder="0" scrolling="no"></iframe>
    </div>
</section>
}