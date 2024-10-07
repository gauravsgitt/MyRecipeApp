import React from 'react';
import {
  SafeAreaView,
  View
} from 'react-native';
import TopView from './customComponents/TopView';
import styles from './styles/styles';
import RecipeAndIngredientsTableView from './customComponents/RecipeAndIngredientsTableView';

const App = () => {
  const data = [
    {
      title: 'Breakfast',
      data: ['Pancakes', 'Omelette', 'Fruit Salad'],
    },
    {
      title: 'Lunch',
      data: ['Grilled Chicken', 'Caesar Salad', 'Spaghetti'],
    },
    {
      title: 'Dinner',
      data: ['Steak', 'Mashed Potatoes', 'Vegetable Stir Fry'],
    },
    {
      title: 'Dessert',
      data: ['Chocolate Cake', 'Ice Cream', 'Cheesecake'],
    },
  ];

  return (
    <SafeAreaView style={styles.mySafeAreaView}>
      <View style={styles.myMainContainerView}>
        <TopView />
        <RecipeAndIngredientsTableView recipesData={data} />
      </View>
    </SafeAreaView>
  )
}

export default App;
