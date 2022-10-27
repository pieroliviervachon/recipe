import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

import {getSelectedRecipe} from '../../redux/selectors';
import {useFetchRecipes} from '../../api/recipes/useFetchRecipes';

export default function RecipeDetails({route, navigation}) {
  const {id} = route.params;
  const {getRecipeById} = useFetchRecipes();

  const recipe = useSelector(getSelectedRecipe);

  useEffect(() => {
    getRecipeById(id);
  }, []);

  return (
    <View style={styles.container}>
      <Text>
        {id}: {recipe?.title}
      </Text>
      <TouchableOpacity
        style={styles.returnButton}
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={styles.returnButtonText}>Retour à la liste</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  returnButton: {
    margin: 20,
  },
  returnButtonText: {
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#212121',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
