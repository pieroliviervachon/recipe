import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useFetchRecipes} from '../../api/recipes/useFetchRecipes';
import {useSelector} from 'react-redux';
import {getRecipesList} from '../../redux/selectors';
import RecipeTile from './RecipeTile';
import {
  SPOONACULAR_API_KEY,
  SPOONACULAR_URL_API,
  SPOONACULAR_URL_COMPLEX_SEARCH_API,
} from '@env';

export default function RecipesList({navigation}) {
  //const {getAllRecipes} = useFetchRecipes();

  const allRecipes = useSelector(getRecipesList);

  /*useEffect(() => {
    getAllRecipes();
  }, []);*/

  const renderItem = ({item}) => (
    <RecipeTile item={item} navigation={navigation} />
  );

  return (
    <FlatList
      data={allRecipes}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
    />
  );
}
