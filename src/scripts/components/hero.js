class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <div class="hero">
              <picture>
                <source media="all and (max-width: 600px)" srcset="./images/heros/hero-image_2-small.jpg">
                <source media="all and (min-width: 601px)" srcset="./images/heros/hero-image_2-extra.jpg">
                <img src='./images/heros/hero-image_2-extra.jpg' 
                  alt="discover foods hero image">
              </picture>
              <h2 class="hero__title">Discover Foods</h2>
          </div>
        `;
  }
}

customElements.define('hero-box', Hero);
