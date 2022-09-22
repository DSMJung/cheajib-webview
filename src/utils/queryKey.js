const queryKey = {
  users: {
    index: () => "/users",
    auth: (code) => `/auth?code=${code}`,
    level: () => "/users/level",
  },
  restaurents: {
    map: (x, y, level, star) =>
      `/restaurants/lists/map?x=${x}&y=${y}&level=${level}&star=${star}`,
    menu: (restaurant_id) => `/restaurants/menu/${restaurant_id}`,
    reviews: (restaurant_id) => `/restaurants/reviews/${restaurant_id}`,
    restaurant_id: (restaurant_id) => `/restaurants/${restaurant_id}`,
    lists: (x, y, level, star) =>
      `/restaurants/lists?x=${x}&y=${y}&level=${level}&star=${star}`,
    detail: (restaurant_id) => `/restaurants/details/${restaurant_id}`,
    info: (restaurent_id) => `/restaurants/info/${restaurent_id}`,
  },
  menu: {
    restaurent_id: (restaurent_id) => `/menu/${restaurent_id}`,
    menu_id: (menu_id) => `/menu/${menu_id}`,
    lists: () => `/menu/lists`,
  },
  images: {
    index: () => "/images",
  },
  review: {
    restaurant_id: (restaurant_id) => `/review/${restaurant_id}`,
    review_id: (review_id) => `/review/${review_id}`,
    my_review: () => "/my-review/lists",
  },
  owner: {
    index: () => `/owner`,
  },
  comments: {
    review_id: (review_id) => `/comments/${review_id}`,
  },
};

export default queryKey;
