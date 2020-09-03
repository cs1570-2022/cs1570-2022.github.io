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
                        themePhotoURL: undefined,
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
                        themePhotoURL: undefined,
                        // photoStyle: { 'background-position': '0%, 50%' },
                        theme: '',
                    },
                    {
                        cslogin: 'evelasq2',
                        name: 'Evan Velasquez',
                        personalPhotoURL: undefined,
                        themePhotoURL: undefined,
                        theme: '',
                    },
                ],
                [
                    {
                        cslogin: 'bvallian',
                        name: 'Beenish Valliani',
                        personalPhotoURL: undefined,
                        themePhotoURL: undefined,
                        theme: undefined,
                    },
                    {
                        cslogin: 'cwilli22',
                        name: 'Cori Williams',
                        personalPhotoURL: undefined,
                        themePhotoURL: undefined,
                        theme: undefined,
                    },
                    {
                        cslogin: 'hpham2',
                        name: 'Huy Pham',
                        personalPhotoURL: undefined,
                        themePhotoURL: undefined,
                        theme: undefined,
                    },
                    {
                        cslogin: 'ndo3',
                        name: 'Nam Do',
                        personalPhotoURL: undefined,
                        themePhotoURL: undefined,
                        theme: undefined,
                    },
                    {
                        cslogin: 'odai',
                        name: 'Omer Dai',
                        personalPhotoURL: undefined,
                        themePhotoURL: undefined,
                        theme: undefined,
                    },
                    {
                        cslogin: 'pdasgup1',
                        name: 'Prithu Dasgupta',
                        personalPhotoURL: undefined,
                        themePhotoURL: undefined,
                        theme: undefined,
                    },
                    {
                        cslogin: 'rbattula',
                        name: 'Rajyashri Battula',
                        personalPhotoURL: undefined,
                        themePhotoURL: undefined,
                        theme: undefined,
                    },
                    {
                        cslogin: 'rbriden',
                        name: 'Ross Briden',
                        personalPhotoURL: undefined,
                        themePhotoURL: undefined,
                        theme: undefined,
                    },
                    {
                        cslogin: 'slamy',
                        name: 'Sebastien Lamy',
                        personalPhotoURL: undefined,
                        themePhotoURL: undefined,
                        theme: undefined,
                    },
                    // {
                    //     cslogin: 'bvallian',
                    //     name: 'Beenish Valliani',
                    //     personalPhotoURL: undefined,
                    //     themePhotoURL: undefined,
                    //     theme: undefined,
                    // },
                    // {
                    //     cslogin: 'bvallian',
                    //     name: 'Beenish Valliani',
                    //     personalPhotoURL: undefined,
                    //     themePhotoURL: undefined,
                    //     theme: undefined,
                    // },
                    // {
                    //     cslogin: 'bvallian',
                    //     name: 'Beenish Valliani',
                    //     personalPhotoURL: undefined,
                    //     themePhotoURL: undefined,
                    //     theme: undefined,
                    // },
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
