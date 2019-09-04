import pageClickCopy from './page-click-copy.js';
import pageSectionTitle from './page-section.js';


const csPrereq = {
    props: {
        courseNum: String,
        backgroundColor: String
    },
    computed: {
        id: function() {
            return `prereq-csci${this.courseNum}`;
        },
        href: function() {
            return `https://cs.brown.edu/courses/csci${this.courseNum}`;
        },
    },
    template: `
        <a
          :id="id"
          class="px-4 mx-2 second-prereq badge text-white"
          target="_blank"
          :href="href"
          :style="{'background-color': backgroundColor}"
        >
              CSCI {{courseNum}}
        </a>
    `
};

const courseInfoSection = {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'cs-prereq': csPrereq,
        'page-section-title': pageSectionTitle,
    },
    template: `
        <section class="container-fluid d-flex flex-wrap flex-row my-5 px-0 px-sm-5">
            <page-section-title
              :icon-classes="curPageIconClasses"
              text="course info"
              :style-object="{'color': curPageThemeColor, 'text-decoration-line': 'underline', 'text-decoration-style': 'wavy'}"
            ></page-section-title>
            <div
              class="flex-fill d-flex flex-column ml-4 ml-sm-5"
              :style="{ color: curPageThemeColor, 'font-size': 'larger' }"
            >
                <div id="time-container" class="d-flex flex-row mb-4">
                      <span class="mr-4">
                          <i class="far fa-calendar-alt fa-lg" title="class time"></i>
                      </span>
                      <div>
                          <p id="class-time" class="d-flex flex-row justify-content-between mb-1">
                              <span id="time-start">3:00PM</span>
                              <span id="time-duration" class="d-none d-sm-inline-block font-weight-light text-muted mx-1 px-4 border-bottom">1Hr 20Mins</span>
                              <span class="d-sm-inline-block d-sm-none mx-2">--</span>
                              <span id="time-end">4:20PM</span>
                          </p>
                          <p id="day-of-week-badges" class="d-flex flex-column flex-sm-row justify-content-between">
                              <span id="time-monday" class="mx-2 mb-2 mb-sm-0 px-4 day-of-week badge badge-pill text-white" :style="{'background-color': curPageThemeColor}">M</span>
                              <span id="time-wednesday" class="mx-2 mb-2 mb-sm-0 px-4 day-of-week badge badge-pill text-white" :style="{'background-color': curPageThemeColor}">W</span>
                              <span id="time-friday" class="mx-2 mb-2 mb-sm-0 px-4 day-of-week badge badge-pill text-white" :style="{'background-color': curPageThemeColor}">F</span>
                          </p>
                      </div>
                  </div>
                  <div id="location-container" class="mb-4">
                      <span class="mr-4">
                          <i class="far fa-building fa-lg" title="location"></i>
                      </span>
                      <span id="class-location">
                          Friedman 108
                      </span>
                  </div>
                  <div id="prereqs-container" class="d-flex flex-row">
                      <span class="mr-4">
                          <i class="fas fa-clipboard-list fa-lg" title="prerequisites"></i>
                      </span>
                      <div class="d-flex flex-column">
                            <div class="d-flex flex-row">
                                <span class="text-nowrap">
                                    One of
                                </span>
                                <div>
                                    <cs-prereq course-num="0160" :background-color="curPageThemeColor"></cs-prereq>
                                    <cs-prereq course-num="0180" :background-color="curPageThemeColor"></cs-prereq>
                                    <cs-prereq course-num="0190" :background-color="curPageThemeColor"></cs-prereq>
                                </div>
                            </div>
                            <i class="fas fa-plus fa-lg align-self-center my-2"></i>
                            <div class="d-flex flex-row">
                                <span class="text-nowrap">
                                    One of
                                </span>
                                <div>
                                    <cs-prereq course-num="0220" :background-color="curPageThemeColor"></cs-prereq>
                                    <cs-prereq course-num="1010" :background-color="curPageThemeColor"></cs-prereq>
                                    <cs-prereq course-num="1450" :background-color="curPageThemeColor"></cs-prereq>
                                    <a id="prereq-math0750" class="px-4 mx-2 second-prereq badge badge-info" target="_blank" href="https://www.brown.edu/academics/math/courses">MATH 0750</a>
                                    <a id="prereq-math1010" class="px-4 mx-2 second-prereq badge badge-info" target="_blank" href="https://www.brown.edu/academics/math/next-semester">MATH 1010</a>
                                    <a id="prereq-math1530" class="px-4 mx-2 second-prereq badge badge-info" target="_blank" href="https://www.brown.edu/academics/math/courses">MATH 1530</a>
                                </div>
                            </div>
                        </div>
                  </div>
            </div>
        </section>
    `,
};


const courseTopic = {
    props: {
        week: String,
        name: String,
        curPageThemeColor: String,
    },
    components: {
        'page-click-copy': pageClickCopy,
    },
    template: `
        <li
          class="list-group-item list-group-item-action border-0 border-left"
          :style="{color: curPageThemeColor}"
        >
            <span class="topic-week font-weight-light">{{week}}: </span>
            <page-click-copy :text="name"></page-click-copy>
        </li>
    `,
};

const courseTopics = {
    props: {
        curPageThemeColor: String,
    },
    components: {
        'course-topic': courseTopic
    },
    data: function() {
        return {
            topics: [
                ['Week 1 (September 4-6)', 'Big O Analysis'],
                ['Week 2 (September 9-13)', 'Algorithms with Numbers'],
                ['Week 3 (September 16-20)', 'Divide-and-Conquer'],
                ['Week 4 (September 23-27)', 'Decomposition of Graphs'],
                ['Week 5 (September 30-October 4)', 'Paths in Graphs'],
                ['Week 6 (October 7-11)', 'Greedy Algorithms'],
                ['Week 7-8 (October 16-25)', 'Dynamic Programming'],
                ['Week 9-10 (October 28-November 8)', 'Linear Programming'],
                ['Week 11-13 (November 11-25)', 'NP-Complete Problems'],
                ['Week 14-15 (December 2-December 11)', 'Coping with NP-Completeness'],
            ]
        };
    },
    template: `
        <div id="topics-container">
            <p class="badge text-white text-uppercase px-4" :style="{'background-color': curPageThemeColor}">
                topics
            </p>
            <ul
              id="topics-list"
              class="list-group list-group-flush ml-4 ml-sm-5"
              style="border-left: solid 0.2rem"
            >
                <course-topic
                  v-for="(topic, index) of topics"
                  :week="topic[0]"
                  :name="topic[1]"
                  :key="index"
                  :cur-page-theme-color="curPageThemeColor"
                >
                </course-topic>
            </ul>
        </div>
    `
};


const courseMaterialSection = {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'course-topics': courseTopics,
        'page-section-title': pageSectionTitle,
    },
    template: `
        <section class="container-fluid d-flex flex-wrap flex-row my-5 px-0 px-sm-5">
            <page-section-title
              :icon-classes="curPageIconClasses"
              text="course material"
              :style-object="{'color': curPageThemeColor, 'text-decoration-line': 'underline', 'text-decoration-style': 'wavy'}"
            ></page-section-title>
            <div
              class="flex-fill d-flex flex-column ml-4 ml-sm-5"
              :style="{ color: curPageThemeColor, 'font-size': 'larger' }"
            >
                <div class="d-flex flex-row mb-4">
                    <span class="mr-4">
                        <i class="fas fa-book fa-lg" title="textbook"></i>
                    </span>
                    <span>
                        <div
                          id="textbook-container"
                          class="d-flex flex-column">
                            <span>
                                Algorithms
                                <span class="text-muted font-weight-light" style="font-size: small">
                                    by Dasgupta, Papadimitriou, and Vazirani
                                </span>
                            </span>
                            <ul class="list-inline ml-2">
                                <li class="list-inline-item">
                                    <a
                                      href="https://www.amazon.com/Algorithms-Sanjoy-Dasgupta/dp/0073523402"
                                      title="Buy from Amazon" target="_blank"
                                      class="mx-2 font-weight-light"
                                       style="font-size: smaller"
                                    >
                                        <i class="fab fa-amazon"></i>
                                        Buy from Amazon
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a
                                      href="http://insite.browntextbook.com/SelectCourses.aspx?src=2&amp;TYPE=2&amp;stoid=144&amp;trm=Fall%2019&amp;cid=16135"
                                      title="Buy from Brown Bookstore" target="_blank"
                                      class="mx-2 font-weight-light"
                                       style="font-size: smaller"
                                    >
                                        <i class="fas fa-store"></i>
                                        Buy from Brown Bookstore
                                  </a>
                                </li>
                            </ul>
                        </div>
                    </span>
                </div>
                <course-topics
                  :cur-page-theme-color="curPageThemeColor"
                >
                </course-topics>
            </div>
        </section>
    `
};

Vue.component('page-content', {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'course-info-section': courseInfoSection,
        'course-material-section': courseMaterialSection,
    },
    template: `
        <main>
            <course-info-section
                :cur-page-theme-color="curPageThemeColor"
                :cur-page-icon-classes="curPageIconClasses"
            >
            </course-info-section>
            <course-material-section
                :cur-page-theme-color="curPageThemeColor"
                :cur-page-icon-classes="curPageIconClasses"
            >
            </course-material-section>
        </main>
    `
});
