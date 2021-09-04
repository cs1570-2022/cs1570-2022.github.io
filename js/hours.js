import pageSectionTitle from './page-section.js';

Vue.component('page-content', {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'page-section-title': pageSectionTitle,
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
                  text="course calendar"
                  :style-object="{'color': curPageThemeColor}"
                  :text-style-object="{'border-bottom': 'solid thick'}"
                ></page-section-title>
                <div
                  class="mx-4 mx-sm-5 px-0 px-lg-5 flex-fill d-flex flex-column"
                  :style="{ color: curPageThemeColor }"
                >
                    <h3>Notes For TA Hours:</h3>
                    <ul>
                        <li>Hours may be offered in-person or remotely via Zoom.</li>
                        <li>Some TA hours are one-on-one (sign up on <a href='https://signmeup.cs.brown.edu/'>SignMeUp</a>), while others are open to all students to join. This information can be found on the course calendar, along with meeting time and location (Zoom link or CIT room #).</li>
                        <li>Please always wear a mask when coming to in-person hours. Additionally, in order to safeguard everyone's health, please refrain from going to in-person hours if you are feeling unwell or experiencing symptoms.
                            Reach out to the TA staff to inquire about further remote hours availability.</li>
                    </ul>
                    <p>Refer to the calendar below for the most up-to-date lecture and office hour schedule.</p>
                    <iframe title="course calendar" src="https://calendar.google.com/calendar/embed?src=c_7t1osduc2jg196gn45se978e94%40group.calendar.google.com&ctz=America%2FNew_York" class="d-none d-sm-block align-self-center" style="border: 0" width="100%" height="650" frameborder="0" scrolling="no"></iframe>
                    <iframe title="course calendar" src="https://calendar.google.com/calendar/embed?src=c_7t1osduc2jg196gn45se978e94%40group.calendar.google.com&ctz=America%2FNew_York&mode=AGENDA" class="d-block d-sm-none align-self-center" style="border: 0" width="100%" height="600" frameborder="0" scrolling="no"></iframe>
                </div>
            </section>
        </main>
    `,
});
