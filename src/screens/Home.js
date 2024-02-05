import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { logUser } from '../store/user/UserSlice'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {

    const [state, setState] = useState({
        name: '',
    })
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    return (
        <View style={styles.container}>
            <TextInput
                placeholder='ingrese su nombre'
                style={styles.input}
            />

        </View>
    )
}

export default Home

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
        alignSelf: 'center'
    }
})