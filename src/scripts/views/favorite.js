import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import FavoriteRestoView from './favorite-resto-view';
import FavoriteRestoShowPresenter from './favorite-resto-show-presenter';

const view = new FavoriteRestoView();

const RestaurantFavorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestoShowPresenter({view, favoriteRestaurant: FavoriteRestaurantIdb});
  },
};

export default RestaurantFavorite;
