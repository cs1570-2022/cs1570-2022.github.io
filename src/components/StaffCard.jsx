import React, { useState } from "react";
import { Colors } from "../Constants";

export const StaffCard = (props) => {
    const {theme, personalPhotoURL, themePhotoURL, name, note} = props;
    const [hover, setHover] = useState(false);
    return <div
        className="card text-center m-4"
        style={{ borderColor: Colors.primaryColor }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
    >
        <div
            className="card-header text-muted font-weight-light"
            style={{ fontSize: "medium" }}
        >
            {theme}
        </div>
        <div
            className="card-img-top"
            style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '300px', height: '350px' }}
        >
            {hover && personalPhotoURL ? 
                <img src={personalPhotoURL} width={300} height={350} />
                :
                <img src={themePhotoURL ?? "content/staff/default.png"} width={300} height={350} />}
        </div>
        <div className="card-body d-flex flex-column justify-content-center">
            <h5 className="card-title mb-0">
                {name}
            </h5>
            <p className="card-text mb-0">
                {note}
            </p>
        </div>
    </div>
}