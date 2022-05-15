import { StyleSheet, Platform, StatusBar} from "react-native";
import { colors } from "../../utils/colors"

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      backgroundColor: colors.darkBlue,
    },
  });
  