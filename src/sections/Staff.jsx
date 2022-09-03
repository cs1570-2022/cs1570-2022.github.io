import React from "react";
import { StaffGroup } from "../components/StaffGroup";
import { HTAS, PROFESSORS, UTAS } from "../Configuration";

export const Staff = () => {
    return <section id="Staff">
        <StaffGroup title="Professor" members={PROFESSORS} />
        <StaffGroup title="HTA" members={HTAS} />
        <StaffGroup title="UTAs" members={UTAS} /> 
    </section>
}