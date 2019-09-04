import pageCountdownTime from './page-countdown-time.js';
import pageLink from './page-link.js';
import pageSectionTitle from './page-section.js';
import pageTable from './page-table.js';


const hiddenLink = {
    props: {
        now: Object,
        hide: {
            type: Boolean,
            default: null
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
    computed: {
        willHide: function() {
            if (this.hide === null) {
                return this.hide || this.hideUntil === null || this.hideUntil.isAfter(this.now);
            } else {
                return this.hide;
            }
        },
        content: function() {
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
    `
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
    data: function() {
        return {
            outMoment: this.parseTime(this.out),
            dueMoment: this.parseTime(this.due),
        };
    },
    methods: {
        parseTime: function(timeStr) {
            let timeObj = moment(timeStr, ['MM/DD', 'YYYY/MM/DD'], true);
            if (timeObj.isValid()) {
                timeObj.hour(18);
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
                <hidden-link
                  name="Solution"
                  :href="solutionURL"
                  :hide="true"
                  :hide-until="dueMoment"
                  :hide-placeholder="true"
                  :now="now"
                >
                </hidden-link>
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
    data: function() {
        return {
            assignments: [
                {
                    name: 'Assignment 0',
                    handoutURL: '',
                    out: '09/06',
                    due: '09/13',
                    solutionURL: '',
                },
            ],
            now: moment(),
            tableheads: ['assignment #', 'out', 'due', 'solution'],
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
                  text="course assignments"
                  :style-object="{'color': curPageThemeColor}"
                  :text-style-object="{'border-bottom': 'dotted medium'}"
                ></page-section-title>
                <div
                  class="mx-4 mx-sm-5 px-0 px-lg-5"
                  :style="{ color: curPageThemeColor}"
                >
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
    `
});
