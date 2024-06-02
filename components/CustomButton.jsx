import React from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[styles.button, containerStyles, isLoading && styles.loading]}
      disabled={isLoading}
    >
      <Text style={[styles.text, textStyles]}>{title}</Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          style={styles.indicator}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF9C01",
    borderRadius: 10,
    minHeight: 62,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    paddingHorizontal: 8,
    marginTop: 20,
  },
  loading: {
    opacity: 0.5,
  },
  text: {
    color: "#161622",
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
  },
  indicator: {
    marginLeft: 8,
  },
});

export default CustomButton;
