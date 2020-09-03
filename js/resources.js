import pageLink from './page-link.js';
import pageSectionTitle from './page-section.js';

const courseResource = {
    props: {
        title: String,
    },
    template: `
      <div class="d-flex flex-column mb-4" style="color: #f57131">
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
              :text-style-object="{'text-decoration': 'line-through dashed', 'border-top': 'solid medium', 'border-bottom': 'solid medium'}"
            ></page-section-title>
            <div
              class="mx-4 mx-sm-5 px-0 px-lg-5 flex-fill d-flex flex-column"
              :style="{ color: curPageThemeColor, 'font-size': 'larger' }"
            >
                <course-resource title="course syllabus">
                    <p>
                      Please find the course syllabus <page-link title="course syllabus" href="content/resources/syllabus.pdf" text="here"></page-link>
                    </p>
                </course-resource>
                <course-resource title="collaboration policy">
                    <p>
                        The collaboration policy can be found in the syllabus under the "Collaboration" section.
                    </p>
                </course-resource>
                <course-resource title="piazza">
                    <p>
                      Our course piazza page can be found <page-link title="piazza" href="https://piazza.com/brown/fall2019/cs157" text="here"></page-link>
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
    },
    template: `
        <section class="container-fluid d-flex flex-wrap flex-row my-5 px-0 px-sm-5">
            <page-section-title
              :icon-classes="curPageIconClasses"
              text="external resources"
              :style-object="{'color': curPageThemeColor}"
              :text-style-object="{'text-decoration': 'line-through dashed', 'border-top': 'solid medium', 'border-bottom': 'solid medium'}"
            >
            </page-section-title>
            <div
              class="mx-4 mx-sm-5 px-0 px-lg-5 flex-fill d-flex flex-column"
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
        </main>
    `,
});
