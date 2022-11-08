import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/loading.css';
import '../styles/responsive.scss';
import '../styles/skeleton.scss';
import App from './views/app';
import './components/header-bar.js';
import './components/hero.js';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#navigation-menu'),
  drawer: document.querySelector('nav'),
  content: document.querySelector('#maincontent'),
  hero: document.querySelector('hero-box'),
  navigation: document.querySelectorAll('nav a'),
  insideContent: document.querySelector('.content-inside'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});

const navigations = document.querySelectorAll('nav a');
const mq = window.matchMedia('(max-width: 599px)');

function handleChange(mql) {
  if (mql.matches) {
    navigations.forEach((navigate) => {
      navigate.setAttribute('tabindex', '-1');
    });
  } else {
    navigations.forEach((navigate) => {
      navigate.removeAttribute('tabindex');
    });
  }
}

handleChange(mq);
mq.addEventListener('change', handleChange);
