import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Link } from "expo-router";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full justify-center items-center h-full px-4 ">
          <Image
            source={require("../assets/images/logo.png")}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={require("../assets/images/cards.png")}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless{"\n"}
              Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={require("../assets/images/path.png")}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
            <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
              Where Creativity Meets Innovation: Embark on a Journey of
              Limitless Exploration with Aora
            </Text>
          </View>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
