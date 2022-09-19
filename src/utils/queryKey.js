const queryKey = {
  users: {
    index: () => "/users",
    level: () => "/users/level",
  },
  restaurents: {
    map: () => `/restaurents/lists/map`,
    menu: () => "/restaurents/menu",
    reviews: () => "/restaurents/reviews",
    restaurant_id: (restaurant_id) => `/restaurents/${restaurant_id}`,
    lists: () => "/restaurents/lists",
    detail: (restaurant_id) => `/restaurents/detail/${restaurant_id}`,
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
    restaurnat_id: (restaurnat_id) => `/review/${restaurnat_id}`,
    review_id: (review_id) => `/review/${review_id}`,
    lists: () => "/my-review/lists",
  },
  owner: {
    index: () => `/owner`,
  },
  comments: {
    review_id: (review_id) => `/comments/${review_id}`,
  },
};

export default queryKey;
