import React from "react";
import * as NavigationService from "react-navigation-helpers";
import {Text, Button} from "react-native"

import {Screens} from "../../enums/Screens"
import {Layout} from "../../components"

const Login : React.FC = () =>{
    return (
        <Layout>
            <Text>login</Text>
            <Button onPress={()=>{NavigationService.push(Screens.REGISTER)}} title="Go to register"/>
        </Layout>
    )
}

export default Login;