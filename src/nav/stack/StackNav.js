import React from 'react';
import Home from '../../screens/Home';
import AddUser from '../../screens/AddUser';
import Loggin from '../../screens/Loggin';

import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from '../bottom/BottomTab';
import Settings from '../../screens/Settings';

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
            name: 'settings',
            component: Settings
        },
        {
            name: 'add-user',
            component: AddUser
        }
    ]

    return (

        <Stack.Navigator
            initialRouteName='bottom-tab'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='bottom-tab' component={BottomTab} />
            {
                userIsLoged.map((item, index) => {
                    return (
                        <Stack.Screen key={index} name={item.name} component={item.component} />
                    )
                })
            }
        </Stack.Navigator>

    )
}

export { StackNav, UserNavigation }