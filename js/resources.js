import pageLink from './page-link.js';
import { sectionTitle } from './page-section.js';

const courseResource = {
    props: {
        title: String,
    },
    template: `
      <div class="d-flex flex-column mb-4" style="color: #f1b995">
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
        'section-title': sectionTitle,
    },
    template: `
        <section class="container-fluid d-flex flex-wrap flex-row my-5 px-5">
            <section-title
              :background-color="curPageThemeColor"
              :icon-classes="curPageIconClasses"
              text="course documents"
            ></section-title>
            <div
              class="flex-fill d-flex flex-column ml-5"
              :style="{ color: curPageThemeColor, 'font-size': 'larger' }"
            >
                <course-resource title="course missive">
                    <p>
                      Please find the course missive <page-link href="" text="here"></page-link>
                    </p>
                </course-resource>
                <course-resource title="collaboration policy">
                    <p>
                      In order to participate in the class, you will need to complete the collaboration policy <page-link href="" text="here"></page-link>
                    </p>
                </course-resource>
                <course-resource title="piazza">
                    <p>
                      Our course piazza page can be found <page-link href="" text="here"></page-link>
                    </p>
                </course-resource>
                <course-resource title="style guidelines">
                    <p>
                       In addition to being graded on correctness of your solutions, each problem you submit will also receive a style score. You can find rubric and example <page-link href="" text="here"></page-link>
                    </p>
                </course-resource>
                <course-resource title="LaTeX">
                    <ul>
                        <li><page-link href="" text="Getting Started with LaTeX"></page-link></li>
                      <li><page-link href="" text="LaTeX Template"></page-link></li>
                    </ul>
                </course-resource>
            </div>
        </section>
    `,
};

const externalResourcesSection = {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'section-title': sectionTitle,
    },
    template: `
        <section class="container-fluid d-flex flex-wrap flex-row my-5 px-5">
            <section-title
              :background-color="curPageThemeColor"
              :icon-classes="curPageIconClasses"
              text="external resources"
            ></section-title>
            <div
              class="flex-fill d-flex flex-column ml-5"
              :style="{ color: curPageThemeColor, 'font-size': 'larger' }"
            >
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
        </main>
    `
});
