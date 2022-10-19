import {createAction, createReducer} from '@reduxjs/toolkit';

const ADD_RECIPES = 'ADD_RECIPES';
const DELETE_RECIPES = 'DELETE_RECIPES';

export const addRecipes = createAction(ADD_RECIPES);
export const deleteRecipes = createAction(DELETE_RECIPES);

const initialState = [
  {
    list: [],
    selectedRecipes: {},
  },
];

export const list = createReducer(initialState, builder => {
  builder
    .addCase(addRecipes, (state, action) => {
      return {
        list: [...state.list, ...action.payload.data],
        selectedRecipes: {...state.selectedRecipes},
      };
    })
    .addCase(deleteRecipes, (state, action) => {
      return state.filter(recipe => recipe.id !== action.payload.id);
    });
});

export const selectedRecipes = createReducer(initialState, builder => {});
