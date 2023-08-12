"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Movies",
      [
        {
          title: "Reckless",
          genres: "Comedy|Drama|Romance",
          year: 2001,
          photo: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "When a Man Loves a Woman",
          genres: "Drama|Romance",
          year: 1995,
          photo: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Creature",
          genres: "Documentary",
          year: 1997,
          photo: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Sex and Zen (Rou pu Tuan zhi tou Qing bao Jian)",
          genres: "Action|Adventure|Comedy|Fantasy",
          year: 2007,
          photo: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Des roses en hiver",
          genres: "Drama",
          year: 2007,
          photo: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Magical Legend of the Leprechauns",
          genres: "Adventure|Children|Comedy|Fantasy|Romance",
          year: 2010,
          photo: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Movies", null, {});
  },
};
