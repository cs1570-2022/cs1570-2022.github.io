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
                        name: 'Lorenzo De Stefani',
                        personalPhotoURL: 'content/staff/lorenzo_personal.png',
                        themePhotoURL: 'content/staff/lorenzo-food.jpg',
                        theme: '',
                    },
                ],
                [
                    {
                        name: 'Anna Dai',
                        personalPhotoURL: 'content/staff/Anna-Dai.jpg',
                        themePhotoURL: 'content/staff/Anna-Dai-food.jpg',
                        theme: '',
                    },
                ],
                [
                    {
                        name: 'Andy Delworth',
                        personalPhotoURL: 'content/staff/Andy-Delworth.jpg',
                        themePhotoURL: 'content/staff/Andy-Delworth-food.jpg',
                        theme: undefined,
                    },
                    {
                        name: 'James Cai',
                        personalPhotoURL: 'content/staff/James-Cai.jpg',
                        themePhotoURL: 'content/staff/James-Cai-food.jpg',
                        theme: undefined,
                    },
                    {
                        name: 'Pezanne Khambatta',
                        note: 'Grad TA',
                        personalPhotoURL: 'content/staff/Pezanne-Khambatta.jpg',
                        themePhotoURL: 'content/staff/Pezanne-Khambatta-food.jpg',
                        theme: undefined,
                    },
                    {
                        name: 'Robert Wang',
                        personalPhotoURL: 'content/staff/Robert-Wang.jpg',
                        themePhotoURL: 'content/staff/Robert-Wang-food.jpg',
                        theme: undefined,
                    },
                    {
                        name: 'Charlotte Whatley',
                        personalPhotoURL: 'content/staff/Charlotte-Whatley.jpg',
                        themePhotoURL: 'content/staff/Charlotte-Whatley-food.jpg',
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
                        name: 'Zichuan Wang',
                        note: 'Grad TA',
                        personalPhotoURL: 'content/staff/Zichuan-Wang.jpg',
                        themePhotoURL: 'content/staff/Zichuan-Wang-food.jpg',
                        theme: undefined,
                    },
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
