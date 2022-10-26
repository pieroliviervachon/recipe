import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

export default function RecipeTile({item}) {
  console.log('ITEM', item);
  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.subContainer}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '30%',
    height: 70,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  container: {
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderWidth: 1,
  },
  subContainer: {
    width: '70%',
    padding: 7,
  },
});
