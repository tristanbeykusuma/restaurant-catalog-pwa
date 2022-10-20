import RestaurantApiSource from '../data/restaurantapi-source';

const ReviewPostInitiator = {
  async init({submitForm, id}) {
    this._submitForm = submitForm;
    this._id = id;
    this._sendPost();
  },

  _sendPost() {
    this._submitForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const nameReview = document.getElementById('reviewName').value;
      document.getElementById('reviewName').value = '';
      const stringReview = document.getElementById('reviewString').value;
      document.getElementById('reviewString').value = '';
      console.log('Sending post to restaurant api');
      await RestaurantApiSource
          .sendReview(this._id, nameReview, stringReview );
      event.preventDefault();
    });
  },
};

export default ReviewPostInitiator;
