import { View, Text, SafeAreaView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import * as Progress from "react-native-progress";

const LoadingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 2000);
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 justify-center items-center gap-8">
      <Image source={require("../assets/logo.png")} className="w-80 h-20" />
      <Progress.Circle size={60} indeterminate color="#3B7F8E" />
    </SafeAreaView>
  );
};

export default LoadingScreen;
