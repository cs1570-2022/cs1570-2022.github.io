import pageLink from './page-link.js';
import pageSectionTitle from './page-section.js';

const courseResource = {
    props: {
        title: String,
    },
    template: `
      <div class="d-flex flex-column mb-4" style="color: #77bf77">
          <h3 class="text-capitalize">{{title}}</h3>
          <slot></slot>
      </div>
    `,
};

const courseDocumentsSection = {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'course-resource': courseResource,
        'page-link': pageLink,
        'page-section-title': pageSectionTitle,
    },
    template: `
        <section class="container-fluid d-flex flex-wrap flex-row my-5 px-0 px-sm-5">
            <page-section-title
              :icon-classes="curPageIconClasses"
              text="course documents"
              :style-object="{'color': curPageThemeColor}"
              :text-style-object="{'border-bottom': 'solid thick'}"
            ></page-section-title>
            <div
              class="mx-4 mx-sm-5 px-0 px-lg-5 flex-fill d-flex flex-column"
              :style="{ color: curPageThemeColor, 'font-size': 'larger' }"
            >
                <course-resource title="course syllabus">
                    <p>
                      Please find the course syllabus <page-link title="course syllabus" href="content/resources/syllabus.pdf" text="here"></page-link>.
                      The collaboration policy and the late day policy for all assignments of the class (Homework and Midterms) are presented in detail in the syllabus.
                    </p>
                </course-resource>
                <course-resource title="gradescope">
                    <p>
                      Instructions on how to set up Gradescope can be found <page-link title="gradescope" href="content/resources/gradescopeGuide.pdf" text="here"></page-link>
                    </p>
                </course-resource>
                <course-resource title="anonymous id form">
                    <p>
                      If you would like to be graded under an anonymous id, please fill out the following form <page-link title="anonymous-id-form" href="https://forms.gle/QXKXBuzJZASGjH3T8" text="here"></page-link>
                    </p>
                </course-resource>
                <course-resource title="ed">
                    <p>
                      Our course Ed page can be found <page-link title="ed" href="https://edstem.org/us/courses/12570/discussion/" text="here"></page-link>
                    </p>
                </course-resource>
                <course-resource title="LaTeX">
                    <ul>
                        <li><page-link href="content/resources/CS157LatexLinks.pdf" text="Getting Started with LaTeX" title="getting started with latex"></page-link></li>
                        <li><page-link href="content/resources/template.tex" text="LaTeX Template" title="latex template"></page-link></li>
                    </ul>
                </course-resource>
            </div>
        </section>
    `,
};

{
    /* <course-resource title="style guidelines">
                    <p>
                       In addition to being graded on correctness of your solutions, each problem you submit will also receive a style score. You can find rubric and example <page-link title="style guidelines" href="" text="here"></page-link>
                    </p>
                </course-resource> */
}
const externalResourcesSection = {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'page-section-title': pageSectionTitle,
        'course-resource': courseResource,
        'page-link': pageLink,
    },
    template: `
        <section class="container-fluid d-flex flex-wrap flex-row my-5 px-0 px-sm-5">
            <page-section-title
              :icon-classes="curPageIconClasses"
              text="external resources"
              :style-object="{'color': curPageThemeColor}"
              :text-style-object="{'border-bottom': 'solid thick'}"
            >
            </page-section-title>
            <div
              class="mx-4 mx-sm-5 px-0 px-lg-5 flex-fill d-flex flex-column"
              :style="{ color: curPageThemeColor, 'font-size': 'larger' }"
            >
                <course-resource title="Department Resources">
                    <ul>
                        <li><page-link title="ugrad-missive-link" href="http://cs.brown.edu/courses/ta/pubs/ugrad_missive.pdf" text="Undergraduate Missive"></page-link></li>
                        <li><page-link title="di-resource-link" href="http://cs.brown.edu/about/diversity/resources/" text="Diversity and Inclusion"></page-link></li>
                        <li><page-link title="student-di-resource-link" href="https://cs.brown.edu/about/diversity/student-advocates-diversity-and-inclusion/" text="Student Advocates for Diversity and Inclusion"></page-link></li>
                        <li><page-link title="wics-resource-link" href="https://cs.brown.edu/people/orgs/wics/" text="Women in Computer Science"></page-link></li>
                        <li><page-link title="mosaic-resource-link" href="https://mosaic-plus-brown.github.io/mosaic/" text="MOSAIC+"></page-link></li>
                    </ul>
                </course-resource>
                <course-resource title="Brown CS Health and Wellness">
                    <p>If you need accommodation for your physical and mental health, please feel free to reach out to Professor De Stefani - we want to support you as much as we can in the most comfortable way for you. It is important to note that TAs should not be handling health and accomodations information, so inquiries should be directed towards the professor only.</p>
                    <ul>
                        <li>Resources for Physical/Mental Health, Accessibility and Accommodations can be found <page-link title="hw-resource-link" href="https://cs.brown.edu/media/filer_public/03/0a/030a6a2e-7a61-4c30-98c1-dce87b9d9899/brown_cs_health_and_wellness_resources.pdf" text="here"></page-link>.</li>
                    </ul>
                </course-resource>
            </div>
        </section>
    `,
};

const otherSection = {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'page-section-title': pageSectionTitle,
        'course-resource': courseResource,
        'page-link': pageLink,
    },
    template: `
        <section class="container-fluid flex-wrap flex-row my-5 px-0 px-sm-5">
            <page-section-title
              :icon-classes="curPageIconClasses"
              text="other"
              :style-object="{'color': curPageThemeColor}"
              :text-style-object="{'border-bottom': 'solid thick'}"
            >
            </page-section-title>
            <div
              class="mx-4 mx-sm-5 px-0 px-lg-5 flex-fill d-flex flex-column"
              :style="{ color: curPageThemeColor, 'font-size': 'larger' }"
            >
                <course-resource title="Image Credits">
                <p>All images are from Unsplash. Unsplash's license can be found
                    <page-link title="mosaic-resource-link" href="https://unsplash.com/license" text="here"></page-link></p>
                        <li>Algorithms - cover photo by Jason Jarrach</li>
                        <li>Lectures - cover photo by Maarten van den Heuvel</li>
                        <li>Assignments - cover photo by Jorge Zapata</li>
                        <li>Hours - cover photo by Sorin Gheorghita</li>
                        <li>Staff - cover photo by Fabrizio Magoni</li>
                        <li>Resources - cover photo by Calum Lewis</li>
                    </ul>
                </course-resource>
            </div>
        </section>
    `,
};

Vue.component('page-content', {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'course-documents-section': courseDocumentsSection,
        'external-resources-section': externalResourcesSection,
        'other-section': otherSection,
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
            <course-documents-section
                :cur-page-theme-color="curPageThemeColor"
                :cur-page-icon-classes="curPageIconClasses"
            >
            </course-documents-section>
            <external-resources-section
                :cur-page-theme-color="curPageThemeColor"
                :cur-page-icon-classes="curPageIconClasses"
            >
            </external-resources-section>
            <other-section
                :cur-page-theme-color="curPageThemeColor"
                :cur-page-icon-classes="curPageIconClasses"
            >
            </other-section>
        </main>
    `,
});
