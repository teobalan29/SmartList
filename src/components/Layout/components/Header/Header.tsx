import React from "react";

import { View, Text } from 'react-native'

import { styles } from "./Header.style"

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <View style={styles.test}>
        <Text>teeeext1</Text>
      </View>
      <View style={styles.test}>
        <Text>teeeext2</Text>
      </View>
    </View>
  )
}

export default Header