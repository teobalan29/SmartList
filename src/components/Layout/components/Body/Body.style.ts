import { StyleSheet} from "react-native";
import { colors } from "../../../../utils/colors"
import {  spacing } from "../../../../utils/sizes";

export const styles = StyleSheet.create({
    body: {
      flex: 0.9,
      backgroundColor: colors.secondaryColor,
      alignItems: "center",
      justifyContent: "center",
      padding: spacing.md,
    },
  });
  