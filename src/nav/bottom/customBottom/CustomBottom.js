import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const CustomBottom = (props) => {

    const isFocus = props.state.routes[props.state.index].name
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={styles.touchable}
            >
                <Ionicons name="home" size={32} color={isFocus === 'Home' ? 'blue' : 'gray'} />
                <Text style={isFocus === 'Home' ? styles.text : styles.text2}>HOME</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('User')}
                style={styles.touchable}
            >
                <Ionicons name="person" size={32} color={isFocus === 'User' ? 'blue' : 'gray'} />
                <Text style={isFocus === 'User' ? styles.text : styles.text2}>USER</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomBottom

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        padding: 5
    },
    touchable: {
        alignItems: 'center'
    },
    text: {
        color: 'blue',
    },
    text2: {
        color: 'gray',
    }
})