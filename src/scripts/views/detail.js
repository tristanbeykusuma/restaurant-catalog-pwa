import UrlParser from '../routes/url-parser';
import RestaurantApiSource from '../data/restaurantapi-source';
import createRestaurantDetail from './template/detail-template';
import LikeButtonInitiator from '../utils/favorite-init';
import ReviewPostInitiator from '../utils/review-post-init';
import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';

const RestaurantDetail = {
  async render() {
    return `
      <h2 class="content-inside__label">Restaurant Detail</h2>
      <div id="restaurant-detail" class="resto"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestaurantApiSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('.resto');
    restaurantContainer.innerHTML = createRestaurantDetail(restaurants);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurants.id,
        pictureId: restaurants.pictureId,
        name: restaurants.name,
        city: restaurants.city,
        rating: restaurants.rating,
        description: restaurants.description,
      },
    });

    ReviewPostInitiator.init({
      submitForm: document.querySelector('form'),
      id: restaurants.id,
    });
  },
};

export default RestaurantDetail;
