exports.seed = function (knex) {
  return knex("trucks").insert([
    {
      truck_name: "Tacos R Us",
      truck_img_url: null,
      cusine_type: "Mexican",
      current_location_lat: "40.741895",
      current_location_long: "-73.989308",
    },

    {
      truck_name: "Only Beer",
      truck_img_url: null,
      cusine_type: "Beer",
      current_location_lat: "40.726108113826",
      current_location_long: "-73.99883520642089",
    },

    {
      truck_name: "Bahn Mi",
      truck_img_url: null,
      cusine_type: "Thai",
      current_location_lat: "40.718332533079824",
      current_location_long: "-73.98261320629882",
    },

    {
      truck_name: "Korean Cookin",
      truck_img_url: null,
      cusine_type: "Korean",
      current_location_lat: "40.76612518848283",
      current_location_long: "-73.98587477246093",
    },

    {
      truck_name: "Pizza",
      truck_img_url: null,
      cusine_type: "Pizza",
      current_location_lat: "40.745257",
      current_location_long: "-74.034749",
    },

    {
      truck_name: "Salad Bowls",
      truck_img_url: null,
      cusine_type: "Health and Wellness",
      current_location_lat: "40.728072",
      current_location_long: "-73.954176",
    },

    {
      truck_name: "Expensive Smoothies",
      truck_img_url: null,
      cusine_type: "Health and Wellness",
      current_location_lat: "40.726511",
      current_location_long: "-74.041093",
    },
  ]);
};
