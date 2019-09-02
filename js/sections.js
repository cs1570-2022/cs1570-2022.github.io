const trainWindowShadeHandle = {
    template: `
        <div
          class="train-window-handle d-inline-block rounded-pill"
          style="width: 90%; height: 0.5rem; background-color: #e0e0e0"
        >
        </div>
    `,
};

const trainWindowShade = {
    components: {
        'train-window-shade-handle': trainWindowShadeHandle,
    },
    template: `
        <div
          class="train-window-shade w-100 d-flex flex-column justify-content-end align-items-center"
          style="height: 95%; background-color: rgba(224, 224, 224, 0.2); z-index: -1">
            <train-window-shade-handle></train-window-shade-handle>
        </div>
    `,
};

const trainWindow = {
    components: {
        'train-window-shade':  trainWindowShade,
    },
    template: `
        <div class="train-window d-flex flex-column align-items-center">
            <train-window-shade>
            </train-window-shade>
        </div>
    `,
};

const trainCarriage = {
    props: {
    },
    components: {
        'train-window': trainWindow,
    },
    data: function() {
        return {
            sections: [
                {
                    name: 'Introduction to Algorithms',
                    time: '',
                    location: '',
                    slides: '',
                    capture: '',
                },
            ],
        };
    },
    template: `
        <div
          id="train-carriage"
          class="full-height d-flex flex-row justify-content-around align-items-center"
          style="rgb(246, 250, 237)">
            <train-window
                v-for="(section, index) of sections"
                :key="index"
                v-bind="section"
            >
            </train-window>
        </div>
    `,
};



Vue.component('page-content', {
    components: {
        'train-carriage': trainCarriage,
    },
    template: `
        <main class="full-height">
            <train-carriage></train-carriage>
        </main>
    `
});
