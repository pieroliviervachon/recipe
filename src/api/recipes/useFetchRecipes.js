import axios from 'react-native-axios';
import {useDispatch} from 'react-redux';
import {addRecipes} from '../../redux/reducers/recipes';
//import Config from 'react-native-config';

const URL_API = 'https://api.spoonacular.com/recipes/complexSearch';
const API_KEY = '1aa3549940aa4558b707a42d99e0690b';

const MAX_PER_PAGE = 30;

export const useFetchRecipes = () => {
  const dispatch = useDispatch();

  //console.log('URL_API', Config.URL_API);
  const getAllRecipes = async () => {
    try {
      //const response = await axios.get(Config.URL_API, {
      const response = await axios.get(URL_API, {
        params: {
          //apiKey: Config.API_KEY,
          apiKey: API_KEY,
          number: MAX_PER_PAGE,
        },
      });
      dispatch(addRecipes({data: response.data.results}));
    } catch (e) {
      console.error('Error in getAllRecipes', e);
    }
  };

  return {
    getAllRecipes,
  };
};
