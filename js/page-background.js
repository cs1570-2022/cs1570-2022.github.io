const pageBackground = {
    name: 'page-background',
    props: {
        backgroundImageUrl: String,
        showTitle: {
            type: Boolean,
            default: true,
        },
    },
    computed: {
        url: function() {
            return `url(${this.backgroundImageUrl})`;
        },
    },
    template: `
        <div
          id="page-background"
          class="container-fluid h-100"
          style="
            background-image: ;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover"
          :style="{'background-image': url}"
        >
              <img
                v-if="showTitle"
                src="imgs/title.png"
                class="img-fluid"
                style="
                  position: absolute;
                  top: 40%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                "
        >
        </div>
    `
};

export default pageBackground;
