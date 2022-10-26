import axios from 'react-native-axios';
import {useDispatch} from 'react-redux';
import {addRecipes} from '../../redux/reducers/recipes';
import {SPOONACULAR_URL_API, SPOONACULAR_API_KEY} from '@env';

const MAX_PER_PAGE = 30;

export const useFetchRecipes = () => {
  const dispatch = useDispatch();

  const getAllRecipes = async () => {
    try {
      const response = await axios.get(SPOONACULAR_URL_API, {
        params: {
          apiKey: SPOONACULAR_API_KEY,
          number: MAX_PER_PAGE,
        },
      });
      console.log('RESPONSE', JSON.stringify(response.data, null, 4));
      dispatch(addRecipes({data: response.data.results}));
    } catch (e) {
      console.error('Error in getAllRecipes', e);
    }
  };

  return {
    getAllRecipes,
  };
};
