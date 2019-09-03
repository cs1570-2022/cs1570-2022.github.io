import pageLink from './page-link.js';

const email = {
    props: {
        email: String,
    },
    computed: {
        mailto: function() {
            return `mailto:${this.email}`;
        },
    },
    template: `
      <a :href="mailto">
          {{email}}
          <i class="fas fa-envelope"></i>
      </a>
    `
};


const pageFooter = {
    name: 'page-footer',
    props: {
        curPageThemeColor: String,
        footerBackgroundColor: String,
    },
    components: {
        'email': email,
        'page-link': pageLink,
    },
    data: function() {
        return {
            TAEmail: 'cs1570tas@lists.brown.edu',
            HTAEmail: 'cs1570headtas@lists.brown.edu',
        };
    },
    template: `
        <footer
          class="footer py-4 text-center"
          :style="{'color': curPageThemeColor, 'background-color': footerBackgroundColor}">
              <p class="mb-0">
                  <i class="fas fa-copyright"></i>
                  <page-link href="staff.html" text="CSCI1570 Course Staff"></page-link>
              </p>
              <p>
                  <div class="d-inline-block mx-auto text-left">
                    <span class="d-flex flex-row justify-content-between">
                      <span class="mr-2">
                          HTA:
                      </span>
                      <email :email="HTAEmail"></email>
                    </span>
                    <span class="d-flex flex-row justify-content-between">
                      <span class="mr-2">
                          TA:
                      </span>
                      <email :email="TAEmail"></email>
                    </span>
                  </div>
              </p>
              <p>
                CS1570 &bull;
                Fall 2019 &bull;
                <page-link href="http://cs.brown.edu/people/pklein/" text="Philip Klein"></page-link> &bull;
                <page-link href="https://cs.brown.edu" text="Brown University Computer Science"></page-link>
              </p>
        </footer>
    `
};

export default pageFooter;