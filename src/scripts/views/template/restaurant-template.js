import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const base = (restaurants) => {
  restaurants.forEach((restaurant) => {
    const container = document.querySelector('.posts');
    const restoContainer = document.createElement('article');
    restoContainer.classList.add('post-item');
    restoContainer.setAttribute('id', restaurant.id );
    restoContainer.setAttribute('tabindex', 0);
    container.append(restoContainer);

    const restoThumbnail = document.createElement('img');
    restoThumbnail.setAttribute('data-src', restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale');
    restoThumbnail.setAttribute('class', 'lazyload');
    restoThumbnail.
        setAttribute('alt', `Image of Restaurant ${restaurant.name}`);
    restoContainer.append(restoThumbnail);

    const restoCity = document.createElement('div');
    restoCity.classList.add('post-item__city');
    restoCity.innerText = restaurant.city;
    restoContainer.append(restoCity);

    const restoContent = document.createElement('div');
    restoContent.classList.add('post-item__content');
    const restoRate = document.createElement('p');
    restoRate.classList.add('post-item__rate');
    restoRate.innerText = 'Rating : ' + restaurant.rating;
    const restoTitle = document.createElement('h3');
    restoTitle.classList.add('post-item__title');
    restoTitle.innerHTML =
    `<a href="/#/detail/${restaurant.id}"><span>${restaurant.name}</span></a>`;
    const restoDescription = document.createElement('p');
    restoDescription.classList.add('post-item__description');
    restoDescription.innerText = restaurant.description;
    restoContent.append(restoRate, restoTitle, restoDescription);
    restoContainer.append(restoContent);
  });
};

export default base;
