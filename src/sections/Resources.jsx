import React from "react";
import { CourseResource } from "../components/CourseResource";
import { PageLink } from "../components/PageLink";
import { PageSectionTitle } from "../components/PageSectionTitle";
import { Links } from "../Configuration";
import { Colors } from "../Constants";

const CourseDocuments = () => {
    return <section className="container-fluid d-flex flex-wrap flex-row my-5 px-0 px-sm-5" id="Resources">
        <PageSectionTitle
            text="course documents"
        />
        <div
            className="mx-4 mx-sm-5 px-0 px-lg-5 flex-fill d-flex flex-column"
            style={{ color: Colors.primaryColor, fontSize: 'larger' }}
        >
            <CourseResource title="course syllabus">
                <p>
                Please find the course syllabus <PageLink title="course syllabus" href="content/resources/syllabus.pdf" text="here" />.
                The collaboration policy and the late day policy for all assignments of the class (Homework and Midterms) are presented in detail in the syllabus.
                </p>
            </CourseResource>
            <CourseResource title="gradescope">
                <p>
                Instructions on how to set up Gradescope can be found <PageLink title="gradescope" href="content/resources/gradescopeGuide.pdf" text="here" />
                </p>
            </CourseResource>
            <CourseResource title="anonymous id form">
                <p>
                If you would like to be graded under an anonymous id, please fill out the following form <PageLink title="anonymous-id-form" href={Links.anonymousFeedback} text="here" />
                </p>
            </CourseResource>
            <CourseResource title="ed">
                <p>
                Our course Ed page can be found <PageLink title="ed" href={Links.edstem} text="here" />
                </p>
            </CourseResource>
            <CourseResource title="LaTeX">
                <ul>
                    <li><PageLink href="content/resources/PseudocodeGuide.pdf" text="Pseudocode Guide" /></li>
                    <li><PageLink href="content/resources/CS157LatexLinks.pdf" text="Getting Started with LaTeX" title="getting started with latex" /></li>
                    <li><PageLink href="content/resources/cs.cls" text="cs.cls file" title="latex template" /></li>
                    <li><PageLink href="content/resources/cs157.cls" text="cs157.cls file" title="latex template" /></li>
                </ul>
            </CourseResource>
        </div>
    </section>
}

const ExternalResources = () => (
    <section className="container-fluid d-flex flex-wrap flex-row my-5 px-0 px-sm-5">
        <PageSectionTitle
            text="External Resources"
        />
        <div
            className="mx-4 mx-sm-5 px-0 px-lg-5 flex-fill d-flex flex-column"
            style={{ color: Colors.primaryColor, fontSize: 'larger' }}
        >
            <CourseResource title="Department Resources">
                <ul>
                    <li><PageLink title="ugrad-missive-link" href="http://cs.brown.edu/courses/ta/pubs/ugrad_missive.pdf" text="Undergraduate Missive"></PageLink></li>
                    <li><PageLink title="di-resource-link" href="http://cs.brown.edu/about/diversity/resources/" text="Diversity and Inclusion"></PageLink></li>
                    <li><PageLink title="student-di-resource-link" href="https://cs.brown.edu/about/diversity/student-advocates-diversity-and-inclusion/" text="Student Advocates for Diversity and Inclusion"></PageLink></li>
                    <li><PageLink title="wics-resource-link" href="https://cs.brown.edu/people/orgs/wics/" text="Women in Computer Science"></PageLink></li>
                    <li><PageLink title="mosaic-resource-link" href="https://mosaic-plus-brown.github.io/mosaic/" text="MOSAIC+"></PageLink></li>
                </ul>
            </CourseResource>
            <CourseResource title="Brown CS Health and Wellness">
                <p>If you need accommodation for your physical and mental health, please feel free to reach out to Professor De Stefani - we want to support you as much as we can in the most comfortable way for you. It is important to note that TAs should not be handling health and accomodations information, so inquiries should be directed towards the professor only.</p>
                <ul>
                    <li>Resources for Physical/Mental Health, Accessibility and Accommodations can be found <PageLink title="hw-resource-link" href="https://cs.brown.edu/media/filer_public/03/0a/030a6a2e-7a61-4c30-98c1-dce87b9d9899/brown_cs_health_and_wellness_resources.pdf" text="here"></PageLink>.</li>
                </ul>
            </CourseResource>
        </div>
    </section>
)

const OtherResources = () => (
    <section className="container-fluid flex-wrap flex-row my-5 px-0 px-sm-5">
        <PageSectionTitle
            text="other"
        />
        <div
            className="mx-4 mx-sm-5 px-0 px-lg-5 flex-fill d-flex flex-column"
            style={{ color: Colors.primaryColor, fontSize: 'larger' }}
        >
            <CourseResource title="Image Credits">
                <p>All images are from Unsplash. Unsplash's license can be found
                    <PageLink title="mosaic-resource-link" href="https://unsplash.com/license" text="here"></PageLink>
                </p>
                <ul>
                    <li>Algorithms - cover photo by Jason Jarrach</li>
                    <li>Lectures - cover photo by Maarten van den Heuvel</li>
                    <li>Assignments - cover photo by Jorge Zapata</li>
                    <li>Hours - cover photo by Sorin Gheorghita</li>
                    <li>Staff - cover photo by Fabrizio Magoni</li>
                    <li>Resources - cover photo by Calum Lewis</li>
                </ul>
            </CourseResource>
        </div>
    </section>
)

export const Resources = () => {
    return <>
        <CourseDocuments />
        <ExternalResources />
        <OtherResources />
    </>
}