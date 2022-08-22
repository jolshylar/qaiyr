import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";
import { ChevronLeftIcon, CogIcon } from "react-native-heroicons/outline";

const Navbar = () => {
  const navigation = useNavigation();
  
  return (
    <View>
      {/* Navigation */}
      <View className="absolute top-14 flex-row w-full justify-between px-8 py-2">
        <TouchableOpacity onPress={navigation.goBack}>
          <ChevronLeftIcon size={24} color="#3B7F8E" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <CogIcon size={24} color="#3B7F8E" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navbar;
