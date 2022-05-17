import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Screens } from "../../enums/Screens";
import {Home} from "../../screens"

const Stack = createStackNavigator();

const AppNavigation : React.FC = () =>{
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={Screens.HOME} component={Home} />
        </Stack.Navigator>
    )
}

export default AppNavigation;