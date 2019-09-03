import pageBackground from './page-background.js';
import pageFooter from './page-footer.js';
import pageNavbar from './page-navbar.js';

new Vue({
    el: '#app',
    data: {
        pageThemeColors: [
            '#009ec4' /* しるべのクジラ */,
            '#525c15'/* サンセットバスストップ */,
            'midnightblue' /* 始発とカフカ */,
            '#a1659e' /* palette */,
            '#0c85a7' /* DAYBREAK FRONTLINE */,
            'rgb(245, 223, 220)'/*  */,
            '#ed9b65' /* 渚 */
        ],
        navbarBackgroundColor: 'white',
        tabTexts: ['algo', 'lectures', 'sections', 'assignments', 'hours', 'staff', 'resources'],
        pageFilepaths: ['index.html', 'lectures.html', 'sections.html', 'assignments.html', 'hours.html', 'staff.html', 'resources.html'],
        busClasses: ['fas', 'fa-lg', 'fa-bus'],
        planeClasses: ['fas', 'fa-lg', 'fa-plane'],
        trainClasses: ['fas', 'fa-lg', 'fa-train'],
        subwayClasses: ['fas', 'fa-lg', 'fa-subway'],
        tramClasses: ['fas', 'fa-lg', 'fa-tram'],
        bicycleClasses: ['fas', 'fa-lg', 'fa-bicycle'],
        shuttleVanClasses: ['fas', 'fa-lg', 'fa-shuttle-van'],
        shipClasses: ['fas', 'fa-lg', 'fa-ship'],
    },
    components: {
        'page-background': pageBackground,
        'page-footer': pageFooter,
        'page-navbar': pageNavbar,
    },
    computed: {
        currentTabText: function() {
            return document.title.substring(8).toLowerCase();
        },
        tabnum: function() {
            return this.tabTexts.indexOf(this.currentTabText);
        },
        curPageThemeColor: function() {
            return this.pageThemeColors[this.tabnum];
        },
        curPageIconClasses: function() {
            return this.iconClasses[this.tabnum];
        },
        iconClasses: function() {
            return [
                this.shipClasses,
                this.busClasses,
                this.trainClasses,
                this.planeClasses,
                this.shuttleVanClasses,
                this.tramClasses,
                this.bicycleClasses
            ];
        },
    },
});
