import pageClickCopy from './page-click-copy.js';
import pageCountdownTime from './page-countdown-time.js';
import pageLinks from './page-links.js';
import pageTable from './page-table.js';
import pageSectionTitle from './page-section.js';

const courseLecture = {
    props: {
        index: Number,
        name: String,
        date: String,
        noteNames: Array,
        noteURLs: Array,
        readingNames: Array,
        readingURLs: Array,
        recordingNames: Array,
        recordingURLs: Array,
        now: Object,
    },
    components: {
        'page-click-copy': pageClickCopy,
        'page-countdown-time': pageCountdownTime,
        'page-links': pageLinks,
    },
    data: function () {
        return {
            outMoment: this.parseTime(this.date),
        };
    },
    methods: {
        parseTime: function (timeStr) {
            let timeObj = moment(timeStr, ['MM/DD', 'YYYY/MM/DD'], true);
            if (timeObj.isValid()) {
                timeObj.hour(14);
                timeObj.minute(30);
            } else {
                timeObj = moment(timeStr, [
                    'MM/DD HH:mm',
                    'MM/DD hh:mm a',
                    'MM/DD hh a',
                    'YYYY/MM/DD HH:mm',
                    'YYYY/MM/DD hh:mm a',
                    'YYYY/MM/DD hh a',
                ]);
            }
            return timeObj;
        },
    },
    template: `
        <tr>
            <th scope="row">
                <span>
                    {{index}}:
                </span>
                <page-click-copy
                  :text="name"
                >
                </page-click-copy>
            </th>
            <td>
                <page-countdown-time
                  name="deliver"
                  :time="outMoment"
                  :now="now"
                >
                </page-countdown-time>
            </td>
            <td>
                <page-links
                  :names="noteNames"
                  :urls="noteURLs"
                >
                </page-links>
            </td>
            <td>
                <page-links
                  :names="readingNames"
                  :urls="readingURLs"
                >
                </page-links>
            </td>
            <td>
                <page-links
                  :names="recordingNames"
                  :urls="recordingURLs"
                >
                </page-links>
            </td>
        </tr>
    `,
};

Vue.component('page-content', {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'course-lecture': courseLecture,
        'page-table': pageTable,
        'page-section-title': pageSectionTitle,
    },
    data: function () {
        return {
            lectures: [
                {
                    name: 'Introduction',
                    date: '09/09',
                    readingNames: [],
                    readingURLs: [],
                    noteNames: [],
                    noteURLs: [],
                    recordingNames: [],
                    recordingURLs: [],
                },
                {
                    name: 'Preliminary Concepts',
                    date: '09/14',
                    readingNames: [],
                    readingURLs: [],
                    noteNames: [],
                    noteURLs: [],
                    recordingNames: [],
                    recordingURLs: [],
                },
                {
                    name: 'Comparison-Based Sorting',
                    date: '09/16',
                    readingNames: [],
                    readingURLs: [],
                    noteNames: [],
                    noteURLs: [],
                    recordingNames: [],
                    recordingURLs: [],
                },
                {
                    name: 'Searching, Selection, and Non-Comparison Sorting',
                    date: '09/21',
                    readingNames: [],
                    readingURLs: [],
                    noteNames: [],
                    noteURLs: [],
                    recordingNames: [],
                    recordingURLs: [],
                },
                {
                    name: 'Greedy Algorithms 1',
                    date: '09/23',
                    readingNames: [],
                    readingURLs: [],
                    noteNames: [],
                    noteURLs: [],
                    recordingNames: [],
                    recordingURLs: [],
                },
                {
                    name: 'Greedy Algorithms 2',
                    date: '09/28',
                    readingNames: [],
                    readingURLs: [],
                    noteNames: [],
                    noteURLs: [],
                    recordingNames: [],
                    recordingURLs: [],
                },
                {
                    name: 'Dynamic Programming 1',
                    date: '09/30',
                    readingNames: [],
                    readingURLs: [],
                    noteNames: [],
                    noteURLs: [],
                    recordingNames: [],
                    recordingURLs: [],
                },
                {
                    name: 'Dynamic Programming 2',
                    date: '10/05',
                    readingNames: [],
                    readingURLs: [],
                    noteNames: [],
                    noteURLs: [],
                    recordingNames: [],
                    recordingURLs: [],
                },
                {
                    name: 'Divide & Conquer 1',
                    date: '10/07',
                    readingNames: [],
                    readingURLs: [],
                    noteNames: [],
                    noteURLs: [],
                    recordingNames: [],
                    recordingURLs: [],
                },
                {
                    name: 'Divide & Conquer 2',
                    date: '10/12',
                    readingNames: [],
                    readingURLs: [],
                    noteNames: [],
                    noteURLs: [],
                    recordingNames: [],
                    recordingURLs: [],
                },
                {
                    name: 'Data Structures 1 - Basic Data Structures',
                    date: '10/14',
                    readingNames: [],
                    readingURLs: [],
                    noteNames: [],
                    noteURLs: [],
                    recordingNames: [],
                    recordingURLs: [],
                },
                {
                    name: 'Data Structures 2 - Trees',
                    date: '10/19',
                    readingNames: [],
                    readingURLs: [],
                    noteNames: [],
                    noteURLs: [],
                    recordingNames: [],
                    recordingURLs: [],
                },
                {
                    name: 'Data Structures 3 - Hashing',
                    date: '10/21',
                    readingNames: [],
                    readingURLs: [],
                    noteNames: [],
                    noteURLs: [],
                    recordingNames: [],
                    recordingURLs: [],
                },
                {
                    name: 'Graph Algorithms 1',
                    date: '10/26',
                    readingNames: [],
                    readingURLs: [],
                    noteNames: [],
                    noteURLs: [],
                    recordingNames: [],
                    recordingURLs: [],
                },
                {
                    name: 'Graph Algorithms 2',
                    date: '10/28',
                    readingNames: [],
                    readingURLs: [],
                    noteNames: [],
                    noteURLs: [],
                    recordingNames: [],
                    recordingURLs: [],
                },
                {
                    name: 'Text Processing and Pattern Matching, Search',
                    date: '11/02',
                    readingNames: [],
                    readingURLs: [],
                    noteNames: [],
                    noteURLs: [],
                    recordingNames: [],
                    recordingURLs: [],
                },
                {
                    name: 'Computational Geometry 1',
                    date: '11/04',
                    readingNames: [],
                    readingURLs: [],
                    noteNames: [],
                    noteURLs: [],
                    recordingNames: [],
                    recordingURLs: [],
                },
                {
                    name: 'Computational Geometry 2',
                    date: '11/09',
                    readingNames: [],
                    readingURLs: [],
                    noteNames: [],
                    noteURLs: [],
                    recordingNames: [],
                    recordingURLs: [],
                },
                {
                    name: 'Limits of Computation 1',
                    date: '11/11',
                    readingNames: [],
                    readingURLs: [],
                    noteNames: [],
                    noteURLs: [],
                    recordingNames: [],
                    recordingURLs: [],
                },
                {
                    name: 'Limits of Computation 2',
                    date: '11/16',
                    readingNames: [],
                    readingURLs: [],
                    noteNames: [],
                    noteURLs: [],
                    recordingNames: [],
                    recordingURLs: [],
                },
                {
                    name: 'Limits of Computation 3',
                    date: '11/18',
                    readingNames: [],
                    readingURLs: [],
                    noteNames: [],
                    noteURLs: [],
                    recordingNames: [],
                    recordingURLs: [],
                },
                {
                    name: 'External Memory Algorithmics 1',
                    date: '11/30',
                    readingNames: [],
                    readingURLs: [],
                    noteNames: [],
                    noteURLs: [],
                    recordingNames: [],
                    recordingURLs: [],
                },
                {
                    name: 'External Memory Algorithmics 2',
                    date: '12/02',
                    readingNames: [],
                    readingURLs: [],
                    noteNames: [],
                    noteURLs: [],
                    recordingNames: [],
                    recordingURLs: [],
                },
                {
                    name: 'TBD',
                    date: '12/07',
                    readingNames: [],
                    readingURLs: [],
                    noteNames: [],
                    noteURLs: [],
                    recordingNames: [],
                    recordingURLs: [],
                },
            ],
            now: moment(),
            tableheads: [
                'lecture #',
                'date',
                'slides',
                'readings',
                'recording',
            ],
        };
    },
    created: function () {
        setInterval(() => (this.now = moment()), 1000);
    },
    mounted: function () {
        const element = this.$el;
        document.addEventListener(
            'DOMContentLoaded',
            function () {
                element.scrollIntoView(true);
                window.scrollBy(0, -150);
            },
            false
        );
    },
    template: `
        <main>
            <section class="container-fluid d-flex flex-wrap flex-column my-5 px-0 px-sm-5">
                <page-section-title
                  :icon-classes="curPageIconClasses"
                  text="course lectures"
                  :style-object="{'color': curPageThemeColor}"
                  :text-style-object="{'border-bottom': 'solid thick'}"
                ></page-section-title>
                <div
                  class="mx-4 mx-sm-5 mb-4 mb-sm-5"
                  :style="{ color: curPageThemeColor}">
                    <p>Lectures are on Tuesday and Thursday from 2:30 to 3:50PM. Lecture slides and recordings will be posted on Ed.</p>
                </div>
                <div
                  class="mx-4 mx-sm-5 px-0 px-lg-5"
                  :style="{ color: curPageThemeColor}"
                >
                    <page-table
                      :tableheads="tableheads"
                      tableheadBackground="rgba(111, 82, 142, 0.2)"
                      :style="{ color: curPageThemeColor}"
                    >
                        <course-lecture
                          v-for="(lecture, index) of lectures"
                          :key="index"
                          v-bind="lecture"
                          :index="index + 1"
                          :now="now"
                        >
                        </course-lecture>
                    </page-table>
                </div>
            </section>
        </main>
    `,
});
