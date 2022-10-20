const assert = require('assert');

Feature('Liking and Reviewing Restaurants');

Before(({I}) => {
  I.amOnPage('/#/favorites');
  I.wait(2);
});

Scenario('showing empty favorited restaurant', ({I}) => {
  I.seeElement('.posts');
  I.see('No Restaurants are Favorited', '.no-favorite');
});

Scenario('liking one restaurant', async ({I}) => {
  I.see('No Restaurants are Favorited', '.no-favorite');

  I.amOnPage('/');

  I.wait(2);
  I.seeElement('.post-item__title a');
  const firstFilm = locate('.post-item__title a').first();
  const firstFilmTitle = await I.grabTextFrom(firstFilm);
  I.click(firstFilm);

  I.wait(2);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.wait(2);
  I.amOnPage('/#/favorites');
  I.seeElement('.post-item');
  const likedFilmTitle = await I.grabTextFrom('.post-item__title a');

  assert.strictEqual(firstFilmTitle, likedFilmTitle);
  I.click(locate('.post-item__title a').at(1));
  I.wait(3);
  I.seeElement('#likeButton');
  I.click('#likeButton');
});

Scenario('liking and unliking restaurants', async ({I}) => {
  I.see('No Restaurants are Favorited', '.no-favorite');

  I.amOnPage('/#/restaurants');
  I.wait(1);

  I.seeElement('.post-item__title a');

  const titles = [];

  for (let i = 2; i <= 3; i++) {
    I.click(locate('.post-item__title a').at(i));
    I.wait(3);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    titles.push(await I.grabTextFrom('.restaurant__title'));
    I.amOnPage('/#/restaurants');
  }

  I.amOnPage('/#/favorites');
  I.wait(2);
  I.seeElement('.post-item');

  const visibleLikedMovies = await I.grabNumberOfVisibleElements('.post-item');
  assert.strictEqual(titles.length, visibleLikedMovies);

  titles.forEach(async (title, index) => {
    const visibleTitle = await I.grabTextFrom(locate('.post-item__title a').at(index + 1));
    assert.strictEqual(title, visibleTitle);
  });

  for (let i = 1; i <= 2; i++) {
    I.click(locate('.post-item__title a').at(1));
    I.wait(3);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/favorites');
    I.wait(1);
  }

  I.see('No Restaurants are Favorited', '.no-favorite');
});

Scenario('posting a restaurant review', async ({I}) => {
  I.see('No Restaurants are Favorited', '.no-favorite');

  I.amOnPage('/#/restaurants');
  I.wait(1);

  I.seeElement('.post-item__title a');
  const firstRestoPost = locate('.post-item__title a').first();
  I.click(firstRestoPost);

  const postName = 'Testing';
  I.fillField('#reviewName', postName);
  const postReview = 'Saya suka restoran ini';
  I.fillField('#reviewString', postReview);

  I.click('#inputSubmit');

  const namePosted = await I.grabTextFrom(locate('.review_posted p').at(2));
  const namePostedSliced = namePosted.slice(7);
  const reviewPosted = await I.grabTextFrom(locate('.review_posted p').at(3));
  const reviewPostedSliced = reviewPosted.slice(9);
  assert.strictEqual(namePostedSliced, postName);
  assert.strictEqual(reviewPostedSliced, postReview);
});
