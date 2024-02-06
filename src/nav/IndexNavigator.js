import React from "react"
import { useSelector } from "react-redux"
import { StackNav, UserNavigation } from "./stack/StackNav"
import { NavigationContainer } from "@react-navigation/native"

const IndexNavigator = () => {

    const user = useSelector(state => state.user)
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

export default IndexNavigator