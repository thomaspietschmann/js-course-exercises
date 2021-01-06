import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return; // guard clause in case there is no ID in the URL
    recipeView.renderSpinner();

    // 1 Loading recipe
    await model.loadRecipe(id); // returns a promise, therefore use await!

    // 2 Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};

controlRecipes();

// handle change of URL id and show recipe on load
['hashchange', 'load'].forEach(ev => {
  window.addEventListener(ev, controlRecipes);
});
