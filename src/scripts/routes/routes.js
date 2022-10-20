import RestaurantNow from '../views/restaurant';
import RestaurantDetail from '../views/detail';
import RestaurantFavorite from '../views/favorite';

const routes = {
  '/': RestaurantNow,
  '/restaurants': RestaurantNow,
  '/detail/:id': RestaurantDetail,
  '/favorites': RestaurantFavorite,
};

export default routes;
