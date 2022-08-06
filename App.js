/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, Pressable} from 'react-native';
import Formulario from './src/components/Formulario';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de citas {'\n'}
        <Text style={styles.tituloBold}>Young King BarberShop</Text>
      </Text>

      <Pressable
        onPress={() => setModalVisible(true)}
        style={styles.btnNuevaCita}>
        <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
      </Pressable>

      <Formulario modalVisible={modalVisible}></Formulario>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 25,
    color: '#000000',
    fontWeight: '600',
  },
  tituloBold: {
    fontWeight: '900',
    color: '#003cfd',
  },
  btnNuevaCita: {
    backgroundColor: '#003cfd',
    padding: 20,
    margin: 20,
    borderRadius: 20,
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
});
export default App;
