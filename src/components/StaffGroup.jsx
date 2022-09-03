import React from "react";
import { Colors } from "../Constants";
import { PageSectionTitle } from "./PageSectionTitle";
import { StaffCard } from "./StaffCard";

export const StaffGroup = (props) => {
    const { title, members } = props;
    return <section className="container-fluid d-flex flex-wrap flex-column my-5 px-0 px-sm-5">
        <PageSectionTitle text={title} />
        <div
            className="d-flex flex-row flex-wrap justify-content-center"
            style={{ color: Colors.primaryColor, fontSize: 'larger' }}
        >
            {members.map((member, index) => (
                <StaffCard {...member} key={index} />
            ))}
        </div>
    </section>
}