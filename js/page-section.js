const pageSectionTitle = {
    props: {
        backgroundColor: String,
        text: String,
        iconClasses: Array,
        textDecorationStyle: {
            type: String,
            default: 'double',
        },
    },
    data: function() {
        return {
            styleObject: {
                color: this.backgroundColor,
                width: '20%',
                'font-size': 'xx-large',
                'text-decoration': 'underline',
                'text-decoration-style': this.textDecorationStyle,
                '-webkit-text-decoration-style': this.textDecorationStyle,
                '-moz-text-decoration-style': this.textDecorationStyle
            },
        };
    },
    template: `
        <h2
          class="text-capitalize text-nowrap font-weight-bold mx-5 mb-5"
          :style="styleObject"
        >
            <i class="mr-2" :class="iconClasses"></i>
            <span>
              {{text}}
            </span>
        </h2>
    `
};


export default pageSectionTitle;
