'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('recipes', [{
      title: "Easy No-Knead Pizza Dough",
      description:"This no-knead pizza dough recipe is simple and nearly hands free.",
      ingredients:" 4 cups (500g) all-purpose flour,1 1/2 teaspoons (slightly less than a full packet) instant yeast,1 1/2 teaspoons salt ,1 1/2 cups (350g) lukewarm water, 1 teaspoon olive oil",
      instructions:"Make the dough,Let the dough rise,Shape and use the dough",
      created_at: new Date(),
      updated_at: new Date("2022-03-30"),
    }, {
      title: "Grilled Lamb Skewers with Haitian Epis",
      description:"These grilled lamb skewers with Haitian epis are a fantastic option for BBQs or alfresco dining.",
      ingredients:"600g (1.3 pounds) lamb shoulder, cut into 1-inch chunks,2 red onions, medium dice (1-inch chunks) ,1 teaspoon Maldon salt flakes, 1 teaspoon smoked paprika, 1 teaspoon black pepper, 150g Haitian epis paste ,2 tablespoons olive oil, 200g Haitian epis, 1 teaspoon Maldon salt flakes, 1 teaspoon black pepper",
      instructions:"Preheat your grill or broiler to medium high heat, about 400°F, Season the lamb, Marinate the lamb, Make the lamb skewers, Grill or broil the skewers, Cook down the epis, Serve",
      created_at: new Date("2022-08-09"),
      updated_at: new Date(),
    }, {
      title: "Easy No-Knead Pizza Dough",
      description:"This no-knead pizza dough recipe is simple and nearly hands free.",
      ingredients:" 4 cups (500g) all-purpose flour,1 1/2 teaspoons (slightly less than a full packet) instant yeast,1 1/2 teaspoons salt ,1 1/2 cups (350g) lukewarm water, 1 teaspoon olive oil",
      instructions:"Make the dough,Let the dough rise,Shape and use the dough,",
      created_at: new Date(),
      updated_at: new Date("2022-03-30"),
    }, {
      title: "Easy No-Knead Pizza Dough",
      description:"This no-knead pizza dough recipe is simple and nearly hands free.",
      ingredients:" 4 cups (500g) all-purpose flour,1 1/2 teaspoons (slightly less than a full packet) instant yeast,1 1/2 teaspoons salt ,1 1/2 cups (350g) lukewarm water, 1 teaspoon olive oil",
      instructions:"Make the dough,Let the dough rise,Shape and use the dough,",
      created_at: new Date(),
      updated_at: new Date("2022-03-30"),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
