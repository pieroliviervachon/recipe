export const getRecipesList = store => {
  console.log('STORE', store);
  return store.recipes.list;
};
