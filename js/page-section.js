const sectionTitle = {
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


const clickCopy = {
    props: {
        text: String,
    },
    methods: {
        selectAndCopy: function() {
            const topicNameElement = this.$el;
            document.execCommand('copy');
            if (document.selection) { // IE
                const range = document.body.createTextRange();
                range.moveToElementText(topicNameElement);
                range.select();
            } else if (window.getSelection) {
                const range = document.createRange();
                range.selectNode(topicNameElement);
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(range);
            }
        },
        copyText: function(event) {
            if (event.clipboardData) {
                event.clipboardData.setData('text/plain', this.name);
            }
        },
    },
    template: `
        <span
          style="cursor: pointer"
          @click.prevent="selectAndCopy"
          @copy.prevent="copyText"
        >
          {{text}}
        </span>
    `,
};


export { clickCopy, sectionTitle };
