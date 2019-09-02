import pageBackground from './page-background.js';
import pageFooter from './page-footer.js';
import pageNavbar from './page-navbar.js';

new Vue({
    el: '#app',
    data: {
        pageThemeColors: [
            '#009ec4' /* しるべのクジラ */,
            'rgb(88, 54, 48)'/* サンセットバスストップ */,
            'midnightblue' /* 始発とカフカ */,
            'rgb(166, 211, 214)' /* DAYBREAK FRONTLINE */,
            'rgb(245, 223, 220)'/* palette */,
            '#ed9b65' /* 渚 */
        ],
        navbarBackgroundColor: 'white',
        tabTexts: ['algo', 'lectures', 'sections', 'hours', 'staff', 'resources'],
        pageFilepaths: ['index.html', 'lectures.html', 'sections.html', 'hours.html', 'staff.html', 'resources.html'],
        busClasses: ['fas', 'fa-lg', 'fa-bus'],
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
                this.shuttleVanClasses,
                this.tramClasses,
                this.bicycleClasses
            ];
        },
    },
});
