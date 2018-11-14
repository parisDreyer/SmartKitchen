# `README`

## Smart Kitchen
### By: Amanda Mitchell, Nathasha Surendran, Chris Yip, Luke Dreyer	

- [SmartKitchen Live](https://smart-kitchen1.herokuapp.com/)
- This README documents the steps necessary to get the
application up and running.
- Welcome to Smart Kitchen. Smart Kitchen is a recipe app that suggests what to cook based on what you have.


## `Setup`

- git clone the repo with the url:
https://github.com/parisDreyer/SmartKitchen
- `npm install` -install backend dependencies
- `npm run frontend-install` -install frontend dependencies
- `npm run dev` -start the project running on local host 3000 and 5000
  - the project UI runs on port 3000
  - the server runs on port 5000

The project should then be available at the address `localhost:3000` in your browser


## `Dependencies`

* `NodeJS`, `ExpressJS`, and `CreateReact` installed on your machine

* The frontend is compiled with `webpack` through Facebooks `CreateReact` that generates a `dist/bundle.js` file which is the compiled version of the project
* Frontend UI is handled with `React`


## `Functionality`

* Splash page welcomes users to the site.

- ![Splash Page](/splash_page.png?raw=true "Splash Page")

* Users can `Search` for `recipes` by `ingredients`. Users can search by `voice` using webkit's speech-to-text api or by text on the search page.
  - ![Search Recipes Form](/search_page.png?raw=true "Search Recipes Form")

* Search results are rendered in the recipe index page where the user can select a recipe that they want to view.
  - ![Search Index page](/index_page.png?raw=true "Search Index Page")

* Search results persist between page reloads.

* Recipe Results either have a link to an external site that discusses the recipe, or a link to a recipe show page on the Smart Kitchen site that displays the recipe.

## `Code Samples`

* Backup recipes filtered to match the user's search criteria are always available to supplement those provided by the external API.
```javascript
const filteredBackup = (url) => {
  let params = url.match(/\?ingredient=(.*)/)[1];
  params = params ? params.split(',').map(w => w.replace(/%|-|_|$|#|@|~|<|>|\ |\+|`|/gi, "").toLowerCase()) : params;
  let recipes = [];
  if (params){
  for(let i = 0; i < BackupRecipes.length; ++i) {
      let obj = BackupRecipes[i];
      let canUse = !!obj;
      // let categories = obj.categories ? obj.categories.join(', ') : ''; // use maybe
      for (let j = 0; j < params.length; ++j){
        if (obj)
          if (obj.title) canUse = obj.title.toLowerCase().includes(params[j]);
          else if (obj.ingredients) canUse = obj.ingredients.join(' ').toLowerCase().includes(params[j]);
          // else if (obj.categories) canUse = categories.includes(params[j]) // use maybe
        if(!canUse) break;
      }
      if(canUse) recipes.push({
          title: obj.title,
          ingredients: obj.ingredients,
          directions: obj.directions,
          url: `/recipes/${recipes.length - 1}`,
          label: obj.title || params.join(', '),
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmr2voMEJRAC2K9CmZ9c9B4TLfogkg3iN0pa3o7DNwL_qnV99K'
        });
      if(recipes.length > 50) break;
    }
  }
  return recipes;
};
module.exports = { filteredBackup };
```

* Recipes are filtered to match the ingredients input by the user.
* Ingredient percent match criteria is decreased if a user inputs fewer than three ingredients, ensuring that some recipes will still be returned if the user input size is small.

```javascript
matchedRecipes = this.state.recipes.filter(recipe => {
  let matchCount = 0;
  const recipeIngredients = recipe.recipe ? recipe.recipe.ingredients : recipe.ingredients ? recipe.ingredients : [];

  this.state.ingredients.forEach(ingredient => {
    recipeIngredients.forEach(recipeIngredient => {
      if (recipeIngredient.text ? recipeIngredient.text.includes(ingredient) : recipeIngredient.includes(ingredient)) {
        matchCount += 1;
      }
    });
  });

  if (this.state.ingredients.length > 2) {
    // if user input is 3 ingredients or more, recipes will be filtered to show
    // only those for which the user has input at least 60% of the listed ingredients
    return matchCount / (recipeIngredients.length) >= 0.6;
  } else {
    // if user input is 1 to 2 ingredients, recipes will be filtered to show
    // only those for which the user has input at least 30% of the listed ingredients
    return matchCount / (recipeIngredients.length) >= 0.3;
  }
});
```
