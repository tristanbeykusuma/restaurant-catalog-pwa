const DrawerInitiator = {
  init({button, drawer, content, hero}) {
    this._item = true;

    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    button.addEventListener('keypress', (event) => {
      this._togglekeyDrawer(event, drawer);
    });

    hero.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('move-nav');
    this._navTransit();
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('move-nav');
    this._navTransit();
  },

  _navTransit() {
    const draw = document.querySelector('nav').classList.contains('move-nav');
    const navigation = document.querySelectorAll('nav a');
    const mediaQuery = window.matchMedia('(max-width: 599px)');

    if (mediaQuery.matches) {
      if (draw) {
        navigation.forEach((navigate) => {
          navigate.setAttribute('tabindex', '0');
        });
      } else if (!draw) {
        navigation.forEach((navigate) => {
          navigate.setAttribute('tabindex', '-1');
        });
      }
    }
  },

  _togglekeyDrawer(event, drawer) {
    event.stopPropagation();
    if (event.key === 'Enter') {
      event.preventDefault();
      drawer.classList.toggle('move-nav');
      this._navTransit();
    }
  },

  toggle(item) {
    item === true ? item = false : item = true;
    return item;
  },
};

export default DrawerInitiator;

