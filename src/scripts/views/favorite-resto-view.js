import base from './template/restaurant-template';

class FavoriteRestoView {
  getTemplate() {
    return `
      <h2 class="content-inside__label">Favorites</h2>
      <div id="posts" class="posts">
      </div> 
    `;
  }

  showFavoriteRestaurant(resto = []) {
    if (resto.length) {
      base(resto);
    } else {
      this._getEmptyMovieTemplate();
    }

    document.getElementById('posts').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyMovieTemplate() {
    const container = document.querySelector('.posts');
    container.innerHTML += '<h3 class="no-favorite">No Restaurants are Favorited</h3>';
  }
}

export default FavoriteRestoView;
