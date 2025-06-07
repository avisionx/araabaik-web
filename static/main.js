class CustomNavbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const theme = this.getAttribute('theme') || 'light';
    const isDark = theme === 'dark';

    const logoSrc = isDark ? '/static/img/logo-dark.png' : '/static/img/logo-light.png';
    const textClass = isDark ? 'text-dark' : 'text-light';
    const navbarClass = isDark ? 'navbar-dark' : 'navbar-light';

    this.innerHTML = `
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-lg-10 offset-lg-1">
            <nav class="navbar ${navbarClass} bg-transparent d-flex align-items-center px-0">
              <a class="navbar-brand" href="/">
                <img src="${logoSrc}" width="75" class="d-inline-block align-top" alt="">
              </a>
              <div class="d-flex align-items-center">
                <a class="nav-item nav-link small ${textClass} mr-lg-3" href="/about">About</a>
                <a class="nav-item nav-link small ${textClass} mr-lg-3" href="/contact">Contact</a>
                <a class="nav-item nav-link small ${textClass} mr-lg-3" target="_blank" rel="noreferrer noopener" href="/static/Araabaik Menu.pdf">Menu</a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    `;
  }
}

class CustomFooter extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-lg-10 offset-lg-1 pt-5 pb-3">
            <div class="row">
              <div class="col-12 col-lg-3 mt-3">
                <p class="mb-2 text-dark font-alt h6">Arãabaik</p>
                <div class="small text-secondary font-weight-light">
                  Experience authentic Arabian flavors with our royal kunafa, shakes, and traditional drinks. Crafted with passion, every bite and sip promises a true taste of Arabia’s rich culinary heritage.
                </div>
                <div class="mt-2">
                  <a href="https://www.instagram.com/araabaik/" target="_blank" rel="noopener noreferrer" class="small text-primary font-weight-light mr-2 no-decor">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" viewBox="0 0 24 24" fill="currentColor">
                      <title>instagram</title>
                      <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/100063626637083" target="_blank" rel="noopener noreferrer" class="small text-primary font-weight-light mr-2 no-decor">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" viewBox="0 0 24 24" fill="currentColor">
                      <title>facebook</title>
                      <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div class="col-12 col-lg-4 offset-lg-1 mt-3">
                <p class="mb-2 text-dark font-alt h6">Reach Us</p>
                <div>
                  <a href="https://maps.app.goo.gl/Mt7kMSLq5cpZthnk9" class="small text-secondary font-weight-light">
                    <b>Okhla Branch:</b> Fine Dining
                  </a>
                </div>
                <div>
                  <a href="https://maps.app.goo.gl/ov75RBVat8SPsvtZ8" class="small text-secondary font-weight-light">
                    <b>Daryaganj Branch:</b> Pickup & Delivery
                  </a>
                </div>
                <div>
                  <a href="https://maps.app.goo.gl/2Dp1WKbh1XzFwrQq8" class="small text-secondary font-weight-light">
                    <b>Amar Colony Branch:</b> Pickup & Delivery
                  </a>
                </div>
                <div class="small text-secondary font-weight-light">
                  <b>Phone:</b>
                  <a href="tel:+918860146656" class="text-secondary">+91 8860146656</a>,
                  <a href="tel:+918178343571" class="text-secondary">+91 8178343571</a>
                </div>
                <div>
                  <a href="mailto:araabaik.noreply@gmail.com" class="small text-secondary font-weight-light">
                    <b>Email:</b> araabaik.noreply@gmail.com
                  </a>
                </div>
              </div>
              <div class="col-12 col-lg-4 mt-3">
                <p class="mb-2 text-dark font-alt h6">Quick Links</p>
                <div><a href="/about" class="small text-secondary font-weight-light">About</a></div>
                <div><a href="/contact" class="small text-secondary font-weight-light">Contact</a></div>
                <div><a href="/static/Araabaik Menu.pdf" class="small text-secondary font-weight-light" target="_blank" rel="noreferrer noopener">Menu</a></div>
                <div><a href="/privacy" class="small text-secondary font-weight-light">Privacy</a></div>
                <div><a href="/terms" class="small text-secondary font-weight-light">Terms</a></div>
              </div>
            </div>
            <hr class="mt-5"/>
            <p class="smaller font-weight-light text-secondary mb-0">
              Copyright © 2025 Araabaik Foods Pvt. Ltd.
              | All rights reserved
              | Made with ❤️ by <a href="https://avisionx.net/" target="_blank" rel="noreferrer noopener">Avi Garg</a>
            </p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('custom-navbar', CustomNavbar);
customElements.define('custom-footer', CustomFooter);
