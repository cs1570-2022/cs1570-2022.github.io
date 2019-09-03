import pageSectionTitle from './page-section.js';


const staffCard = {
    props: {
        name: String,
        personalPhotoURL: String,
        publicTransitPhotoURL: String,
    },
    data: function() {
        return {
            showPersonalPhoto: false,
        };
    },
    computed: {
        id: function() {
            return this.name.toLowerCase().replace(' ', '-');
        },
        alt: function() {
            return `${this.showPersonalPhoto ? 'staff': 'public trasit'} photo of ${this.name}`;
        },
    },
    template: `
        <div
          :id="id"
          class="card text-center m-5"
          style="width: 20%"
          @mouseenter.passive="showPersonalPhoto = true"
          @mouseleave.passive="showPersonalPhoto = false"
        >
            <img
                :src="publicTransitPhotoURL"
                class="card-img-top"
                :alt="alt"
            >
            <div class="card-body">
                <h5 class="card-title">
                    {{ this.name }}
                </h5>
            </div>
        </div>
    `
};


const staffGroup = {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
        title: String,
        members: Array,
        staffNames: Array,
        staffPersonalPhotos: Array,
        staffPublicTransitPhotos: Array,
    },
    components: {
        'page-section-title': pageSectionTitle,
        'staff-card': staffCard,
    },
    template: `
        <section class="container-fluid d-flex flex-wrap flex-column my-5 px-5">
            <page-section-title
              :icon-classes="curPageIconClasses"
              :text="title"
              :style-object="{'color': curPageThemeColor}"
              :text-style-object="{'text-decoration': 'overline dashed','border-top': 'solid medium', 'padding-top': '0.05rem'}"
            >
            </page-section-title>
            <div
              class="d-flex flex-row flex-wrap justify-content-center"
              :style="{ color: curPageThemeColor, 'font-size': 'larger' }"
            >
                <staff-card
                  v-for="(member, index) of members"
                  :key="index"
                  v-bind="member"
                >
                </staff-card>
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
        'staff-group': staffGroup,
    },
    data: function() {
        return {
            titles: ['the professor', 'the HTAs', 'the UTAs'],
            groups: [
                [
                    {
                        name: 'Philip Klein',
                        personalPhotoURL: '',
                        publicTransitPhotoURL: '',
                    },
                ],
                [
                    {
                        name: 'Jason Zagorski',
                        personalPhotoURL: '',
                        publicTransitPhotoURL: '',
                    },
                    {
                        name: 'Archer Wheeler',
                        personalPhotoURL: '',
                        publicTransitPhotoURL: '',
                    },
                ],
                [
                    {
                        name: 'Da Huo',
                        personalPhotoURL: '',
                        publicTransitPhotoURL: '',
                    },
                    {
                        name: 'Galadriel Brady',
                        personalPhotoURL: '',
                        publicTransitPhotoURL: '',
                    },
                    {
                        name: 'Justin Cardozo',
                        personalPhotoURL: '',
                        publicTransitPhotoURL: '',
                    },
                    {
                        name: 'Justin Zhang',
                        personalPhotoURL: '',
                        publicTransitPhotoURL: '',
                    },
                    {
                        name: 'Rigel Galgana',
                        personalPhotoURL: '',
                        publicTransitPhotoURL: '',
                    },
                    {
                        name: 'Yash Gotmare',
                        personalPhotoURL: '',
                        publicTransitPhotoURL: '',
                    },
                    {
                        name: 'Zhengyi Peng',
                        personalPhotoURL: '',
                        publicTransitPhotoURL: '',
                    },
                ],
            ]
        };
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
            <staff-group
                v-for="(title, index) of titles"
                :key="index"
                :cur-page-theme-color="curPageThemeColor"
                :cur-page-icon-classes="curPageIconClasses"
                :title="title"
                :members="groups[index]"
            >
            </staff-group>
        </main>
    `
});
