import FavoriteRestoView from '../src/scripts/views/favorite-resto-view';
import FavoriteRestoShowPresenter from '../src/scripts/views/favorite-resto-show-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Showing all favorite restaurants', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestoView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no restaurants have been liked', () => {
    it('should ask for the favorite restaurants', () => {
      const favoriteRestaurant = spyOnAllFunctions(FavoriteRestaurantIdb);

      new FavoriteRestoShowPresenter({
        view,
        favoriteRestaurant,
      });

      expect(favoriteRestaurant.getAllRestaurant).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no restaurants have been liked', (done) => {
      document.getElementById('posts').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.no-favorite').length).toEqual(1);
        done();
      });

      const favoriteRestaurant = spyOnAllFunctions(FavoriteRestaurantIdb);
      favoriteRestaurant.getAllRestaurant.and.returnValues([]);

      new FavoriteRestoShowPresenter({
        view,
        favoriteRestaurant,
      });
    });
  });

  describe('When favorite restaurants exist', () => {
    it('should show the restaurants', (done) => {
      document.getElementById('posts').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.post-item').length).toEqual(2);
        done();
      });

      const favoriteRestaurant = spyOnAllFunctions(FavoriteRestaurantIdb, false);
      favoriteRestaurant.getAllRestaurant.and.returnValues([
        {
          id: 11,
          name: 'A',
          rating: 5,
          description: 'Ini deskripsi restoran A',
        },
        {
          id: 22,
          name: 'B',
          rating: 4,
          description: 'Ini deskripsi restoran B',
        },
      ]);

      new FavoriteRestoShowPresenter({
        view,
        favoriteRestaurant,
      });
    });
  });
});
