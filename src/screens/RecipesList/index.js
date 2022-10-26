import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useFetchRecipes} from '../../api/recipes/useFetchRecipes';
import {useSelector} from 'react-redux';
import {getRecipesList} from '../../redux/selectors';
import RecipeTile from './RecipeTile';

export default function RecipesList() {
  const {getAllRecipes} = useFetchRecipes();

  const allRecipes = useSelector(getRecipesList);

  useEffect(() => {
    getAllRecipes();
  }, [getAllRecipes]);

  const renderItem = ({item}) => <RecipeTile item={item} />;

  return (
    <View>
      <Text>Recipes List</Text>
      <FlatList
        data={allRecipes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}
