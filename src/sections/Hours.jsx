import React from "react";
import { PageSectionTitle } from "../components/PageSectionTitle";
import { Links } from "../Configuration";

export const Hours = () => {
    return <section className="container-fluid d-flex flex-wrap flex-column my-5 px-0 px-sm-5">
        <PageSectionTitle text="Hours" />
    <div
      className="mx-4 mx-sm-5 px-0 px-lg-5 flex-fill d-flex flex-column"
    >
        <h3>Notes For TA Hours:</h3>
        <ul>
            <li>Hours may be offered in-person or remotely via Zoom.</li>
            <li>Some TA hours are one-on-one (sign up on <a href='https://signmeup.cs.brown.edu/'>SignMeUp</a>), while others are open to all students to join. This information can be found on the course calendar, along with meeting time and location (Zoom link or CIT room #).</li>
            <li>Please always wear a mask when coming to in-person hours. Additionally, in order to safeguard everyone's health, please refrain from going to in-person hours if you are feeling unwell or experiencing symptoms.
                Reach out to the TA staff to inquire about further remote hours availability.</li>
        </ul>
        <p>Refer to the calendar below for the most up-to-date lecture and office hour schedule.</p>
        <iframe src={Links.externalCalendar} style={{ border: 0 }} width="100%" height="600" frameBorder="0" scrolling="no"></iframe>
    </div>
</section>
}