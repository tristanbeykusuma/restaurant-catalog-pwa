import RestaurantApiSource from '../data/restaurantapi-source';
import base from './template/restaurant-template';

const RestaurantNow = {
  async render() {
    return `
      <h2 class="content-inside__label">Restaurants</h2>
      <div class="posts">
      </div> 
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantApiSource.displayRestaurants();
    base(restaurants);
  },
};

export default RestaurantNow;
