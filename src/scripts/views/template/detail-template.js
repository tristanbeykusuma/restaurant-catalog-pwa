import CONFIG from '../../globals/config';

const createRestaurantDetail = (restaurants) => {
  let container = `
  <h2 class="restaurant__title">${restaurants.name}</h2>
  <div class="restaurant__header">
  <img class="restaurant__poster" 
  src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" 
  alt="${restaurants.name}" />
  <div class="restaurant__info">
    <h4>City</h4>
    <p>${restaurants.city}</p>
    <h4>Address</h4>
    <p>${restaurants.address}</p>
    <h4>Rating</h4>
    <p>${restaurants.rating}</p>
  </div>
  </div>
  <div class="restaurant__overview__desc">
    <h3>Restaurant Description</h3>
    <p>${restaurants.description}</p>
  </div>`;

  container += `
  <div class="restaurant__overview__menu">
    <h3>Restaurant Menu</h3>
    <h4>Foods</h4>
    <div class="restaurant__foods">
  `;

  restaurants.menus.foods.forEach((food) => {
    container += `
    <div class="menu-instance">
        <div class="menu-paragraph">
            <p>${food.name}</p>
        </div>
    </div>`;
  });

  container += `
  </div>
  <h4>Drinks</h4>
  <div class="restaurant__drinks">`;

  restaurants.menus.drinks.forEach((drink) => {
    container += `
    <div class="menu-instance">
        <div class="menu-paragraph">
            <p>${drink.name}</p>
        </div>
    </div>`;
  });

  container += `</div></div>`;
  container += `
  <div class="restaurant__overview__review">
    <h3 class="review-head">Restaurant Reviews</h3>
    <div class="restaurant__review__grid">
  `;

  restaurants.customerReviews.forEach((reviews) => {
    container += `
    <div class="review-instance">
        <div class="review-title">
            <h3 class="review-title">${reviews.name}</h3>
        </div>
        <div class="review-paragraph">
            <p>${reviews.review}</p>
            <p>${reviews.date}</p>
        </div>
    </div>
    `;
  });

  container += `
  </div>
  </div>
  <div class="review_input">
    <hr>
    <h3>Add A Review</h3>
    <form class="form" action="/#/detail/${restaurants.id}" id="form_input">
        <div class="form_segment">
        <label for="reviewName">Input your name</label>
        <input id="reviewName" 
        name="reviewName" type="text" required>
        </div>
        <div class="form_segment">
        <label for="reviewString">Input your review</label>
        <textarea id="reviewString" 
        name="reviewString" type="text" required></textarea>
        </div>
        <input id="inputSubmit" 
        value="Submit Data" name="Submit" 
        type="submit" 
        aria-label="Submit Review" 
        class="review__button">
    </form>
    </div>
    <div class="review_posted">
    </div>
  `;

  return container;
};

export default createRestaurantDetail;
