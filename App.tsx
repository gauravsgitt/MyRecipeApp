import React from 'react';
import {
  SafeAreaView,
  View
} from 'react-native';
import TopView from './customComponents/TopView';
import styles from './styles/styles';
import RecipeAndIngredientsTableView from './customComponents/RecipeAndIngredientsTableView';

const App = () => {

  return (
    <SafeAreaView style={styles.mySafeAreaView}>
      <View style={styles.myMainContainerView}>
        <TopView />
        <RecipeAndIngredientsTableView />
      </View>
    </SafeAreaView>
  )
}

export default App;
