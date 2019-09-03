import pageCountdownTime from './page-countdown-time.js';
import pageLink from './page-link.js';
import pageTable from './page-table.js';
import pageSectionTitle from './page-section.js';

const courseLecture = {
    props: {
        index: Number,
        name: String,
        date: String,
        readingName: String,
        readingURL: String,
        now: Object,
    },
    components: {
        'page-countdown-time': pageCountdownTime,
        'page-link': pageLink,
    },
    data: function() {
        return {
            outMoment: this.parseTime(this.date),
        };
    },
    methods: {
        parseTime: function(timeStr) {
            let timeObj = moment(timeStr, ['MM/DD', 'YYYY/MM/DD']);
            if (timeObj.isValid()) {
                timeObj.hour(18);
                timeObj.minute(0);
            } else {
                timeObj = moment(timeStr, ['MM/DD HH:mm', 'MM/DD hh:mm a', 'MM/DD hh a', 'YYYY/MM/DD HH:mm', 'YYYY/MM/DD hh:mm a', 'YYYY/MM/DD hh a']);
            }
            return timeObj;
        },
    },
    computed: {
        lectureName: function() {
            return `Lecture ${this.index}: ${this.name}`;
        },
    },
    template: `
        <tr>
            <th scope="row">
                <span>
                    Lecture {{index}}:
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
                <page-link
                  :text="readingName"
                  :href="readingURL"
                >
                </page-link>
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
        'page-link': pageLink,
        'page-table': pageTable,
        'page-section-title': pageSectionTitle,
    },
    data: function() {
        return {
            lectures: [
                {
                    name: '',
                    date: '09/05',
                    readingName: '',
                    readingURL: '',
                },
            ],
            now: moment(),
            tableheads: ['lecture #', 'date', 'reading'],
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
            <section class="container-fluid d-flex flex-wrap flex-column my-5 px-5">
                <page-section-title
                  :background-color="curPageThemeColor"
                  :icon-classes="curPageIconClasses"
                  text-decoration-style="solid"
                  text="course lectures"
                ></page-section-title>
                <div
                  class="mx-5 mb-5"
                  :style="{ color: curPageThemeColor}">
                    <p>Lectures take place Monday, Wednesday, Friday from 15:00 to 16:20AM in Barus & Holley 166.</p>
                    <p>Lecture Capture can be found <page-link text="here" href=""></page-link>.</p>
                </div>
                <div
                  class="mx-5 px-5"
                  :style="{ color: curPageThemeColor}"
                >
                    <page-table
                      :tableheads="tableheads"
                      tableheadBackground="rgba(111, 82, 142, 0.2)"
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
