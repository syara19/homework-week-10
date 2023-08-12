"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "oainger0@craigslist.org",
          gender: "Female",
          password: "KcAk6Mrg7DRM",
          role: "Construction Worker",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "hblything1@de.vu",
          gender: "Female",
          password: "QLXkU4wnRVbh",
          role: "Engineer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "sivermee2@vkontakte.ru",
          gender: "Male",
          password: "cQQ0flW",
          role: "Architect",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "agreenan3@barnesandnoble.com",
          gender: "Female",
          password: "Kfk3GyIGQm",
          role: "Electrician",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "sthirst4@blog.com",
          gender: "Male",
          password: "rRbsjJGFMq57",
          role: "Construction Foreman",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "loak5@nifty.com",
          gender: "Female",
          password: "46sy8hp1eJ",
          role: "Estimator",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
