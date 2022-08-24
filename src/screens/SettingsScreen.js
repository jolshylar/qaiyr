import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import {
  BellIcon,
  LockClosedIcon,
  LogoutIcon,
  QuestionMarkCircleIcon,
  SupportIcon,
  UserIcon,
  UserRemoveIcon,
} from "react-native-heroicons/outline";
import project from "../../package.json";

const Setting = ({ children, isDanger = false, leftIcon, screen }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screen)}
      className="px-4 py-2 flex-row items-center space-x-2 border-b mx-2 border-gray-500"
    >
      {leftIcon}
      <Text className={`text-xl font-bold ${isDanger && "text-red-500"}`}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const SettingsScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1">
      <View className="my-20">
        <Setting screen="Profile" leftIcon={<UserIcon color="black" />}>
          Account
        </Setting>
        <Setting leftIcon={<BellIcon color="black" />}>Notifications</Setting>
        <Setting leftIcon={<LockClosedIcon color="black" />}>
          Privacy Policy
        </Setting>
        <Setting leftIcon={<SupportIcon color="black" />}>
          Help and support
        </Setting>
        <Setting leftIcon={<QuestionMarkCircleIcon color="black" />}>
          About
        </Setting>
        {/* Danger Zone */}
        <Setting leftIcon={<LogoutIcon color="red" />} isDanger>
          Sign Out
        </Setting>
        <Setting leftIcon={<UserRemoveIcon color="red" />} isDanger>
          Delete Account
        </Setting>
      </View>

      <Text className="text-center text-gray-400 text-lg">
        Enjoy our product?{" "}
        <Text
          onPress={() => navigation.navigate("Support Authors")}
          className="font-semibold text-[#3B7F8E]"
        >
          Support us!
        </Text>
      </Text>
      {/* App Info */}
      <View className="absolute bottom-10 items-center justify-center w-full">
        <Text className="text-center text-lg font-bold text-gray-400">
          {project.name} v{project.version}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
