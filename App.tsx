import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Button
} from 'react-native';
import TopView from './customComponents/TopView';
import styles from './styles/styles';
import RecipeAndIngredientsTableView from './customComponents/RecipeAndIngredientsTableView';
import AddRecipeButton from './customComponents/AddRecipeButton';
import MyRadioButtons from './customComponents/myRadioButtons';

const App = () => {

  const [resetSelection, setResetSelection] = useState(false);

  return (
    <SafeAreaView style={styles.mySafeAreaView}>
      <View style={styles.myMainContainerView}>
        <MyRadioButtons resetSelection={resetSelection} setResetSelection={setResetSelection} />
        <View style={{ flex: 1, margin: 10 }}>
          <Button title='Reset selection' onPress={() => setResetSelection(true)} />
        </View>
      </View>
    </SafeAreaView>
  )
};

export default App;
