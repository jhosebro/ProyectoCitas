/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
} from 'react-native';
import Formulario from './src/components/Formulario';
import Usuario from './src/components/Usuario';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const [usuario, setUsuario] = useState({});

  const usuarioEditar = id => {
    const usuarioEditar = usuarios.filter(usuario => usuario.id == id)

    console.log(usuarioEditar);
  }


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

      {usuarios.length === 0 ? (
        <Text style={styles.noHayCitas}>No hay citas</Text>
      ) : (
        <FlatList
          style={styles.listadoCitas}
          data={usuarios}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <Usuario
                item={item}
                setModalVisible={setModalVisible}
                usuarioEditar={usuarioEditar}
                ></Usuario>
            );
          }}></FlatList>
      )}

      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        usuarios={usuarios}
        setUsuarios={setUsuarios}
        ></Formulario>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F1F4',
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
  noHayCitas: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  listadoCitas: {
    marginTop: 50,
    marginHorizontal: 30,
  },
});
export default App;
