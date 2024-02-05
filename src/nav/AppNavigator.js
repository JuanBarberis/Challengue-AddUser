import React from "react"
import { useSelector } from "react-redux"
import StackNav from "./stack/StackNav"
import UserNavigation from './stack/StackNav'
import { NavigationContainer } from "@react-navigation/native"

const AppNavigator = () => {

    const user = useSelector(state => state.user.name)
    console.log(user)

    return (
        <NavigationContainer>
            {
                user.state
                    ?
                    <StackNav />
                    :
                    <UserNavigation />
            }
        </NavigationContainer>


    )
}

export default AppNavigator