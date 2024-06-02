import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Profile() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Page</Text>
      <Link href="/" style={{ color: "blue" }}>
        <Text>Go to Home</Text>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // Add any styles you need here
});
