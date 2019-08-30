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
    props: {
        curPageThemeColor: String,
        footerBackgroundColor: String,
    },
    components: {
        'email': email,
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
                CSCI1570 Course Staff
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
                CS157 &bull; Fall 2019 &bull; <a href="http://cs.brown.edu/people/pklein/">Philip Klein</a> &bull; <a href="https://cs.brown.edu">Brown University Computer Science</a>
              </p>
        </footer>
    `
};
