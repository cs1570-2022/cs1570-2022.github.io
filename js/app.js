import pageBackground from './page-background.js';
import pageFooter from './page-footer.js';
import pageNavbar from './page-navbar.js';

new Vue({
    el: '#app',
    data: {
        pageThemeColors: [
            '#77bf77' /* しるべのクジラ */,
            '#77bf77'/*  */,
            '#77bf77' /* 始発とカフカ */,
            '#77bf77' /* palette */,
            '#77bf77' /* DAYBREAK FRONTLINE */,
            '#77bf77'/* サンセットバスストップ */,
            '#77bf77' /* 渚 */
        ],
        navbarBackgroundColor: 'white',
        // navbarBackgroundColor: 'white',
        tabTexts: ['algorithms', 'lectures', 'assignments', 'hours', 'staff', 'resources'],
        pageFilepaths: ['index.html', 'lectures.html', 'assignments.html', 'hours.html', 'staff.html', 'resources.html'],
        // busClasses: ['fas', 'fa-lg', 'fa-bus'],
        // planeClasses: ['fas', 'fa-lg', 'fa-plane'],
        // trainClasses: ['fas', 'fa-lg', 'fa-train'],
        // subwayClasses: ['fas', 'fa-lg', 'fa-subway'],
        // tramClasses: ['fas', 'fa-lg', 'fa-tram'],
        // bicycleClasses: ['fas', 'fa-lg', 'fa-bicycle'],
        // shuttleVanClasses: ['fas', 'fa-lg', 'fa-shuttle-van'],
        // shipClasses: ['fas', 'fa-lg', 'fa-ship'],
        busClasses: ['fas', 'fa-lg', 'fa-utensils'],
        planeClasses: ['fas', 'fa-lg', 'fa-utensils'],
        trainClasses: ['fas', 'fa-lg', 'fa-utensils'],
        subwayClasses: ['fas', 'fa-lg', 'fa-utensils'],
        tramClasses: ['fas', 'fa-lg', 'fa-utensils'],
        bicycleClasses: ['fas', 'fa-lg', 'fa-utensils'],
        shuttleVanClasses: ['fas', 'fa-lg', 'fa-utensils'],
        shipClasses: ['fas', 'fa-lg', 'fa-utensils'],
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
