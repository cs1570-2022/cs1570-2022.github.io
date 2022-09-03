import React from "react";
import { PageSectionTitle } from "../components/PageSectionTitle";
import { Colors } from "../Constants";
import { Links } from "../Configuration";

const CSPrereq = (props) => {
    return <a
        className="px-4 mx-2 second-prereq badge text-white"
        rel="noreferrer"
        target="_blank"
        href={`https://cs.brown.edu/courses/csci${props.courseNum}`}
        style={{ backgroundColor: Colors.stopColor }}
    >
        CSCI {props.courseNum}
  </a>
}

export const Algorithms = () => {

    return <> 
        <section className="container-fluid d-flex flex-wrap flex-row my-5 px-0 px-sm-5">
            <PageSectionTitle
              text="course info"
            />
            <div
              className="flex-fill d-flex flex-column ml-4 ml-sm-5"
              style={{ color: Colors.stopColor, fontSize: 'larger' }}
            >
                <div id="course-syllabus-container" className="mb-4">
                    <span className="mr-4">
                        <i className="far fa-comment fa-lg" title="course syllabus"></i>
                    </span>
                    <span id="course-syllabus">
                        <a href="content/resources/syllabus.pdf" target="_blank">Syllabus</a>
                    </span>
                </div>
                <div id="gradescope-container" className="mb-4">
                    <span className="mr-4">
                        <i className="far fa-comment fa-lg" title="gradescope"></i>
                    </span>
                    <span id="gradescope">
                        <a href={Links.gradescope} target="_blank">Gradescope</a>
                    </span>
                </div>
                <div id="ed-container" className="mb-4" >
                    <span style={{ marginRight: "2rem" }}>
                        <i className="far fa-question fa-lg" title="ed"></i>
                    </span>
                    <span id="ed-info">
                        <a href={Links.edstem} target="_blank">Ed Platform</a>
                    </span>
                </div>
                <div id="anonymous-feedback-container" className="mb-4">
                    <span className="mr-4">
                        <i className="far fa-comment fa-lg" title="feedback form"></i>
                    </span>
                    <span id="anoynmous-feedback-form-info">
                        <a href={Links.anonymousFeedback} target="_blank">Anonymous Feedback Form</a>
                    </span>
                </div>
                <div id="time-container" className="d-flex flex-row mb-4">
                      <span className="mr-4">
                          <i className="far fa-calendar-alt fa-lg" title="class time"></i>
                      </span>
                      <div>
                          <p id="class-time" className="d-flex flex-row justify-content-between mb-1">
                              <span id="time-start">2:30PM</span>
                              <span className="me-2 ms-2">--</span>
                              <span id="time-end">3:50PM</span>
                              <span id="time-duration" className="d-none d-sm-inline-block font-weight-light text-muted mx-1 px-4 border-bottom">1Hr 20Mins</span>
                          </p>
                          <p id="day-of-week-badges" className="d-flex flex-column flex-sm-row ">
                              <span id="time-tuesday" className="mx-2 mb-2 mb-sm-0 px-4 day-of-week badge badge-pill text-white" style={{ backgroundColor: Colors.stopColor}}>T</span>
                              <span id="time-thursday" className="mx-2 mb-2 mb-sm-0 px-4 day-of-week badge badge-pill text-white" style={{ backgroundColor: Colors.stopColor}}>Th</span>
                          </p>
                      </div>
                  </div>
                  <div id="location-container" className="mb-4">
                      <span className="mr-4">
                          <i className="far fa-building fa-lg" title="location"></i>
                      </span>
                      <span id="class-location">
                          {Links.location}
                      </span>
                  </div>
            </div>
        </section>
        <section className="container-fluid d-flex flex-wrap flex-row my-5 px-0 px-sm-5">
        <PageSectionTitle
          text="Course Material"
          />
        <div
          className="flex-fill d-flex flex-column ml-4 ml-sm-5"
          style={{ color: Colors.stopColor, fontSize: 'larger' }}
        >
            <div className="d-flex flex-row mb-4">
                <span className="mr-4">
                    <i className="fas fa-book fa-lg" title="textbook"></i>
                </span>
                <span>
                    <div
                      id="textbook-container"
                      className="d-flex flex-column">
                        <span>
                            Algorithm Design and Applications
                            <span className="text-muted font-weight-light ms-2" style={{ fontSize: "small" }}>
                                by Goodrich and Tamassia
                            </span>
                        </span>
                        <ul className="list-inline ml-2">
                            <li className="list-inline-item">
                                <a
                                  href="https://www.amazon.com/Algorithm-Design-Applications-Michael-Goodrich/dp/1118335910"
                                  title="Buy from Amazon"
                                  rel="noreferrer"
                                  target="_blank"
                                  className="mx-2 font-weight-light"
                                  style={{ fontSize: "smaller" }}
                                >
                                    <i className="fab fa-amazon me-1"></i>
                                    Buy from Amazon
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a
                                  href="https://insite.browntextbook.com/CourseMaterials?Ids=10751730"
                                  title="Buy from Brown Bookstore"
                                  rel="noreferrer"
                                  target="_blank"
                                  className="mx-2 font-weight-light"
                                  style={{ fontSize: "smaller" }}
                                >
                                    <i className="fas fa-store me-1"></i>
                                    Buy from Brown Bookstore
                              </a>
                            </li>
                        </ul>
                    </div>
                </span>
            </div>
        </div>
    </section>
    </>
}