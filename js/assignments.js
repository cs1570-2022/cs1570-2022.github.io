import pageLink from './page-link.js';
import { clickCopy, sectionTitle } from './page-section.js';


const countdownTime = {
    props: {
        name: String,
        time: Object,
        showCountdownStatus: {
            type: Boolean,
            default: true
        },
        now: Object,
    },
    components: {
        'click-copy': clickCopy,
    },
    computed: {
        displayedTime: function() {
            return this.time.format('MMM Do, LT');
        },
        timeFromNow: function() {
            return this.time.diff(this.now);
        },
        namePastTense: function() {
            return this.name.endsWith('e') ? `${this.name}d` : `${this.name}ed`;
        },
        timeFromNowDisplayed: function() {
            const text = this.timeFromNow < 0 ? this.namePastTense : `will ${this.name}`;
            return `${text} ${this.time.from(this.now)}`;
        },
        statusClasses: function() {
            if (this.timeFromNow < 0) {
                return ['fas', 'fa-calendar-check', 'fa-lg'];
            }
            /* not due yet */
            if (this.timeFromNow < 7200000 /* moment.duration(2, 'h').asMilliseconds() */) {
                return ['fas', 'fa-exclamation', 'fa-lg'];
            }

            if (this.timeFromNow < 86400000 /* moment.duration(1, 'd').asMilliseconds() */) {
                return ['fas', 'fa-calendar-day', 'fa-lg'];
            }

            if (this.timeFromNow < 604800000 /* moment.duration(1, 'w').asMilliseconds() */) {
                return ['fas', 'fa-calendar-week', 'fa-lg'];
            }

            return ['fas', 'fa-calendar', 'fa-lg'];
        },
    },
    template: `
        <span>
            <click-copy :text="displayedTime">
            </click-copy>
            <span class="ml-1">(</span>
            <i :class="statusClasses"></i>
            <span class="ml-1 text-capitalize font-weight-light">{{timeFromNowDisplayed}}</span>
            <span>)</span>
        </span>
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
        'click-copy': clickCopy,
        'countdown-time': countdownTime,
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
    template: `
        <tr>
            <th scope="row">
                <page-link
                  :href="handoutURL"
                  :text="name">
                </page-link>
            </th>
            <td>
                <countdown-time
                  name="out"
                  :time="outMoment"
                  :now="now"
                >
                </countdown-time>
            </td>
            <td>
                <countdown-time
                  name="due"
                  :time="dueMoment"
                  :now="now"
                >
                </countdown-time>
            </td>
            <td>
                <page-link
                  v-if="solutionURL"
                  :href="solutionURL"
                  text="Solution">
                </page-link>
            </td>
        </tr>
    `,
};

const assignmentsTable = {
    data: function() {
        return {
            assignments: [
                {
                    name: 'Assignment 0',
                    handoutURL: '',
                    out: '09/05',
                    due: '09/06',
                    solutionURL: '',
                },
                {
                    name: 'Assignment 1',
                    handoutURL: '',
                    out: '09/05',
                    due: '09/10',
                    solutionURL: '',
                },
            ],
            now: moment(),
        };
    },
    components: {
        'course-assignment': courseAssignment,
    },
    created: function() {
        setInterval(() => this.now = moment(), 1000);
    },
    template: `
          <table class="table table-borderless table-hover table-striped">
              <thead style="background-color: rgba(111, 82, 142, 0.2)">
                  <tr>
                      <th scope="col" class="text-capitalize">assignment #</th>
                      <th scope="col" class="text-capitalize">out</th>
                      <th scope="col" class="text-capitalize">due</th>
                      <th scope="col" class="text-capitalize">solution</th>
                  </tr>
              </thead>
              <tbody>
                  <course-assignment
                    v-for="(assignment, index) of assignments"
                    :key="index"
                    v-bind="assignment"
                    :now="now"
                  >
                  </course-assignment>
              </tbody>
          </table>
    `,
};

Vue.component('page-content', {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'assignments-table': assignmentsTable,
        'section-title': sectionTitle,
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
                <section-title
                  :background-color="curPageThemeColor"
                  :icon-classes="curPageIconClasses"
                  text-decoration-style="dashed"
                  text="course assignments"
                ></section-title>
                <div class="mx-5"
                    :style="{ color: curPageThemeColor}"
                >
                </div>
                <div class="mx-5 px-5">
                    <assignments-table>
                    </assignments-table>
                </div>
            </section>
        </main>
    `
});
