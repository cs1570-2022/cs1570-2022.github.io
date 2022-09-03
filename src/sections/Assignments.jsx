import React from "react"
import { HiddenLink } from "../components/HiddenLink";
import { PageCountdownTime } from "../components/PageCountdownTime";
import { PageSectionTitle } from "../components/PageSectionTitle";
import { PageTable } from "../components/PageTable";
import { Colors } from "../Constants";
import format from "date-fns/format";

const AssignmentsList = [
    {
        name: 'Homework 0',
        handoutURL: '../content/homeworks/hw0-2021.pdf',
        out: '09/12 12:00pm',
        due: '09/23 2:30pm',
        latexTemplateURL: '../content/homeworks/hw0-2021.tex',
        solutionName: '',
        solutionURL: '',
    },
    {
        name: 'Homework 1',
        handoutURL: '../content/homeworks/hw1-2021.pdf',
        out: '09/14 2:30pm',
        due: '09/21 2:30pm',
        latexTemplateURL: '../content/homeworks/hw1-2021.tex',
        solutionURL: '../content/homeworks/hw1-2021-sol.pdf',
    },
    {
        name: 'Homework 2',
        handoutURL: '../content/homeworks/hw2-2021.pdf',
        out: '09/21 2:30pm',
        due: '09/28 2:30pm',
        latexTemplateURL: '../content/homeworks/hw2-2021.tex',
        solutionURL: '../content/homeworks/hw2-2021-sol.pdf',
    },
    {
        name: 'Homework 3',
        handoutURL: '../content/homeworks/hw3-2021.pdf',
        out: '09/28 2:30pm',
        due: '10/05 2:30pm',
        latexTemplateURL: '../content/homeworks/hw3-2021.tex',
        solutionURL: '../content/homeworks/hw3-2021-sol.pdf',
    },
    {
        name: 'Homework 4',
        handoutURL: '../content/homeworks/hw4-2021.pdf',
        out: '10/05 2:30pm',
        due: '10/13 2:30pm',
        latexTemplateURL: '../content/homeworks/hw4-2021.tex',
        solutionURL: '../content/homeworks/hw4-2021-sol.pdf',
    },
    {
        name: 'Homework 5',
        handoutURL: '../content/homeworks/hw5-2021.pdf',
        out: '10/12 2:30pm',
        due: '10/19 2:30pm',
        latexTemplateURL: '../content/homeworks/hw5-2021.tex',
        solutionURL: '../content/homeworks/hw5-2021-sol.pdf',
    },
    {
        name: 'Homework 6',
        handoutURL: '../content/homeworks/hw6-2021.pdf',
        out: '11/02 2:30pm',
        due: '11/09 2:30pm',
        latexTemplateURL: '../content/homeworks/hw6-2021.tex',
        solutionURL: '../content/homeworks/hw6-2021-sol.pdf',
    },
    {
        name: 'Homework 7',
        handoutURL: '../content/homeworks/hw7-2021.pdf',
        out: '11/09 2:30pm',
        due: '11/16 2:30pm',
        latexTemplateURL: '../content/homeworks/hw7-2021.tex',
        solutionURL: '../content/homeworks/hw7-2021-sol.pdf',
    },
    {
        name: 'Homework 8',
        handoutURL: '../content/homeworks/hw8-2021.pdf',
        out: '11/16 2:30pm',
        due: '11/23 2:30pm',
        latexTemplateURL: '../content/homeworks/hw8-2021.tex',
        solutionURL: '../content/homeworks/hw8-2021-sol.pdf',
    },
    {
        name: 'Homework 9',
        handoutURL: '../content/homeworks/hw9-2021.pdf',
        out: '11/30 2:30pm',
        due: '12/07 2:30pm',
        latexTemplateURL: '../content/homeworks/hw9-2021.tex',
        solutionURL: '../content/homeworks/hw9-2021-sol.pdf',
    },
];

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
            <HiddenLink href={latexTemplateURL} name="Latex Template" time={out} />
        </td>
        <td>
            <HiddenLink href={solutionURL} name="Latex Template" time={out} />
        </td>
    </tr>
}

export const Assignments = () => {
    return <section className="container-fluid d-flex flex-wrap flex-column my-5 px-0 px-sm-5">
            <PageSectionTitle
                text="course assignments"
            />
            <div
            className="mx-4 mx-sm-5 px-0 px-lg-5"
            style={{ color: Colors.primaryColor }}
            >
                <p>All assignments must be typeset using LateX and submitted on <a href='https://www.gradescope.com'>Gradescope</a> (course code: D5G63D)</p>
                <p>Please refer to the syllabus for the collaboration policy and late submission policy of the class.</p>
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