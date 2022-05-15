import React from "react";

import { View } from 'react-native'

import { styles } from "./Body.style"

const Body: React.FC = ({children}) => {
  return (
    <View style={styles.body}>
        {children}
    </View>
  )
}

export default Body