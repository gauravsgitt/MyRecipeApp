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
  const [selectedRadio, setSelectedRadio] = useState(0);

  const radioButtonArray = [
    {
      title: 'Radio 1'
    },
    {
      title: 'Radio 2'
    },
    {
      title: 'Radio 3'
    },
    {
      title: 'Radio 4'
    },
    {
      title: 'Radio 5'
    },
    {
      title: 'Radio 6'
    },
    {
      title: 'Radio 7'
    }
  ];

  return (
    <SafeAreaView style={styles.mySafeAreaView}>
      <View style={styles.myMainContainerView}>
        {
          radioButtonArray.map((item, index) => {
            return (
              <MyRadioButtons index={index}
                title={item.title}
                resetSelection={resetSelection}
                setResetSelection={setResetSelection}
                selectedRadio={selectedRadio}
                setSelectedRadio={setSelectedRadio} />
            )
          })
        }
        <View style={{ flex: 1, margin: 10 }}>
          <Button title='Reset selection' onPress={() => setResetSelection(true)} />
        </View>
      </View>
    </SafeAreaView>
  )
};

export default App;
