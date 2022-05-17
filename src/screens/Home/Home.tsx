import React from "react";
import * as NavigationService from "react-navigation-helpers";
import {Text, Button} from "react-native"

import {data} from "./const"
import {Screens} from "../../enums/Screens"
import {Layout} from "../../components"

const Home : React.FC = () =>{
    return (
        <Layout>
            <Text>Home</Text>
            {data.map((el,key) => (
                <Text style={{backgroundColor: el.color}} key={key}>{el.name}</Text>
            ))}
            <Button onPress={()=>{NavigationService.push(Screens.REGISTER)}} title="Go to register"/>
        </Layout>
    )
}

export default Home;