import {createAction, createReducer} from '@reduxjs/toolkit';

const ADD_RECIPES = 'ADD_RECIPES';
const SELECTED_RECIPE = 'SELECTED_RECIPE';

export const addRecipes = createAction(ADD_RECIPES);
export const selectedRecipe = createAction(SELECTED_RECIPE);

const initialState = {
  list: [
    {
      id: 716426,
      title: 'Cauliflower, Brown Rice, and Vegetable Fried Rice',
      image: 'https://spoonacular.com/recipeImages/716426-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 715594,
      title: 'Homemade Garlic and Basil French Fries',
      image: 'https://spoonacular.com/recipeImages/715594-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 715497,
      title: 'Berry Banana Breakfast Smoothie',
      image: 'https://spoonacular.com/recipeImages/715497-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 644387,
      title: 'Garlicky Kale',
      image: 'https://spoonacular.com/recipeImages/644387-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 716268,
      title: 'African Chicken Peanut Stew',
      image: 'https://spoonacular.com/recipeImages/716268-312x231.jpg',
      imageType: 'jpg',
    },
  ],
  selectedRecipe: {},
};

export default createReducer(initialState, builder => {
  builder
    .addCase(addRecipes, (state, action) => {
      return {
        ...state,
        list: action.payload.data,
      };
    })
    .addCase(selectedRecipe, (state, action) => {
      console.log('ACTION', action);
      return {
        ...state,
        selectedRecipe: action.payload.data,
      };
    });
});
