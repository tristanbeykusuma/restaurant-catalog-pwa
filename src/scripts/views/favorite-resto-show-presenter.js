class FavoriteRestoShowPresenter {
  constructor({view, favoriteRestaurant}) {
    this._view = view;
    this._favoriteRestaurant = favoriteRestaurant;

    this._showFavoriteResto();
  }

  async _showFavoriteResto() {
    const resto = await this._favoriteRestaurant.getAllRestaurant();
    this._displayMovies(resto);
  }

  _displayMovies(resto) {
    this._view.showFavoriteRestaurant(resto);
  }
}

export default FavoriteRestoShowPresenter;

