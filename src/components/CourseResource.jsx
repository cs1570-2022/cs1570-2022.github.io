import React from "react";

export const CourseResource = ({ title, children }) => {
    return <div className="d-flex flex-column mb-4" style={{ color: "#77bf77" }}>
        <h3 className="text-capitalize">{title}</h3>
        {children}
    </div>
}