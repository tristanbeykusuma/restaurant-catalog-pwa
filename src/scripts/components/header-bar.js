class HeaderBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="restaurant-logo">
          <img src="./images/logo/logo-restaurant.svg" 
          alt="Restaurant App Logo">
        </div>
        <h1 class="header__title">Restaurant Catalog</h1>
        <a id="navigation-menu" class="header__menu" 
        aria-label="Open Navigation Menu" tabindex="0">☰</a>
        <nav>
          <ul class="nav__list">
            <li class="nav__item"><a href="#/restaurants">Restaurants</a></li>
            <li class="nav__item"><a href="#/favorites">Favorites</a></li>
            <li class="nav__item"><a href="https://www.linkedin.com/in/tristan-kusuma-abb21917a/" target="_blank" rel="noopener noreferrer">About Us</a></li>
          </ul>
        </nav>
      `;
  }
}

customElements.define('header-bar', HeaderBar);
