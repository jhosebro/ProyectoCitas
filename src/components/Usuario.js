import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const Usuario = ({item, setModalVisible, usuarioEditar}) => {
  const {usuario, fecha, id} = item;

  const formatearFecha = fecha => {
    const nuevaFecha = new Date(fecha);
    const dias_semana = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miercoles',
      'Jueves',
      'Viernes',
      'Sabado',
    ];
    const meses = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];
    const day = dias_semana[nuevaFecha.getDay()];
    const month = meses[nuevaFecha.getMonth()];
    const year = nuevaFecha.getUTCFullYear();
    const hour = nuevaFecha.getHours();
    const minute = nuevaFecha.getUTCMinutes();
    let fechaFinal = '';
    if (minute < 10) {
      fechaFinal = `${day} ${nuevaFecha.getDate()} de ${month} de ${year} a las ${hour}:0${minute}`;
    } else {
      fechaFinal = `${day} ${nuevaFecha.getDate()} de ${month} de ${year} a las ${hour}:${minute}`;
    }
    return fechaFinal;
  };
  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>Usuario: </Text>
      <Text style={styles.texto}>{usuario}</Text>
      <Text style={styles.fecha}>{formatearFecha(fecha)}</Text>

      <View style={styles.contenedorBotones}>
        <Pressable
          style={[styles.btn, styles.btnEditar]}
          onLongPress={() => {
            setModalVisible(true)
            usuarioEditar(id)
          }}>
          <Text style={styles.btnTexto}>Editar</Text>
        </Pressable>

        <Pressable style={[styles.btn, styles.btnEliminar]}>
          <Text style={styles.btnTexto}>Eliminar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  label: {
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  texto: {
    color: '#003cfd',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  fecha: {
    color: '#374151',
  },
  contenedorBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  btnEditar: {
    backgroundColor: '#fdc100',
  },
  btnEliminar: {
    backgroundColor: '#EF4444',
  },
  btnTexto: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 12,
    color: 'white',
  },
});

export default Usuario;
