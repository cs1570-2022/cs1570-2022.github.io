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
                timeObj.hour(15);
                timeObj.minute(0);
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
                    name: 'Course Overview',
                    date: '09/10',
                    readingNames: [],
                    readingURLs: [],
                    noteNames: [],
                    noteURLs: [],
                    recordingNames: [],
                    recordingURLs: [],
                },
                {
                    name: 'Methodologies for algorithms analysis',
                    date: '09/15',
                    readingNames: [],
                    readingURLs: [],
                    noteNames: [],
                    noteURLs: [],
                    recordingNames: [],
                    recordingURLs: [],
                },
                {
                    name: 'Data Structures 1',
                    date: '09/17',
                    readingNames: ['5.3, 3.1, 3.2, 4.1, 4.4'],
                    readingURLs: [],
                    noteNames: [],
                    noteURLs: [],
                    recordingNames: [],
                    recordingURLs: [],
                },
                {
                    name: 'Data Structures 2',
                    date: '09/22',
                    readingNames: ['6.1, 6.2, 6.3, 6.4, A-19.5'],
                    readingURLs: [],
                    noteNames: [],
                    noteURLs: [],
                    recordingNames: [],
                    recordingURLs: [],
                },
                {
                    name: 'Algorithms for Soring and Searching 1',
                    date: '09/24',
                    readingNames: ['5.4, 8.1, 8.2'],
                    readingURLs: [],
                    noteNames: [],
                    noteURLs: [],
                    recordingNames: [],
                    recordingURLs: [],
                },
                {
                    name: 'Algorithms for Soring and Searching 2',
                    date: '09/24',
                    readingNames: ['8.3, 9.1, 9.2'],
                    readingURLs: [],
                    noteNames: [],
                    noteURLs: [],
                    recordingNames: [],
                    recordingURLs: [],
                }
            ],
            now: moment(),
            tableheads: ['lecture #', 'date', 'notes', 'readings', 'recording'],
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
                    <p>Lectures are on Tuesday and Thursday from 2:30 to 3:50PM.</p>
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
