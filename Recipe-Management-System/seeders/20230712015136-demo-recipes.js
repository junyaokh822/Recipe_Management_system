'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('recipes', [{
      title: "Easy No-Knead Pizza Dough",
      description:"This no-knead pizza dough recipe is simple and nearly hands free.",
      ingredients:" 4 cups (500g) all-purpose flour,1 1/2 teaspoons (slightly less than a full packet) instant yeast,1 1/2 teaspoons salt ,1 1/2 cups (350g) lukewarm water, 1 teaspoon olive oil",
      instructions:"Make the dough,Let the dough rise,Shape and use the dough",
      createdAt: new Date(),
      updatedAt: new Date("2022-03-30"),
    }, {
      title: "Grilled Lamb Skewers with Haitian Epis",
      description:"These grilled lamb skewers with Haitian epis are a fantastic option for BBQs or alfresco dining.",
      ingredients:"600g (1.3 pounds) lamb shoulder, cut into 1-inch chunks,2 red onions, medium dice (1-inch chunks) ,1 teaspoon Maldon salt flakes, 1 teaspoon smoked paprika, 1 teaspoon black pepper, 150g Haitian epis paste ,2 tablespoons olive oil, 200g Haitian epis, 1 teaspoon Maldon salt flakes, 1 teaspoon black pepper",
      instructions:"Preheat your grill or broiler to medium high heat, about 400°F, Season the lamb, Marinate the lamb, Make the lamb skewers, Grill or broil the skewers, Cook down the epis, Serve",
      createdAt: new Date("2022-08-09"),
      updatedAt: new Date(),
    }, {
      title: "Air Fryer Baked Potatoes",
      description:"For a baked potato with the crispiest skin and a light and fluffy interior, don’t turn on the oven. Use the air fryer instead! Air fryer baked potatoes take less time and energy to cook.",
      ingredients:" 4 medium to medium-large russet potatoes (about 10 ounces each), 1 tablespoon olive oil, divided , 1/2 teaspoon kosher salt, divided, plus more for serving, Freshly ground black pepper, unsalted butter, shredded sharp cheddar, sour cream, and/or scallions, for serving (as desired)",
      instructions:"Prepare the air fryer and potatoes, Air fry the potatoes, Serve",
      createdAt: new Date("2022-08-12"),
      updatedAt: new Date(),
    }, {
      title: "Grilled Lobster Tails",
      description:"Fire up the grill and make these grilled lobster tails with garlic herb butter. It’s the summertime meal you’ve been missing. Enjoy with corn on the cob, coleslaw, or a side salad.",
      ingredients:" 4 (4 ounce) frozen lobster tails, 6 tablespoons unsalted butter, cut into chunks, 1 clove garlic, minced, 1/4 cup dry white wine, 2 tablespoons chives, chopped, 2 tablespoons parsley, chopped, 2 tablespoons olive oil, 1/4 teaspoon salt, 1/8 teaspoon black pepper, Lemon wedges, for serving",
      instructions:"Thaw the lobster tails, Preheat the grill, Make the herb butter, Butterfly the lobster tails, Grill the lobster tails, Serve lobster tails",
      createdAt: new Date(),
      updatedAt: new Date("2023-06-29"),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('recipes', null, {});
  }
};
