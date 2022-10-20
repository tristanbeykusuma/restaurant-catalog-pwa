class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <div class="hero">
              <picture>
                <source class="img-responsive" media="(max-width: 600px)" srcset="./images/heros/hero-image_2-small.jpg">
                <source class="img-responsive" media="(min-width: 601px)" srcset="./images/heros/hero-image_2-extra.jpg">
                <img class="img-responsive" src='./images/heros/hero-image_2-extra.jpg' 
                  alt="discover foods hero image">
              </picture>
              <h2 class="hero__title">Discover Foods</h2>
          </div>
        `;
  }
}

customElements.define('hero-box', Hero);
