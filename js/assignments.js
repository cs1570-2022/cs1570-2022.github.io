import pageCountdownTime from './page-countdown-time.js';
import pageLink from './page-link.js';
import pageSectionTitle from './page-section.js';
import pageTable from './page-table.js';

const hiddenLink = {
    props: {
        now: Object,
        hide: {
            type: Boolean,
            default: null,
        },
        hideUntil: {
            type: Object,
            default: null,
        },
        hidePlaceholder: {
            type: Boolean,
            default: false,
        },
        name: String,
        href: String,
    },
    components: {
        'page-link': pageLink,
    },
    computed: {
        willHide: function () {
            if (this.hide === null) {
                return (
                    this.hide ||
                    this.hideUntil === null ||
                    this.hideUntil.isAfter(this.now)
                );
            } else {
                return this.hide;
            }
        },
        content: function () {
            return this.hidePlaceholder ? '' : this.name;
        },
    },
    template: `
        <span v-if="willHide">{{content}}</span>
        <page-link
          v-else
          :href="href"
          :text="name">
        </page-link>
    `,
};

const courseAssignment = {
    props: {
        name: String,
        handoutURL: String,
        out: String,
        due: String,
        solutionURL: String,
        now: Object,
    },
    components: {
        'hidden-link': hiddenLink,
        'page-countdown-time': pageCountdownTime,
        'page-link': pageLink,
    },
    data: function () {
        return {
            outMoment: this.parseTime(this.out),
            dueMoment: this.parseTime(this.due),
        };
    },
    methods: {
        parseTime: function (timeStr) {
            let timeObj = moment(timeStr, ['MM/DD', 'YYYY/MM/DD'], true);
            if (timeObj.isValid()) {
                timeObj.hour(18);
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
                <hidden-link
                  :name="name"
                  :href="handoutURL"
                  :hide-until="outMoment"
                  :now="now"
                >
                </hidden-link>
            </th>
            <td>
                <page-countdown-time
                  name="out"
                  :time="outMoment"
                  :now="now"
                >
                </page-countdown-time>
            </td>
            <td>
                <page-countdown-time
                  name="due"
                  :time="dueMoment"
                  :now="now"
                >
                </page-countdown-time>
            </td>
            <td>
                <page-link
                  v-if="solutionURL"
                  text="Solution">
                  :href="solutionURL"
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
        'course-assignment': courseAssignment,
        'page-table': pageTable,
        'page-section-title': pageSectionTitle,
    },
    data: function () {
        return {
            assignments: [
                {
                    name: 'Homework 0',
                    handoutURL: 'content/homeworks/hw0-2021.pdf',
                    out: '09/12 2:30pm',
                    due: '09/23 2:30pm',
                    solutionURL: '',
                },
                // {
                //     name: 'Homework 1',
                //     handoutURL: 'content/homeworks/hw1.pdf',
                //     out: '09/17',
                //     due: '10/01 2:30pm',
                //     solutionURL: '',
                // },
                // {
                //     name: 'Homework 2',
                //     handoutURL: 'content/homeworks/hw2.pdf',
                //     out: '10/1',
                //     due: '10/15 2:30pm',
                //     solutionURL: '',
                // },
            ],
            now: moment(),
            tableheads: ['assignment #', 'out', 'due', 'solution'],
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
                  text="course assignments"
                  :style-object="{'color': curPageThemeColor}"
                  :text-style-object="{'border-bottom': 'solid thick'}"
                ></page-section-title>
                <div
                  class="mx-4 mx-sm-5 px-0 px-lg-5"
                  :style="{ color: curPageThemeColor}"
                >
                    <p>All assignments must be typeset using LateX and submitted on <a href='https://www.gradescope.com'>Gradescope</a> (course code: D5G63D)</p>
                    <p>Please refer to the syllabus for the collaboration policy and late submission policy of the class.</p>
                    <page-table
                      :tableheads="tableheads"
                      tableheadBackground="rgba(111, 82, 142, 0.2)"
                      :style="{ color: curPageThemeColor}"
                    >
                        <course-assignment
                          v-for="(assignment, index) of assignments"
                          :key="index"
                          v-bind="assignment"
                          :now="now"
                        >
                        </course-assignment>
                    </page-table>
                </div>
            </section>
        </main>
    `,
});
