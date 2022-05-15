import { StyleSheet} from "react-native";
import { colors } from "../../../../utils/colors"
import {  spacing } from "../../../../utils/sizes";

export const styles = StyleSheet.create({
    header: {
      flex: 0.1,
      backgroundColor: colors.mainColor,
      alignItems: "center", //verticala (invers cand e column)
      justifyContent: "space-between", // orizontala
      paddingLeft: spacing.md,
      paddingRight: spacing.md,
      flexDirection: "row",
    },

    test: {
      backgroundColor: "yellow",
    },
  });
  