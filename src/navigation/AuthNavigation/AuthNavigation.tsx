import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Screens } from "../../enums/Screens";
import {Login,Register} from "../../screens"

const Stack = createStackNavigator();

const AuthNavigation : React.FC = () =>{
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={Screens.LOGIN} component={Login} />
            <Stack.Screen name={Screens.REGISTER} component={Register} />
        </Stack.Navigator>
    )
}

export default AuthNavigation;