import React from "react";
import { Colors } from "../Constants";

export const PageTable = (props) => {
    return <table className="table table-borderless table-hover table-responsive-sm table-striped">
    <thead style={{ backgroundColor: Colors.stopColor }}>
        <tr>
            {props.tableheads.map((tablehead, index) => (
                <th
                    key={index}
                    scope="col"
                    className="text-capitalize"
                >
                    {tablehead}
                </th>
            ))}
            
        </tr>
    </thead>
    <tbody>
        {props.children}
    </tbody>
</table>
}