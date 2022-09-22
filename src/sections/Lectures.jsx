import React from "react";
import { PageCountdownTime } from "../components/PageCountdownTime";
import { PageSectionTitle } from "../components/PageSectionTitle";
import { Colors } from "../Constants";
import { PageTable } from "../components/PageTable";

const LectureList = [
  {
      name: 'Introduction',
      date: '09/08'
  },
  {
      name: 'Preliminary Concepts',
      date: '09/13'
  },
  {
      name: 'Comparison-Based Sorting',
      date: '09/15'
  },
  {
      name: 'Searching, Selection, and Non-Comparison Sorting',
      date: '09/20',
      readings: "Chapter 9"
  },
  {
      name: 'Greedy Algorithms 1',
      date: '09/22',
      readings: "Chapter 10"
  },
  {
      name: 'Greedy Algorithms 2',
      date: '09/27',
      readings: "Chapter 10"
  },
  {
      name: 'Dynamic Programming 1',
      date: '09/29',
      readings: 'Chapter 12'
  },
  {
      name: 'Dynamic Programming 2',
      date: '10/04',
      readings: 'Chapter 12'
  },
  {
      name: 'Divide & Conquer 1',
      date: '10/06',
      readings: 'Chapter 11'
  },
  {
      name: 'Divide & Conquer 2',
      date: '10/11',
      readings: 'Chapter 11'
  },
  {
      name: 'Data Structures 1 - Basic Data Structures',
      date: '10/13',
      readings: 'Chapter 2 & Chapter 5'
  },
  {
      name: 'Data Structures 2 - Trees',
      date: '10/18',
      readings: 'Chapter 4'
  },
  {
      name: 'Data Structures 3 - Hashing',
      date: '10/20',
      readings: 'Chapter 6'
  },
  {
      name: 'Graph Algorithms 1',
      date: '10/25',
      readings: 'Chapter 13'
  },
  {
      name: 'Graph Algorithms 2',
      date: '10/27',
      readings: 'Chapter 13'
  },
  {
      name: 'Text Processing and Pattern Matching, Search',
      date: '11/01'
  },
  {
      name: 'Computational Geometry 1',
      date: '11/03'
  },
  {
      name: 'Computational Geometry 2',
      date: '11/10'
  },
  {
      name: 'Limits of Computation 1',
      date: '11/15'
  },
  {
      name: 'Limits of Computation 2',
      date: '11/17'
  },
  {
      name: 'Limits of Computation 3',
      date: '11/29',
  },
  {
      name: 'External Memory Algorithmics 1',
      date: '12/01',
  },
  {
      name: 'External Memory Algorithmics 2',
      date: '12/06',
  }
]

const CourseLecture = (props) => {
  return (<>
    <tr>
          <th scope="row">
              <span>
                  {props.index}:&nbsp;
              </span>
              {props.name}
          </th>
          <td>
              {props.date}
          </td>
          <td>
              {props.readings}
          </td>
      </tr>
  </>)
}

export const Lectures = () => {
    return <section className="container-fluid d-flex flex-wrap flex-column my-5 px-0 px-sm-5" id="Lectures">
    <PageSectionTitle text="course lectures" />
    <div
      className="mx-4 mx-sm-5 mb-4 mb-sm-5"
      style={{ color: Colors.themeColor }}>
        <p>Lectures are on Tuesday and Thursday from 2:30 to 3:50PM. Lecture slides and recordings will be posted on Ed.</p>
    </div>
    <div
      className="mx-4 mx-sm-5 px-0 px-lg-5"
      style={{ color: Colors.themeColor }}
    >
        <PageTable
          tableheads={['lecture #', 'date', 'readings']}
          style={{ color: Colors.themeColor }}
        >
          {LectureList.map((lecture, index) => (
            <CourseLecture 
              name={lecture.name}
              date={lecture.date} 
              readings={lecture.readings}
              index={index}
              key={index}/>
          ))}
        </PageTable>
    </div>
</section>
}