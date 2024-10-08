import React from 'react';
import {
  SafeAreaView,
  View
} from 'react-native';
import TopView from './customComponents/TopView';
import styles from './styles/styles';
import RecipeAndIngredientsTableView from './customComponents/RecipeAndIngredientsTableView';
import AddRecipeButton from './customComponents/AddRecipeButton';

const App = () => {

  return (
    <SafeAreaView style={styles.mySafeAreaView}>
      <View style={styles.myMainContainerView}>
        <TopView />
        <AddRecipeButton title='Add a recipe' />
        <RecipeAndIngredientsTableView />
      </View>
    </SafeAreaView>
  )
};

export default App;
