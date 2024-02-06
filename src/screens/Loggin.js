import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { logUser } from '../store/user/UserSlice'
import { useDispatch, useSelector } from 'react-redux'

const Loggin = () => {

    const [state, setState] = useState({
        name: '',
    })
    const user = useSelector(state => state.user.name)
    const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(logUser({ name: state.name, state: true }))
    }
    return (
        <View style={styles.container}>
            <TextInput
                placeholder='ingrese su nombre'
                style={styles.input}
                placeholderTextColor={'lightgrey'}
                value={state.name}
                onChangeText={(text) => setState({ ...state, name: text })}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
            >
                <Text style={styles.textLogin}>Login</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Loggin

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    input: {
        borderWidth: 1,
        width: '80%',
        alignSelf: 'center',
        padding: 5,
        borderRadius: 10,
    },
    button: {
        width: '80%',
        backgroundColor: 'blue',
        padding: 5,
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 10
    },
    textLogin: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',

    }
})