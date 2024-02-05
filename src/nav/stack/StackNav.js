import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import AddUser from '../../screens/AddUser';
import Loggin from '../../screens/Loggin';

const Stack = createNativeStackNavigator();


const UserNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name='login' component={Loggin} />
        </Stack.Navigator>
    )
}

const StackNav = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="add-usser" component={AddUser} />
        </Stack.Navigator>

    )
}

export default { StackNav, UserNavigation }