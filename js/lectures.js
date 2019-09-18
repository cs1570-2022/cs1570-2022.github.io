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
        problemNames: Array,
        problemURLs: Array,
        readingNames: Array,
        readingURLs: Array,
        now: Object,
    },
    components: {
        'page-click-copy': pageClickCopy,
        'page-countdown-time': pageCountdownTime,
        'page-links': pageLinks,
    },
    data: function() {
        return {
            outMoment: this.parseTime(this.date),
        };
    },
    methods: {
        parseTime: function(timeStr) {
            let timeObj = moment(timeStr, ['MM/DD', 'YYYY/MM/DD'], true);
            if (timeObj.isValid()) {
                timeObj.hour(15);
                timeObj.minute(0);
            } else {
                timeObj = moment(timeStr, ['MM/DD HH:mm', 'MM/DD hh:mm a', 'MM/DD hh a', 'YYYY/MM/DD HH:mm', 'YYYY/MM/DD hh:mm a', 'YYYY/MM/DD hh a']);
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
                  :names="problemNames"
                  :urls="problemURLs"
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
    data: function() {
        return {
            lectures: [
                {
                    name: 'First Day, Big-Oh Notation',
                    date: '09/04',
                    readingNames: [],
                    readingURLs: [],
                    problemNames: [],
                    problemURLs: [],
                },
                {
                    name: 'Big-Oh Notation',
                    date: '09/06',
                    readingNames: [],
                    readingURLs: [],
                    problemNames: [],
                    problemURLs: [],
                },
                {
                    name: 'Algorithms with Numbers',
                    date: '09/09',
                    readingNames: [],
                    readingURLs: [],
                    problemNames: [],
                    problemURLs: [],
                },
                {
                    name: 'Algorithms with Numbers',
                    date: '09/11',
                    readingNames: [],
                    readingURLs: [],
                    problemNames: [],
                    problemURLs: [],
                },
                {
                    name: 'Algorithms with Numbers',
                    date: '09/13',
                    readingNames: [],
                    readingURLs: [],
                    problemNames: [],
                    problemURLs: [],
                },
            ],
            now: moment(),
            tableheads: ['lecture #', 'date', 'in-class problem', 'material'],
        };
    },
    created: function() {
        setInterval(() => this.now = moment(), 1000);
    },
    mounted: function() {
        const element = this.$el;
        document.addEventListener('DOMContentLoaded', function() {
            element.scrollIntoView(true);
            window.scrollBy(0, -150);
        }, false);
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
                    <p>Lectures take place Monday, Wednesday, and Friday from 3:00 to 4:20PM in Friedman 108.</p>
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
    `
});
