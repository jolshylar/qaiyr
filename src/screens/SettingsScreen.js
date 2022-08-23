import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";
import project from "../../package.json";

const Setting = ({ children, isDanger = false }) => {
  return (
    <View className="w-full px-4 py-2 flex-row items-center justify-between border-b">
      <Text className={`text-xl font-bold ${isDanger && "text-red-500"}`}>
        {children}
      </Text>
      {!isDanger && <ChevronRightIcon />}
    </View>
  );
};

const SettingsScreen = () => {
  const navigaiton = useNavigation();
  return (
    <SafeAreaView>
      {/* Navigation */}
      <TouchableOpacity
        className="flex-row w-full justify-between px-8 py-2"
        onPress={navigaiton.goBack}
      >
        <ChevronLeftIcon size={24} color="#3B7F8E" />
      </TouchableOpacity>

      <View className="my-10">
        {/* Navigation */}
        <Setting>Privacy Policy</Setting>
        <Setting>FAQs</Setting>
        <Setting>Contact Us</Setting>
        {/* Danger Zone */}
        <Setting isDanger>Sign Out</Setting>
        <Setting isDanger>Delete Account</Setting>
      </View>

      {/* App Info */}
      <Text className="text-center text-2xl font-bold">
        {project.name} v{project.version}
      </Text>
    </SafeAreaView>
  );
};

export default SettingsScreen;
