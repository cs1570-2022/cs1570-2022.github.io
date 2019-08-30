new Vue({
    el: '#app',
    components: {
        'page-navbar': pageNavbar,
        'page-footer': pageFooter,
    },
    data: {
        pageThemeColors: [
            'rgb(0, 158, 196)' /* しるべのクジラ */,
            'rgb(88, 54, 48)'/* サンセットバスストップ */,
            'rgb(246, 250, 236)' /* 始発とカフカ */,
            'rgb(166, 211, 214)' /* DAYBREAK FRONTLINE */,
            'rgb(245, 223, 220)'/* palette */,
            'rgb(249, 245, 225)' /* 渚 */
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
