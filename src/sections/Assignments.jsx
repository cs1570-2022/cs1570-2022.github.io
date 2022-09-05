import React from "react"
import { HiddenLink } from "../components/HiddenLink";
import { PageCountdownTime } from "../components/PageCountdownTime";
import { PageSectionTitle } from "../components/PageSectionTitle";
import { PageTable } from "../components/PageTable";
import { Colors } from "../Constants";

const AssignmentsList = [
    {
        name: 'Homework 0',
        handoutURL: '../content/homeworks/hw0.pdf',
        out: '09/08 12:00 pm',
        due: '09/13 2:30 pm',
        latexTemplateURL: '',
        solutionURL: '',
    },
    {
        name: 'Homework 1',
        handoutURL: '../content/homeworks/hw1.pdf',
        out: '09/13 3:50 pm',
        due: '09/20 2:30 pm',
        latexTemplateURL: '../content/homeworks/hw1.tex',
        solutionURL: '../content/homeworks/hw1-sol.pdf',
    },
    {
        name: 'Homework 2',
        handoutURL: '../content/homeworks/hw2.pdf',
        out: '09/20 3:50 pm',
        due: '09/27 2:30 pm',
        latexTemplateURL: '../content/homeworks/hw2.tex',
        solutionURL: '../content/homeworks/hw2-sol.pdf',
    },
    {
        name: 'Homework 3',
        handoutURL: '../content/homeworks/hw3.pdf',
        out: '09/27 3:50 pm',
        due: '10/04 2:30 pm',
        latexTemplateURL: '../content/homeworks/hw3.tex',
        solutionURL: '../content/homeworks/hw3-sol.pdf',
    },
    {
        name: 'Homework 4',
        handoutURL: '../content/homeworks/hw4.pdf',
        out: '10/04 3:50 pm',
        due: '10/11 2:30 pm',
        latexTemplateURL: '../content/homeworks/hw4.tex',
        solutionURL: '../content/homeworks/hw4-sol.pdf',
    },
    {
        name: 'Homework 5',
        handoutURL: '../content/homeworks/hw5.pdf',
        out: '10/11 3:50 pm',
        due: '10/18 2:30 pm',
        latexTemplateURL: '../content/homeworks/hw5.tex',
        solutionURL: '../content/homeworks/hw5-sol.pdf',
    },
    {
        name: 'Homework 6',
        handoutURL: '../content/homeworks/hw6.pdf',
        out: '10/25 3:50 pm',
        due: '11/01 2:30 pm',
        latexTemplateURL: '../content/homeworks/hw6.tex',
        solutionURL: '../content/homeworks/hw6-sol.pdf',
    },
    {
        name: 'Homework 7',
        handoutURL: '../content/homeworks/hw7.pdf',
        out: '11/1 3:50 pm',
        due: '11/10 2:30 pm',
        latexTemplateURL: '../content/homeworks/hw7.tex',
        solutionURL: '../content/homeworks/hw7-sol.pdf',
    },
    {
        name: 'Homework 8',
        handoutURL: '../content/homeworks/hw8.pdf',
        out: '11/10 3:50 pm',
        due: '11/17 2:30 pm',
        latexTemplateURL: '../content/homeworks/hw8.tex',
        solutionURL: '../content/homeworks/hw8-sol.pdf',
    },
    {
        name: 'Homework 9',
        handoutURL: '../content/homeworks/hw9.pdf',
        out: '11/17 3:50 pm',
        due: '12/01 2:30 pm',
        latexTemplateURL: '../content/homeworks/hw9.tex',
        solutionURL: '../content/homeworks/hw9-sol.pdf',
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