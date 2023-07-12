const { Recipe } = require('./models');






// Get all recipes
app.get("/recipes", async (req, res) => {
    try {
      const allRecipes = await Recipe.findAll();
  
      res.status(200).json(allRecipes);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  });


  // Get a specific recipe
app.get("/recipes/:id", async (req, res) => {
    const recipeId = parseInt(req.params.id, 10);
  
    try {
      const recipe = await Recipe.findOne({ where: { id: recipeId } });
  
      if (recipe) {
        res.status(200).json(recipe);
      } else {
        res.status(404).send({ message: "Recipe not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  });

// Create a new recipe
app.post("/recipes", async (req, res) => {
    try {
      const newRecipe = await Recipe.create(req.body);
  
      res.status(201).json(newRecipe);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  });