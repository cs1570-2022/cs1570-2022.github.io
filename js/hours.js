import pageSectionTitle from './page-section.js';


Vue.component('page-content', {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'page-section-title': pageSectionTitle,
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
                  text="course calendar"
                  :style-object="{'color': curPageThemeColor}"
                  :text-style-object="{'text-decoration': 'overline dashed','border-bottom': 'dashed medium'}"
                ></page-section-title>
                <div
                  class="mx-4 mx-sm-5 px-0 px-lg-5 flex-fill d-flex flex-column"
                  :style="{ color: curPageThemeColor }"
                >
                    <h3>Notes For TA Hours:</h3>
                    <ul>
                        <li>TA hours are generally held in <b>CIT 219</b>.</li>
                        <li>Write your name on the front board to join the queue.</li>
                        <li>When working in groups, put the question number on your board so that new students can join more easily.</li>
                    </ul>
                    <p>Refer to the calendar below for the most up-to-date lecture and office hour schedule.</p>
                    <iframe src="https://calendar.google.com/calendar/embed?src=brown.edu_aa78acu9c33pessfasfggfvvo0%40group.calendar.google.com&ctz=America%2FNew_York" class="d-none d-sm-block align-self-center" style="border: 0" width="100%" height="650" frameborder="0" scrolling="no"></iframe>
                    <iframe src="https://calendar.google.com/calendar/embed?src=brown.edu_aa78acu9c33pessfasfggfvvo0%40group.calendar.google.com&ctz=America%2FNew_York&mode=AGENDA" class="d-block d-sm-none align-self-center" style="border: 0" width="100%" height="600" frameborder="0" scrolling="no"></iframe>
                </div>
            </section>
        </main>
    `
});
