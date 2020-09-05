import pageSectionTitle from './page-section.js';

// const csEmail = {
//     props: {
//         cslogin: String,
//         email: {
//             type: String,
//             default: null,
//         },
//     },
//     computed: {
//         mailto: function () {
//             return `mailto:${
//                 this.email === null
//                     ? this.cslogin + '@cs.brown.edu'
//                     : this.email
//             }`;
//         },
//     },
//     template: `
//       <a :href="mailto">
//           {{cslogin}}
//           <i class="fas fa-envelope"></i>
//       </a>
//     `,
// };

const staffCard = {
    props: {
        cslogin: String,
        curPageThemeColor: String,
        name: String,
        note: String,
        personalPhotoURL: {
            type: String,
            default: 'content/staff/default.png',
        },
        themePhotoURL: {
            type: String,
            default: 'content/staff/default.png',
        },
        theme: String,
        photoStyle: {
            type: Object,
            default: function () {
                return { 'background-position': '50%, 50%' };
            },
        },
    },
    data: function () {
        return {
            showPersonalPhoto: false,
            personalPhotoWebpURL: this.getWebpURL(this.personalPhotoURL),
            themePhotoWebpURL: this.getWebpURL(this.themePhotoURL),
            useWebp: Boolean(Modernizr.webp),
        };
    },
    computed: {
        id: function () {
            return this.name.toLowerCase().replace(' ', '-');
        },
        photoURL: function () {
            return `url(${
                this.showPersonalPhoto
                    ? this.useWebp
                        ? this.personalPhotoWebpURL
                        : this.personalPhotoURL
                    : this.useWebp
                    ? this.themePhotoWebpURL
                    : this.themePhotoURL
            })`;
        },
    },
    methods: {
        getWebpURL: function (url) {
            return `${url.substring(0, url.lastIndexOf('.'))}.webp`;
        },
    },
    template: `
        <div
          :id="id"
          class="card text-center m-4"
          :style="{'border-color': curPageThemeColor}"
          @mouseenter.passive="showPersonalPhoto = true"
          @click.passive="showPersonalPhoto = !showPersonalPhoto"
          @mouseleave.passive="showPersonalPhoto = false"
        >
            <div
              class="card-header text-muted font-weight-light"
              style="font-size: medium"
            >
                {{ theme }}
            </div>
            <div
                class="card-img-top"
                :style="[{'background-image': photoURL}, photoStyle]"
                style="background-size: cover; background-repeat: no-repeat; width: 300px; height: 300px;"
            >
            </div>
            <div class="card-body d-flex flex-column justify-content-center">
                <h5 class="card-title mb-0">
                    {{ this.name }}
                </h5>
                <p class="card-text mb-0">
                    {{note}}
                </p>
                <p class="card-text mb-0">
                    {{cslogin}}
                </p>
            </div>
        </div>
    `,
};

const staffGroup = {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
        title: String,
        members: Array,
    },
    components: {
        'page-section-title': pageSectionTitle,
        'staff-card': staffCard,
    },
    template: `
        <section class="container-fluid d-flex flex-wrap flex-column my-5 px-0 px-sm-5">
            <page-section-title
              :icon-classes="curPageIconClasses"
              :text="title"
              :style-object="{'color': curPageThemeColor}"
              :text-style-object="{'border-bottom': 'solid thick'}"
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
                  :cur-page-theme-color="curPageThemeColor"
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
    data: function () {
        return {
            titles: ['the professors', 'the HTAs', 'the UTAs'],
            groups: [
                [
                    {
                        cslogin: 'ld9',
                        name: 'Lorenzo De Stefani',
                        personalPhotoURL: 'content/staff/lorenzo_personal.png',
                        themePhotoURL: 'content/staff/lorenzo-utensil.jpg',
                        theme: '',
                    },
                    {
                        cslogin: 'rt',
                        name: 'Roberto Tamassia',
                        personalPhotoURL: 'content/staff/roberto_personal.jpg',
                        themePhotoURL: undefined,
                        theme: '',
                    },
                ],
                [
                    {
                        cslogin: 'awheele9',
                        name: 'Archer Wheeler',
                        note: 'Grad TA',
                        personalPhotoURL: 'content/staff/archer_personal.jpg',
                        themePhotoURL: 'content/staff/archer_spoon.png',
                        // photoStyle: { 'background-position': '0%, 50%' },
                        theme: '',
                    },
                    {
                        cslogin: 'evelasq2',
                        name: 'Evan Velasquez',
                        personalPhotoURL: 'content/staff/Evan-Velasquez-evelasq2.JPG',
                        themePhotoURL: 'content/staff/Evan-Velasquez-utensil.jpg',
                        theme: '',
                    },
                ],
                [
                    {
                        cslogin: 'bvallian',
                        name: 'Beenish Valliani',
                        personalPhotoURL: undefined,
                        themePhotoURL: 'content/staff/Beenish-Valliani-bvallian-utensil.jpg',
                        theme: undefined,
                    },
                    {
                        cslogin: 'cwilli22',
                        name: 'Cori Williams',
                        personalPhotoURL: 'content/staff/cori-williams-cwilli22.JPG',
                        themePhotoURL: 'content/staff/Cori-Williams-cwilli22-utensil.png',
                        theme: undefined,
                    },
                    {
                        cslogin: 'qhuang27',
                        name: '(Hugo) Qiaonan Huang',
                        personalPhotoURL: 'content/staff/Hugo-Qiaonan-Huang.JPG',
                        themePhotoURL: 'content/staff/Qiaonan-Huang-utensil.jpg'
                    },
                    {
                        cslogin: 'hpham2',
                        name: 'Huy Pham',
                        personalPhotoURL: 'content/staff/Huy-Pham-hpham2.jpeg',
                        themePhotoURL: 'content/staff/Huy-Pham-hpham2-utensil.jpg',
                        theme: undefined,
                    },
                    {
                        cslogin: 'jhlavink',
                        name: 'Joseph Hlavinka',
                        personalPhotoURL: 'content/staff/joe-cropped.jpg',
                        themePhotoURL: 'content/staff/Joe-Hlavinka-Utensil.jpg',
                        theme: undefined
                    },
                    {
                        cslogin: 'ndo3',
                        name: 'Nam Do',
                        personalPhotoURL: 'content/staff/Nam-Do-ndo3.jpg',
                        themePhotoURL: 'content/staff/Nam-Do-ndo3-utensil.jpg',
                        theme: undefined,
                    },
                    {
                        cslogin: 'neisele',
                        name: 'Nick Eisele',
                        personalPhotoURL: 'content/staff/nick-eisele-neisele.jpg',
                        themePhotoURL: 'content/staff/nick-eisele-neisele-utensil.jpeg',
                        theme: undefined
                    },
                    {
                        cslogin: 'odai',
                        name: 'Omer Dai',
                        personalPhotoURL: 'content/staff/Ömer-Dai-odai-.jpg',
                        themePhotoURL: 'content/staff/Ömer-Dai-utensil.jpg',
                        theme: undefined,
                    },
                    {
                        cslogin: 'pdasgup1',
                        name: 'Prithu Dasgupta',
                        personalPhotoURL: 'content/staff/Prithu-Dasgupta-pdasgup1.JPG',
                        themePhotoURL: 'content/staff/Prithu-Dasgupta-pdasgup1-utensil.jpg',
                        theme: undefined,
                    },
                    {
                        cslogin: 'rbattula',
                        name: 'Rajyashri Battula',
                        personalPhotoURL: 'content/staff/Rajyashri-Battula.jpg',
                        themePhotoURL: 'content/staff/Rajyashri-Battula-cooking-utensil.jpeg',
                        theme: undefined,
                    },
                    {
                        cslogin: 'rbriden',
                        name: 'Ross Briden',
                        personalPhotoURL: 'content/staff/Ross-Briden-rbriden.jpg',
                        themePhotoURL: 'content/staff/Ross-Briden-rbriden-utensil.jpeg',
                        theme: undefined,
                    },
                    {
                        cslogin: 'slamy',
                        name: 'Sebastien Lamy',
                        personalPhotoURL: 'content/staff/Sebastien-Lamy-staff-photo.jpg',
                        themePhotoURL: 'content/staff/Sebastien-Lamy-utensil.jpg',
                        theme: undefined,
                    }
                ],
            ],
        };
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
    `,
});
