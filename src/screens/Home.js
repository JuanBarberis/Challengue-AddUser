import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LogOut } from '../store/user/UserSlice'
import { useNavigation } from '@react-navigation/native'

const Home = () => {

    const user = useSelector(state => state.user)
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(LogOut({ name: null, state: false }))
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity
                onPress={() => navigation.navigate('add-user')}
            >
                <Text>Ir a Add User</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={handleLogOut}
            >
                <Text>LogOut</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})