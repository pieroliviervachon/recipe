import axios from 'react-native-axios';
import {useDispatch} from 'react-redux';
import {addRecipes, selectedRecipe} from '../../redux/reducers/recipes';
import {
  SPOONACULAR_API_KEY,
  SPOONACULAR_URL_API,
  SPOONACULAR_URL_COMPLEX_SEARCH_API,
} from '@env';

const MAX_PER_PAGE = 30;

export const useFetchRecipes = () => {
  const dispatch = useDispatch();

  const getAllRecipes = async () => {
    try {
      const response = await axios.get(SPOONACULAR_URL_COMPLEX_SEARCH_API, {
        params: {
          apiKey: SPOONACULAR_API_KEY,
          number: MAX_PER_PAGE,
        },
      });
      dispatch(addRecipes({data: response.data.results}));
    } catch (e) {
      console.error('Error in getAllRecipes', e);
    }
  };

  const getRecipeById = async (id) => {
    console.log('ID', `${SPOONACULAR_URL_API}/${id}/information`);
    try {
      const response = await axios.get(
        `${SPOONACULAR_URL_API}/${id}/information`,
        {
          params: {
            apiKey: SPOONACULAR_API_KEY,
          },
        },
      );
      console.log('RESPONSE', response.data);
      dispatch(selectedRecipe({data: response.data}));
    } catch (e) {
      console.error('Error in getRecipeById', e);
    }
  };

  return {
    getAllRecipes,
    getRecipeById,
  };
};
