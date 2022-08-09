import React from 'react'
import { Text } from 'react-native'
const Usuario = ({item}) => {
    const {usuario, fecha} = item
  return (
    <Text>{usuario}</Text>
  )
}

export default Usuario