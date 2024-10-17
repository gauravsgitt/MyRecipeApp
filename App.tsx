import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Modal,
  Button,
  Text
} from 'react-native';
import styles from './styles/styles';

const App = () => {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.mySafeAreaView}>
      <View style={styles.myMainContainerView}>

        <View style={{justifyContent: 'flex-end'}}>
          <Button title="Show Modal" onPress={() => setModalVisible(true)} />
        </View>


        <Modal
          animationType='fade'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <SafeAreaView style={styles.modalOverlay}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello, this is a modal!</Text>
              <View style={{backgroundColor: 'blue', borderRadius: 10, width: '50%'}}>
              <Button color={'white'} title="Close Modal" onPress={() => setModalVisible(false)} />
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      </View>
    </SafeAreaView>
  )
};

export default App;
