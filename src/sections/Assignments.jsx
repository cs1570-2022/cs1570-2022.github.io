import React from "react"
import { HiddenLink } from "../components/HiddenLink";
import { PageCountdownTime } from "../components/PageCountdownTime";
import { PageSectionTitle } from "../components/PageSectionTitle";
import { PageTable } from "../components/PageTable";
import { Colors } from "../Constants";
import { AssignmentsList } from "../AssignmentList";

export const CourseAssignment = (props) => {
    const { handoutURL, name, out, due, latexTemplateURL, solutionURL } = props;
    return <tr>
        <th scope="row">
            <HiddenLink href={handoutURL} name={name} time={out} />
        </th>
        <td>
            <PageCountdownTime date={out} />
        </td>
        <td>
            <PageCountdownTime date={due} />
        </td>
        <td>
            <HiddenLink href={latexTemplateURL} name="TeX" time={out} hide={true} />
        </td>
        <td>
            <HiddenLink href={solutionURL} name="Solution" time={out} hide={true} />
        </td>
    </tr>
}

export const Assignments = () => {
    return <section className="container-fluid d-flex flex-wrap flex-column my-5 px-0 px-sm-5" id="Assignments">
            <PageSectionTitle
                text="course assignments"
            />
            <div
            className="mx-4 mx-sm-5 px-0 px-lg-5"
            style={{ color: Colors.primaryColor }}
            >
                <p>All assignments must be typeset using LateX and submitted on <a href='https://www.gradescope.com'>Gradescope</a>.</p>
                <p>Please refer to the syllabus for the collaboration policy and late submission policy of the class.</p>
                <p>
                    <b>LaTeX Note:</b> If you want to use the provided LaTeX templates for the assignments, you will need to download <mark>cs.cls</mark> and <mark>cs157.cls</mark> from the <a>Resources</a> section below, and place them in your LaTeX environment in a folder called <mark>common</mark>.
                </p>
                <PageTable
                    tableheads={["Assignment #", "Out", "Due", "LaTeX", "Solution"]}
                >
                    {AssignmentsList.map((assignment, index) => (
                        <CourseAssignment {...assignment } key={index} />
                    ))}
                </PageTable>
            </div>
        </section>
}