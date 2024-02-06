import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const AddUser = () => {

  const [state, setState] = useState({
    name: '',
    img: ''
  })
  const dispatch = useDispatch()

  const handleAddUser = () => {
    dispatch(AddUser({ name: state.name, img: state.img }))
  }
  console.log(state)
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Ingrese nombre'
        style={styles.input}
        value={state.name}
        onChangeText={(text) => setState({ ...state, name: text })}
      />
    </View>
  )
}

export default AddUser

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    textAlign: 'center'
  }
})