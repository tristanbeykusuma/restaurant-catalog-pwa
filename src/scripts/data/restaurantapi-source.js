import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantApiSource {
  static async displayRestaurants() {
    try {
      const response = await fetch(API_ENDPOINT.NOW_RESTO);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      window.alert('Sorry, getting restaurants failed, please reload: '+ error);
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.detail(id));
      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (error) {
      window
          .alert('Sorry, getting restaurant detail failed, please reload: ' +
          error);
    }
  }

  static async sendReview(id, name, review) {
    const data = {
      'id': `${id}`, 'name': `${name}`, 'review': `${review}`,
    };
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
      const response = await fetch(API_ENDPOINT.REVIEW, options);
      const responseJson = await response.json();
      console.log('Restaurant Reviews after post :\n' +
      JSON.stringify(responseJson.customerReviews));
      const postedReview = document.querySelector('.review_posted');
      postedReview.innerHTML += `<p>Review Posted :</p> 
      <p>Name : ${name} </p> 
      <p> Review : ${review}</p>`;
      postedReview.innerHTML += `<br>`;
    } catch (error) {
      window
          .alert('Sorry, posting restaurant review failed, please reload: ' +
          error);
    }
  }
}

export default RestaurantApiSource;
