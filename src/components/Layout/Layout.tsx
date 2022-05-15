import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

import {styles} from "./Layout.style"
import {Header,Body} from "./components"

const Layout: React.FC = ({ children }) => {
  return(
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="black" />
      <Header/>
      <Body>
        {children}
      </Body>
  </SafeAreaView>
  )
};

export default Layout;
