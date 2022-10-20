import DrawerInitiator from '../utils/drawer-init';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({button, drawer, content, hero, navigation, insideContent}) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._hero = hero;
    this._navigation = navigation;
    this._insideContent = insideContent;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      hero: this._hero,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    console.log(url);
    const loading = document.querySelector('#loading');
    loading.style.display = 'block';
    const page = routes[url];
    this._insideContent.innerHTML = await page.render();
    await page.afterRender();
    loading.style.display = 'none';
    const skipLinkElement = document.querySelector('.skip-link');
    skipLinkElement.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#maincontent').focus();
    });
  }
}

export default App;
