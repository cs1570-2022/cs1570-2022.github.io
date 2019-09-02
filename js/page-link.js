const pageLink = {
    name: 'page-link',
    props: {
        target: {
            type: String,
            default: '_self',
        },
        href:String,
        text: String,
    },
    template: `
        <a
          :href="href"
          :target="target"
        >
            {{text}}
            <i class="fas fa-link"></i>
        </a>
    `,
};

export default pageLink;
