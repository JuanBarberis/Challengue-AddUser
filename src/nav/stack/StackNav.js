import React from 'react';
import Home from '../../screens/Home';
import AddUser from '../../screens/AddUser';
import Loggin from '../../screens/Loggin';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


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

    const userIsLoged = [
        {
            name: 'home',
            component: Home
        },
        {
            name: 'add-user',
            component: AddUser
        }
    ]
    return (

        <Stack.Navigator
           
        >
            {
                userIsLoged.map((item) => {
                    return (
                        <Stack.Screen name={item.name} component={item.component} />
                    )
                })
            }
        </Stack.Navigator>

    )
}

export { StackNav, UserNavigation }