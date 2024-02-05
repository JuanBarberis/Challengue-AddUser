import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = () => {
    

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <TouchableOpacity 
            onPress={()=>console.log('ir a vista agregar usuario')}
            >
                <Text>Ir a Add User</Text>
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