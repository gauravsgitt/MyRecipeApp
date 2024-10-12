import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  ActivityIndicator,
  Button
} from 'react-native';
import styles from './styles/styles';

const App = () => {

  const [showLoader, setShowLoader] = useState(false);

  const showLoaderOnScreen = () => {
    setShowLoader(true)

    setTimeout(() => {
      setShowLoader(false)
    }, 3000);
  }

  return (
    <SafeAreaView style={styles.mySafeAreaView}>
      <View style={styles.myMainContainerView}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink'}}>
        {/* <ActivityIndicator size={'large'} animating={showLoader}/> */}
        {
          showLoader ? <ActivityIndicator size={'large'} animating={showLoader}/> : null
        }
        <Button title="Show Loader" onPress={showLoaderOnScreen}/>
        </View>
      </View>
    </SafeAreaView>
  )
};

export default App;
