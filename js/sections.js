// const trainWindowShadeHandle = {
//     template: `
//         <div
//           class="train-window-handle d-inline-block rounded-pill"
//           style="width: 90%; height: 0.5rem; background-color: #e0e0e0"
//         >
//         </div>
//     `,
// };

// const trainWindowShade = {
//     components: {
//         'train-window-shade-handle': trainWindowShadeHandle,
//     },
//     template: `
//         <div
//           class="train-window-shade w-100 d-flex flex-column justify-content-end align-items-center"
//           style="height: 95%; background-color: rgba(224, 224, 224, 0.2); z-index: -1">
//             <train-window-shade-handle></train-window-shade-handle>
//         </div>
//     `,
// };

// const trainWindow = {
//     components: {
//         'train-window-shade':  trainWindowShade,
//     },
//     template: `
//         <div class="train-window d-flex flex-column align-items-center">
//             <train-window-shade>
//             </train-window-shade>
//         </div>
//     `,
// };

// const trainCarriage = {
//     props: {
//     },
//     components: {
//         'train-window': trainWindow,
//     },
//     data: function() {
//         return {
//             sections: [
//                 {
//                     name: 'Introduction to Algorithms',
//                     time: '',
//                     location: '',
//                     slides: '',
//                     capture: '',
//                 },
//             ],
//         };
//     },
//     template: `
//         <div
//           id="train-carriage"
//           class="full-height d-flex flex-row justify-content-around align-items-center"
//           style="rgb(246, 250, 237)">
//             <train-window
//                 v-for="(section, index) of sections"
//                 :key="index"
//                 v-bind="section"
//             >
//             </train-window>
//         </div>
//     `,
// };



import pageClickCopy from './page-click-copy.js';
import pageCountdownTime from './page-countdown-time.js';
import pageLink from './page-link.js';
import pageTable from './page-table.js';
import pageSectionTitle from './page-section.js';

const courseSection = {
    props: {
        index: Number,
        name: String,
        date: String,
        tas: Array,
        material: Array,
        materialURL: Array,
        videoURL: String,
        now: Object,
    },
    components: {
        'page-click-copy': pageClickCopy,
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
        getTAHref: function(ta) {
            return `staff.html#${ta.toLowerCase().replace(' ', '-')}`;
        },
    },
    template: `
        <tr>
            <th scope="row">
                <span>
                    Section {{index}}:
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
                <ul class="list-inline">
                    <li
                      class="d-flex flex-column list-inline-item"
                      v-for="(ta, index) of tas"
                      :key="index"
                    >
                        <page-link
                          :text="ta"
                          :href="getTAHref(ta)"
                        >
                        </page-link>
                    </li>
                </ul>
            </td>
            <td>
                <ul class="list-inline">
                    <li
                      class="d-flex flex-column list-inline-item"
                      v-for="(materialName, index) of material"
                      :key="index"
                    >
                        <page-link
                          :text="materialName"
                          :href="materialURL[index]"
                        >
                        </page-link>
                    </li>
                </ul>
            </td>
            <td>
                <page-link
                  text="video"
                  :href="videoURL"
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
        'course-section': courseSection,
        'page-link': pageLink,
        'page-table': pageTable,
        'page-section-title': pageSectionTitle,
    },
    data: function() {
        return {
            sections: [
                {
                    name: '',
                    date: '09/05',
                    tas: ['TBD', 'Zhengyi Peng'],
                    material: [''],
                    materialURL: [''],
                    videoURL: ''
                },
            ],
            now: moment(),
            tableheads: ['section #', 'date', 'TAs', 'material', 'video'],
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
                  text="course sections"
                ></page-section-title>
                <div
                  class="mx-5 px-5"
                  :style="{ color: curPageThemeColor}"
                >
                    <page-table
                      :tableheads="tableheads"
                      tableheadBackground="rgba(111, 82, 142, 0.2)"
                    >
                        <course-section
                          v-for="(section, index) of sections"
                          :key="index"
                          v-bind="section"
                          :index="index + 1"
                          :now="now"
                        >
                        </course-section>
                    </page-table>
                </div>
            </section>
        </main>
    `
});
