import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Post from "../components/Post";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white">
      {/* Header */}
      <View className="flex-row p-4 items-center gap-2">
        <Image
          source={{
            uri: "https://bigredcloud.com/wp-content/uploads/2015/10/4-tips-for-taking-professional-profile-pictures.jpg",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">raiser</Text>
          <Text className="font-bold text-xl">
            Hi, Daryn! <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* Search */}
      <View className="flex-row items-center gap-2 pb-2 mx-4">
        <View className="flex-row items-center gap-2 flex-1 bg-gray-200 p-3 rounded-xl">
          <SearchIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon color="#00CCBB" />
      </View>
      {/* Posts */}
      <ScrollView className="mx-4 mb-32">
        <Post />
        <Post />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
