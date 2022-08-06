import React, {useState} from 'react';
import {
  Modal,
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Picker} from '@react-native-picker/picker';

const Formulario = ({modalVisible}) => {
  const [usuario, setUsuario] = useState('');
  const [barbero, setBarbero] = useState();
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState(new Date());
  const [servicio, setServicio] = useState('');

  return (
    <Modal animationType="fade" visible={modalVisible}>
      <SafeAreaView style={styles.content}>
        <ScrollView>
          <Text style={styles.titulo}>
            {' '}
            Nueva {''}
            <Text style={styles.tituloBold}>Cita</Text>
          </Text>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre del usuario</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre del usuario"
              placeholderTextColor={'#666'}
              value={usuario}
              onChangeText={setUsuario}></TextInput>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Barbero</Text>
            <View style={styles.fecha}>
              <Picker
                selectedValue={barbero}
                onValueChange={(itemValue, itemIndex) => setBarbero(itemValue)}
                dropdownIconColor={'blue'}>
                <Picker.Item label="Seleccione una opcion" value="" />
                <Picker.Item label="Danny Vallejo" value="Danny Vallejo" />
                <Picker.Item label="Barbero 2" value="Barbero 2" />
                <Picker.Item label="Barbero 3" value="Barbero 3" />
              </Picker>
            </View>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Email del usuario</Text>
            <TextInput
              style={styles.input}
              placeholder="Email del usuario"
              placeholderTextColor={'#666'}
              keyboardType={'email-address'}
              value={email}
              onChangeText={setEmail}></TextInput>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Telefono del usuario</Text>
            <TextInput
              style={styles.input}
              placeholder="Telefono del usuario"
              placeholderTextColor={'#666'}
              keyboardType={'number-pad'}
              maxLength={10}
              value={telefono}
              onChangeText={setTelefono}></TextInput>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Fecha del servicio</Text>
            <View style={styles.fecha}>
              <DatePicker
                date={fecha}
                locale="es"
                mode="datetime"
                androidVariant="nativeAndroid"
                onDateChange={(date) => setFecha(date)}
              />
            </View>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Servicio</Text>
            <TextInput
              style={[styles.input, styles.sintomasInput]}
              placeholder="Describa el o los servicios que desea adquirir"
              placeholderTextColor={'#666'}
              keyboardType={''}
              value={servicio}
              onChangeText={setServicio}
              multiline={true}
              numberOfLines={4}></TextInput>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#003cfd',
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: 'white',
  },
  tituloBold: {
    fontWeight: '900',
  },
  campo: {
    marginTop: 10,
    marginHorizontal: 30,
    marginBottom: 10,
  },
  label: {
    color: 'white',
    marginBottom: 10,
    marginTop: 5,
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 20,
  },
  sintomasInput: {
    height: 100,
  },
  fecha: {
    backgroundColor: 'white',
    borderRadius: 20,
  },
});

export default Formulario;
