import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import User from '../../screens/User';
import { StackNav } from '../stack/StackNav';
import Settings from '../../screens/Settings';
import CustomBottom from './customBottom/CustomBottom';

const Tab = createBottomTabNavigator();


const BottomTab = () => {

    const bottomUser = [
        {
            component: Home,
            name: 'Home'
        },
        {
            component: User,
            name: 'User'
        }
    ]
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
            tabBar={props => <CustomBottom {...props} />}
        >

            {
                bottomUser.map((item, index) => {
                    return (
                        <Tab.Screen key={index} name={item.name} component={item.component} />
                    )
                })
            }
        </Tab.Navigator>
    );
}

export default BottomTab